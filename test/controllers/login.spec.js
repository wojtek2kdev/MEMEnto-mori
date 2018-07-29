const LoginController = require('../../src/controllers/LoginController');
const User = require('../../src/models/user');
const expect = require('chai').expect;

const auth = LoginController.authentication;

describe(`Authentication login form`, () => {
    
    before(async () => {

        User.truncate();
    
        await User.create({
            username: `test_user`,
            password: `P4ssword!`,
            password_confirmation: `P4ssword!`
        });
        
    });

    it(`Authentication should be correct`, () => {

        const user = {
            username: `test_user`,
            password: `P4ssword!`,
            password_confirmation:`P4ssword!`
        }

        const isUserExists = auth(user).isUserExists();

        expect(isUserExists).to.be.true;

    });

    it(`If authentication isn't correct`, () => {
        
    });

});
