const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const path = require('path');

const expect = chai.expect;

const app = require('../../app.js');

chai.use(chaiHttp);

describe("POST /api/add", () => {

    it("Send correct category, server should return status 200.", () => {

        const agent = chai.request.agent(app);

        agent.post('/auth/login')
            .send({
                username: 'Test',
                password: 'P4ssword!'
            })
            .then(res => {
                agent.post('/api/add')
                    .type("form")
                    .field("title", "Some title")
                    .field("category", "Games")
                    .attach("meme", fs.readFileSync(path.join(__dirname, "../assets/img.png")), "img.png")
                    .then(result => {
                        expect(result).to.have.status(200);
                    });
            });
            
    });

});