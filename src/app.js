const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./models');
const contracts = require('./controllers/contracts');
const jobs = require('./controllers/jobs');
const app = express();

app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)

app.use('/contracts', contracts);
app.use('/jobs', jobs);

module.exports = app;
