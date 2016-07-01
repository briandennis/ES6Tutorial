const app     = require('express')();
const port    = process.env.PORT || 5000;

app.use( require('./app/routes')(app) );

app.listen(port);
console.log(`Ready for business on port ${port}`);
