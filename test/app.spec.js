const { User } = require('../src/app');
const axios = require('axios');
const chai = require('chai');
const emails = require('./mock.js').emails;
const phoneNumbers = require('./mock.js').phoneNumbers;
const nameCompany = require('./mock.js').nameCompany;
const linkedInUrls = require('./mock.js').linkedInUrls;
const linkedInIds = require('./mock.js').linkedInIds;
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert; 
require('it-each')({ testPerIteration: true });
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

describe('full test suite', () => {
         //////////////////////////phone-number////////////////////////////////////////////////////////////////
        it.each(phoneNumbers, `from the phone number, it should return the contact with at least 1  email,`, ['element'], (element, done) => {
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
             it.each(phoneNumbers, `from the phone number, it should return the contact with at least 1 phone number`, ['element'], (element, done) => {
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
             it.each(phoneNumbers, `from the phone number, it should return the contact with a job title`, ['element'], (element, done) => {
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

             it.each(phoneNumbers, `from the phone number, it should return the contact with a linkedin_url`, ['element'], (element, done) => {
                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${element}`)
                    .then((response) => {
                        return response.data;
                    })
                    .then((result) => { 
                       expect(result).to.be.a('object');
                       expect(result.data.profiles);
                       expect(propertyValueInArray(result.data.profiles, 'network', 'linkedin')).to.be.true;
                       done();
                    }).catch(done);
             });

             it.each(phoneNumbers, `from the phone number, it should return the contact with a linkedinId`, ['element'], (element, done) => {
                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${element}`)
                    .then((response) => {
                        return response.data;
                    })
                    .then((result) => { 
                       console.log()
                       expect(result).to.be.a('object');
                       expect(result.data.linkedin_id);
                       expect(result.data.linkedin_id).to.not.be.null;
                       expect(result.data.linkedin_id).to.not.be.undefined;
                       expect(result.data.linkedin_id).to.not.be.empty;
                       done();
                    }).catch(done);
             });
             //////////////////////////name-company////////////////////////////////////////////////////////////////
             it.each(nameCompany, `from the person's name and current company, it should return the contact with at least 1 email,`, ['element'], (element, done) => {
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
                 it.each(nameCompany, `from the person's name and current company, it should return the contact with at least 1 phone number`, ['element'], (element, done) => {
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
                 it.each(nameCompany, `from the person's name and current company, it should return the contact with a job title`, ['element'], (element, done) => {
                    axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&name=${element.name}&company=${element.company}`)
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
    
                 it.each(nameCompany, `from the person's name and current company, it should return the contact with a linkedin_url`, ['element'], (element, done) => {
                    axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&name=${element.name}&company=${element.company}`)
                        .then((response) => {
                            return response.data;
                        })
                        .then((result) => { 
                           expect(result).to.be.a('object');
                           expect(result.data.profiles);
                           expect(propertyValueInArray(result.data.profiles, 'network', 'linkedin')).to.be.true;
                           done();
                        }).catch(done);
                 });
    
                 it.each(nameCompany, `from the person's name and current company, it should return the contact with a linkedinId`, ['element'], (element, done) => {
                    axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&name=${element.name}&company=${element.company}`)
                        .then((response) => {
                            return response.data;
                        })
                        .then((result) => { 
                           console.log()
                           expect(result).to.be.a('object');
                           expect(result.data.linkedin_id);
                           expect(result.data.linkedin_id).to.not.be.null;
                           expect(result.data.linkedin_id).to.not.be.undefined;
                           expect(result.data.linkedin_id).to.not.be.empty;
                           done();
                        }).catch(done);
                 });
                     ////////////////////////// personal email////////////////////////////////////////////////////////////////
                     it.each(emails, `from the person's email, it should return the contact with at least 1 email,`, ['element'], (element, done) => {
                        axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&email=${element}`)
                            .then((response) => {
                                return response.data;
                            })
                            .then((result) => { 
                                expect(result).to.be.a('object');
                                expect(result.data.emails.length).to.be.greaterThan(0);
                               done();
                            }).catch(done);
                        })
                         it.each(emails, `from the person's email, it should return the contact with at least 1 phone number`, ['element'], (element, done) => {
                            axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&email=${element}`)
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
                         it.each(emails, `from the person's email, it should return the contact with a job title`, ['element'], (element, done) => {
                            axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&email=${element}`)
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
            
                         it.each(emails, `from the person's email, it should return the contact with a linkedin_url`, ['element'], (element, done) => {
                            axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&email=${element}`)
                                .then((response) => {
                                    return response.data;
                                })
                                .then((result) => { 
                                   expect(result).to.be.a('object');
                                   expect(result.data.profiles);
                                   expect(propertyValueInArray(result.data.profiles, 'network', 'linkedin')).to.be.true;
                                   done();
                                }).catch(done);
                         });
            
                         it.each(emails, `from the person's email, it should return the contact with a linkedinId`, ['element'], (element, done) => {
                            axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&email=${element}`)
                                .then((response) => {
                                    return response.data;
                                })
                                .then((result) => { 
                                   console.log()
                                   expect(result).to.be.a('object');
                                   expect(result.data.linkedin_id);
                                   expect(result.data.linkedin_id).to.not.be.null;
                                   expect(result.data.linkedin_id).to.not.be.undefined;
                                   expect(result.data.linkedin_id).to.not.be.empty;
                                   done();
                                }).catch(done);
                         });
                         //////////////////////////linkedin url////////////////////////////////////////////////////////////////
                         it.each(linkedInUrls, `from the persons linkedin url, it should return the contact with at least 1 email,`, ['element'], (element, done) => {
                            axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&profile=${element}`)
                                .then((response) => {
                                    return response.data;
                                })
                                .then((result) => { 
                                    expect(result).to.be.a('object');
                                    expect(result.data.emails.length).to.be.greaterThan(0);
                                   done();
                                }).catch(done);
                            });
                             it.each(linkedInUrls, `from the persons linkedinurl, it should return the contact with at least 1 phone number`, ['element'], (element, done) => {
                                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&profile=${element}`)
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
                             it.each(linkedInUrls, `from the persons linkedin url, it should return the contact with a job title`, ['element'], (element, done) => {
                                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&profile=${element}`)
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
                
                             it.each(linkedInUrls, `from the persons linkedin url, it should return the contact with a linkedin_url`, ['element'], (element, done) => {
                                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&profile=${element}`)
                                    .then((response) => {
                                        return response.data;
                                    })
                                    .then((result) => { 
                                       expect(result).to.be.a('object');
                                       expect(result.data.profiles);
                                       expect(propertyValueInArray(result.data.profiles, 'network', 'linkedin')).to.be.true;
                                       done();
                                    }).catch(done);
                             });
                
                             it.each(linkedInUrls, `from the persons linkedin url, it should return the contact with a linkedinId`, ['element'], (element, done) => {
                                axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&profile=${element}`)
                                    .then((response) => {
                                        return response.data;
                                    })
                                    .then((result) => { 
                                       console.log()
                                       expect(result).to.be.a('object');
                                       expect(result.data.linkedin_id);
                                       expect(result.data.linkedin_id).to.not.be.null;
                                       expect(result.data.linkedin_id).to.not.be.undefined;
                                       expect(result.data.linkedin_id).to.not.be.empty;
                                       done();
                                    }).catch(done);
                             });

});

const propertyValueInArray = (arr, property, value) => {
    return arr.map((e) => e[property]).includes(value);
}

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