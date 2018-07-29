const User = require('../../src/models/user');
const expect = require('chai').expect;

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

           expect(isStrongPassword).to.be.true;
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

        expect(user.get(`password`)).eq(user.get(`password_confirmation`));
    
    });
});