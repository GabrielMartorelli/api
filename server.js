require('dotenv').config;
require('module-alias/register');
const boot = require('@service/boot');
const mongoose = require('mongoose');
const config = require('@config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

if (config.db.connectionString) {
  mongoose.connect(config.db.connectionString, boot);
} else {
  console.log('Nenhuma string de conexão informada');
}

boot();
