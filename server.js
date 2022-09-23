// import third-party nodejd module Connect
const connect = require('connect');

// initiate app-server
const app = connect();

// custom middleware
function helloNodejsTextPlain(req, res, next) {
    res.setHeader('Content-Type','text/plain');
    res.end('Hello from NodeJS Application');
};

// custom middleware
function helloNodejsTextHtml(req, res, next) {
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>');
};

// custom middleware
function helloNodejsApplicationJson(req, res, next) {
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({"message":"Hello from NodeJS Aplication as json"}));
};

//add middleware to connect application
// the order of execution matters with connect
app.use('/html', helloNodejsTextHtml);
app.use('/json', helloNodejsApplicationJson);
app.use('/', helloNodejsTextPlain);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');
