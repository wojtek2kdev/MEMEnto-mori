const LoginController = require('../../src/controllers/LoginController');
const User = require('../../src/models/user');
const expect = require('chai').expect;

const createUser = async (username, password) => {
    
    User.truncate();
    
    await User.create({
        username: username,
        password: password,
        password_confirmation: password
    });

}

describe(`Authentication login form`, () => {
    
    before(() => createUser(`test_user`, `P4ssword!`));

    it(`Authentication should be correct`, () => {

        const user = {
            username: `test_user`,
            password: `P4ssword!`,
        }

        const login = new LoginController(user);

        const authResult = login.auth();

        expect(authResult).to.be.true;

    });

    before(() => createUser(`test_user`, `P4ssword!`));

    it(`If authentication isn't correct`, () => {
        
        const user = {
            username: `test_user`,
            password: `P4ssword`,
        };

        const login = new LoginController(user);

        const authResult = login.auth();

        const error = new Error(`Username or password incorrect`);
        error.status = 401;

        expect(authResult).to.be.equal(error);

    });

});
