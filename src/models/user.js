const Sequelize = require('sequelize');
const database = require('../config/database');
const bcrypt = require('bcrypt');

const User = database.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 20]
		},
		unique: {
			args: true,
			msg: `This user already exists!`
		}
    },
    password_digest: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
    },
    password: {
		type: Sequelize.VIRTUAL,
		allowNull: false,
		validate: {
			notEmpty: true,
			validatePassword: pass => {
				if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(.*[#$^+=!*()@%&])?.{8,}$/.test(pass)){
					throw new Error(`Password isn't strongth enough`);
				}
			}
		},
    },
    password_confirmation: {
		type: Sequelize.VIRTUAL,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
    }
}, {
    freezeTableName: true,
    indexes: [{unique: true, fields: ['username']}],
    instanceMethods: {
        authenticate: value => {
			if (bcrypt.compareSync(value, this.password_digest))
				return this;
			else
				return false;
		}
    }
});

const checkPasswordConfirmation = (user, options, callback) => {
	if (user.password != user.password_confirmation) {
		throw new Error("Password confirmation doesn't match Password");
	}
	return true;
};

const hashPassword = (user, options, callback) => {
	return new Promise(resolve => {
		bcrypt.hash(user.password, 10, (err, hash) => {
			if (err) return callback(err);
			user.set('password_digest', hash);			
			resolve(() => callback(null, options));
		});
	});
};

User.beforeCreate( async (user, options, callback) => {
	if (user.password)
		if (checkPasswordConfirmation(user, options, callback)){ 
			await hashPassword(user, options, callback);		 
		}		
	else
		return callback(null, options);
});

module.exports = User;