const axios = require('axios');

const apiNuvem = axios.create({
    baseURL: 'https://us-central1-lms-nuvem-mestra.cloudfunctions.net/testApi',
})

module.exports = apiNuvem;