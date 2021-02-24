const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

class User {
    constructor(data) {
        this.data = data;
    }

   getUserFromEmail(email) {
      return axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&email=${email}`)
      .then(response => response.data)
      .then(response => console.log("this is user from email ", response))
      .catch((error) => console.log("this is the error ", error));
    }

 async getUserFromPhoneNumber(phoneNumber) {

       return axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&phone=${phoneNumber}`)
       .then(response => response.data)
       .then(res => { return res } )
       .catch((error) => console.log("this is the error ", error));


       
     }

    getUserFromNameCompany(obj) {
       return  axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&name=${obj.name}&company=${obj.company}`)
       .then(response => response.data)
       .then(response => console.log("this is user from name company ", response))
       .catch((error) => console.log("this is the error ", error));
     }

     async getUserFromLinkedInUrl(url) {
        const response = await axios.get(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${API_KEY}&profile=${url}`)
         return response.data;;
     }

}

module.exports = {
    User
};
