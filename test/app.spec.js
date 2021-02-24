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

        it.each(phoneNumbers, `from the phone number, it should return the user with phone number, email, job title, mobile phone`, ['element'], (element, done) => {
            // console.log("this is the forEach item ", );
            axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${element}`)
                .then((response) => {
                    return response.data;
                })
                .then((result) => { 
                    console.log("this is the result ", result);
                    expect(result).to.be.a('object');
                    // expect(result.data.mobile_phone).to.not.be.null;
                    // expect(result.data.mobile_phone).to.not.be.undefined;
                    // expect(result.data.mobile_phone).to.not.be.empty;
                    // expect(result.data.work_email).to.not.be.null;
                    // expect(result.data.work_email).to.not.be.undefined;
                    // expect(result.data.work_email).to.not.be.empty;
                    expect(result.data.job_title).to.not.be.null;
                    expect(result.data.job_title).to.not.be.undefined;
                    expect(result.data.job_title).to.not.be.empty;
                    expect(result.data.linkedin_url ).to.not.be.null;
                    expect(result.data.linkedin_url).to.not.be.undefined;
                    expect(result.data.linkedin_url).to.not.be.empty;

                   done();
                }).catch(done);
            })

});