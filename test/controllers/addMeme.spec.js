const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');

const expect = chai.expect;

const serverAddr = "http://localhost:8081";

chai.use(chaiHttp);

describe("POST /api/add", () => {

    it("Send incorrect title, server should return error.", () => {

        chai.request(serverAddr)
            .post('/api/add')
            .send({
                'title' : 'Too long title for this website, we are very sorry',
                'category' : 'Games'
            })
            .end((err, res) => {
                expect(err).not.to.be.null;
                expect(res).to.be.null;
            });
            
    });

    it("Send correct title, server should return status 200.", () => {

        chai.request(serverAddr)
            .post('/api/add')
            .send({
                'title' : 'Correct title',
                'category' : 'Games'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
            });
            
    });

    it("Send incorrect category, server should return error.", () => {

        chai.request(serverAddr)
            .post('/api/add')
            .send({
                'title' : 'Test title',
                'category' : 'None'
            })
            .end((err, res) => {
                expect(err).not.to.be.null;
                expect(res).to.be.null;
            });
            
    });

    it("Send correct category, server should return status 200.", () => {

        chai.request(serverAddr)
            .post('/api/add')
            .send({
                'title' : 'Test title',
                'category' : 'Games'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
            });
            
    });

});