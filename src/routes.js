const {Router} = require('express');

const routes = new Router();

routes.get('/', async(req, res)=>{
    return res.status(200).send("Api Covid");
})

module.exports = app => app.use(routes);