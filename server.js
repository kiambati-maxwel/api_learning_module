const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

// --- create server ---

const server = http.createServer(app);
console.log('i just started dummy ...');
server.listen(port);
