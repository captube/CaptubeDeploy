const express = require('express');
const logger = require('express-logger');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();
let proxyTimeout = 10 * 60 * 1000;
let timeout = 10 * 60 * 1000;

let proxyAddr = process.argv[2]? process.argv[2] : "localhost";
console.log("Proxy Addr :" + proxyAddr);

app.use(logger({path:'./log/logfile.log',format:':method + :date'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api',proxy({target:'http://'+proxyAddr+':4000', proxyTimeout : proxyTimeout, timeout : timeout}));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'CaptubeHelp', 'build', 'index.html'));
});

app.listen(8080);