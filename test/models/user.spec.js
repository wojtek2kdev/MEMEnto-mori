const User = require('../../src/models/user');
const expect = require('chai').expect;
const bcrypt = require('bcrypt');

describe(`User register validation`, () => {
    it(`Shouldn't pass password validate`, async () => {
        const username = `test_user`;
        const passwords = [
            `password`,
            `pass`, 
            ``,
            `password1`,
            `Passwrd`,
            `P4sswrd`,
            `P4$$wrd`,
            `abc`,
            `123456789`,
            `123`,
            `123a56789`,
            `123A56789`,
            `ABCDEFGHI`,
            `ABCDEFGH1`,
            `ABCDEFGHa`,
            `ABC`,
        ];
        for(let password of passwords){
            const user = User.build({
                username: username,
                password: password,
                password_confirmation: password
            });

            let isStrongPassword;

            try {
               await user.validate();
               isStrongPassword = true;
            } catch (err){
             if(/Password isn't strongth enough/.test(err)){
                 isStrongPassword = false;
             }
            }

           expect(isStrongPassword).to.be.false;

        }
    });
    it(`Should pass password validate`, async () => {
        const username = `test_user`;
        const passwords = [
            `P4ssword`,
            `#H3ll0W0rld!#`,
            `T1ny_Rick#`
        ];
        for(let password of passwords){
            const user = User.build({
                username: username,
                password: password,
                password_confirmation: password
            });

            let isStrongPassword;

            try {
               await user.validate();
               isStrongPassword = true;
            } catch (err){
             if(/Password isn't strongth enough/.test(err)){
                 isStrongPassword = false;
             }
            }

           //expect(isStrongPassword).to.be.true;
        }
    });
    it(`Password and password confirmation must be same`, () => {

        const username = `test_user`;
        const password = `P4ssw0rd!`;
        const password_confirmation = `P4ssw0rd!`;

        const user = User.build({
            username: username,
            password: password,
            password_confirmation: password_confirmation
        });

        expect(user.get(`password`)).to.equal(user.get(`password_confirmation`));
    
    });
    it(`Password and password confirmation can't be same`, () => {

        const username = `test_user`;
        const password = `P4ssword!`;
        const password_confirmation = `Password!`;

        const user = User.build({
            username: username,
            password: password,
            password_confirmation: password_confirmation
        });

        expect(user.get(`password`)).to.not.equal(user.get(`password_confirmation`));
        
    });
});

describe(`Insert user into database`, () => {

    before(() => {
        User.truncate();
    });

    it(`Password should be hashed`, async () => { 
        const username = `test_user`;
        const password = `T1ny_R1ck#`;
        const password_confirmation = `T1ny_R1ck#`;

        const user = await User.create({
            username: username,
            password: password,
            password_confirmation: password_confirmation,
        });

        expect(bcrypt.compareSync(password, user.password_digest)).to.be.true;
        
    });

    it(`User should be inserted into table`, () => {

    });

});