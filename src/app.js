const express = require('express');
const sendError = require('@helper/send-error');
const rateLimit = require('@middleware/rate-limit');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sendError);

app.use(...rateLimit);

app.use('/', routes);

module.exports = app;
