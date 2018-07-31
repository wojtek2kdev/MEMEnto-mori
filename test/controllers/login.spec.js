const login = require('../../src/controllers/LoginController');
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

    it(`Authentication should be correct`, async () => {

        const login_details = {
            username: "test_user",
            password: "P4ssword!"
        };

        const login_result = await login.authorize(login_details);

        expect(login_result).to.be.true;

    });

    before(() => createUser(`test_user`, `P4ssword!`));

    it(`If authentication isn't correct`, async function(){
        
        const login_details = {
            username: `test_user`,
            password: `P4ssword`
        }
    

        try {
             await login.authorize(login_details);
        }catch(err){
            expect(err.message).to.be.equal(`Username or password incorrect`);
            expect(err.status).to.be.equal(401);
        }
    });

});
