const {Router} = require('express');

const routes = new Router();

const {
    citiesOnDate,
    processData,
    sendData
} = require('./logic')

routes.get('/', async(req, res)=>{
    try {
        const{state, dateStart, dateEnd} = req.query;
        
        const citiesAtTheBeginning = await citiesOnDate(state,dateStart);  
        const citiesAtTheEnd = await citiesOnDate(state, dateEnd);
        const validCities = await processData(citiesAtTheBeginning, citiesAtTheEnd);
        const topCities = await sendData(validCities);

        return res.status(200).json(topCities);
    }
    catch(error) {
        return res.status(500).json({error: "Something went wrong"});
    }
})

module.exports = app => app.use(routes);