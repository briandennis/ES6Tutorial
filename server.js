const app     = require('express')();
const swig    = require('swig');
const port    = process.env.PORT || 5000;

app.engine('html', swig.renderFile);
app.set('views', './public/templates');
app.set('view engine', 'html');

app.use( require('./app/router')(app) );

app.listen(port);
console.log(`Ready for business on port ${port}`);
