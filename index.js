//const config = require('./config/config');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let session = require('express-session');
let bodyParser = require('body-parser');
let twig = require('twig');


//CONFIGURATIONS
app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');
app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
twig.cache(false);

//ROUTES
app.use(express.static(__dirname + '/public'));
require('./routes/routes')(app);


server.listen(8080, () => {
    console.log(`Server running on 8080`);
});