const axios = require('axios');

const apiCovid = axios.create({
    baseURL: 'https://brasil.io/api/dataset/covid19/caso/data/',
})

module.exports = apiCovid;