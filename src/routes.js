const {Router} = require('express');

const routes = new Router();

const {
    citiesOnDate,
    processData
} = require('./logic')

routes.get('/', async(req, res)=>{
    try {
        const{state, dateStart, dateEnd} = req.query;
        
        const citiesAtTheBeginning = await citiesOnDate(state,dateStart);  
        const citiesAtTheEnd = await citiesOnDate(state, dateEnd);
        const validCities = await processData(citiesAtTheBeginning, citiesAtTheEnd);

        return res.status(200).json(validCities);
    }
    catch(error) {
        return res.status(500).json({error: "Something went wrong"});
    }
})

module.exports = app => app.use(routes);