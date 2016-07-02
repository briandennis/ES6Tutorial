const app     = require('express')();
const port    = process.env.PORT || 5000;

app.set('views', './public/templates');

app.use( require('./app/router')(app) );

app.listen(port);
console.log(`Ready for business on port ${port}`);
