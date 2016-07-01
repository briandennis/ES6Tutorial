module.exports = (app) => {

  const router = require('express').Router();

  router.get('/', require('/app/endpoints/root') );

};
