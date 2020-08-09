require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333;
const cors = require('cors')

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
//main route
app.get('/', (req, res) => {
    res.json({
        Info: 'covidAPI',
        github: 'https://github.com/GuilhermeVSS',
        contact: 'guilherme_ventura.ss@outlook.com',
        Port: `APP running on port ${port}.`
    })
})

require('./routes')(app);

app.listen(port);