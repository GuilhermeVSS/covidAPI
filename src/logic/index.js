const apiCovid = require('../config/apiCovid');
const apiNuvem = require('../config/apiNuvem');

/**
 * Receives the data
 * to send a GET request to 'https://brasil.io/api/dataset/covid19/caso/data/'.
 * @return {Array} - An array with the data from GET request.
 * @param {string} state - The code of one state .
 * @param {string} date - A date following the format 'YYYY-MM-DD'.
 */
const citiesOnDate = async(state,date)=>{
    try{
        const {data}  = await apiCovid.get(`?state=${state}&date=${date}`);
        return data.results;
    } catch(error) {
        return [];
    }
}

/**
 * Assist the Sort function to sort in decrease order, by 'percentualDeCasos'. 
 * @param {Object} cityBefore - An Object with the data about one city.
 * @param {Object} cityAfter - An Object with the data about one city.
 */
const compareByPercent  = (cityBefore, cityAfter) => {
    return cityAfter.percentualDeCasos - cityBefore.percentualDeCasos;  
}

/**
 * Assist the Sort function to sort in decrease order, by 'id'. 
 * @param {Object} cityBefore - An Object with the data about one city.
 * @param {Object} cityAfter - An Object with the data about one city.
 */
const compareById = (cityBefore, cityAfter) => {
    return cityBefore.id - cityAfter.id;  
}

/**
 * Process the receive data
 * to get an array with only validated Cities.
 * @returns {Array} - Returns an array with validated cities, sorted by 'percentualDeCasos'.
 * @param {Array} citiesAtTheBeginning - An array with the data of the cities at the beginning of the period. 
 * @param {Array} citiesAtTheEnd - An array with the data  of the cities at the end of the period.
 */
const processData = async(citiesAtTheBeginning, citiesAtTheEnd)=>{
    try {
        let validCities = [];

        citiesAtTheBeginning.map((city)=>{
            if(city.city !== null && city.confirmed!== null && city.estimated_population_2019 !== null) {
                const cityAfter = citiesAtTheEnd.find(element => element.city_ibge_code === city.city_ibge_code);
                const increase = cityAfter.confirmed - city.confirmed;
                const percentCases = (increase/city.estimated_population_2019)*100;
                console.log("percent: ", percentCases);
                validCities.push({
                    id: 0,
                    nomeCidade: city.city,
                    percentualDeCasos: percentCases
                });
            }
        });

        validCities = validCities.sort(compareByPercent);

        validCities = validCities.slice(0,10);

        for(let index = 0; index < validCities.length; index++){
            validCities[index].id = index;
        }
        
        return  validCities ;
    } catch(error) {
        return []
    }
}

/**
 * Receives an array of valid Cities.
 * Send a POST request to  'https://us-central1-lms-nuvem-mestra.cloudfunctions.net/testApi'
 * for each valid City.
 * @returns {Array} - An array with the data from POST request, sorted by 'percentualDeCasos'.
 * @param {Array} validCities - An array with validated cities.
 */
const sendData = async(validCities)=> {
    try {
        let topCities = [];
        const headers = {
            'MeuNome': 'Guilherme Ventura Santos Silva'
        };

        await Promise.all(validCities.map(async(city)=>{
            const newCity = await apiNuvem.post('/', city, {headers} );
            topCities.push(newCity.data);
        }));

        topCities = topCities.sort(compareById);    
  
        return topCities;
    } catch(error) {
        return [];
    }
}

module.exports = {
    citiesOnDate,
    processData,
    sendData
}