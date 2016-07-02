module.exports = (app) => {

  return require('express').Router()

  .get('/', require('./routes/root') );

};
