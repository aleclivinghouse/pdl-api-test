const { User } = require('../src/app');
const axios = require('axios');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const emails = require('./mock.js').emails;
const phoneNumbers = require('./mock.js').phoneNumbers;
const nameCompany = require('./mock.js').nameCompany;
const linkedInUrls = require('./mock.js').linkedInUrls;
const linkedInIds = require('./mock.js').linkedInIds;
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert; 
require('it-each')({ testPerIteration: true });
const forEach = require('mocha-each'); 
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

describe('the phone', () => {

        it.each(phoneNumbers, `from the phone number, it should return at least 1 user email,`, ['element'], (element, done) => {
            axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${element}`)
                .then((response) => {
                    return response.data;
                })
                .then((result) => { 
                    expect(result).to.be.a('object');
                    expect(result.data.emails.length).to.be.greaterThan(0);
                   done();
                }).catch(done);
            })

            it.each(phoneNumbers, `from the phone number, it should return the user with at least 1 phone number`, ['element'], (element, done) => {
                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${element}`)
                    .then((response) => {
                        return response.data;
                    })
                    .then((result) => { 
                        expect(result).to.be.a('object');
        
                       done();
                    }).catch(done);
             });
             it.each(phoneNumbers, `from the phone number, it should return the user with at least 1 phone number`, ['element'], (element, done) => {
                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${element}`)
                    .then((response) => {
                        return response.data;
                    })
                    .then((result) => { 
                        expect(result).to.be.a('object');
                        expect(result).to.assert.one.of(
                            function(result) {
                                expect(result.data).to.be.true;
                                expect(result.data.mobile_phone).to.not.be.null;
                                expect(result.data.mobile_phone).to.not.be.undefined;
                                expect(result.data.mobile_phone).to.not.be.empty;
                            }, function(result){
                                expect(result.data.phone_numbers.length).to.be.greaterThan(0);
                            });
                       done();
                    }).catch(done);
             });
             it.each(phoneNumbers, `from the phone number, it should return the user with at a job title r`, ['element'], (element, done) => {
                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${element}`)
                    .then((response) => {
                        return response.data;
                    })
                    .then((result) => { 
                        console.log("this is the job title ", result.data.job_title);
                        expect(result).to.be.a('object');
                        expect(result.data.job_title).to.not.be.null;
                        expect(result.data.job_title).to.not.be.undefined;
                        expect(result.data.job_title).to.not.be.empty;
                       done();
                    }).catch(done);
             });

});

                        // expect(result.data.mobile_phone).to.not.be.null;
                        // expect(result.data.mobile_phone).to.not.be.undefined;
                        // expect(result.data.mobile_phone).to.not.be.empty;
                        // expect(result.data.phone_numbers.length).to.be.greaterThan(0);
                        // expect(result.data.emails.length).to.be.greaterThan(2);
                        // expect(result.data.job_title).to.not.be.null;
                        // expect(result.data.job_title).to.not.be.undefined;
                        // expect(result.data.job_title).to.not.be.empty;
                        // expect(result.data.linkedin_url ).to.not.be.null;
                        // expect(result.data.linkedin_url).to.not.be.undefined;
                        // expect(result.data.linkedin_url).to.not.be.empty;