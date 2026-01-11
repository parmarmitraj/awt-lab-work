const http = require('http');

const server = http.createServer((req, res) => {

    const method = req.method;
    const url = req.url;

    if (url === '/' && method === 'GET') {
        res.write('Welcome to Node.js HTTP Server\n');
    }
    else if (url === '/about' && method === 'GET') {
        res.write('This is About Page\n');
    }
    else if (url === '/info' && method === 'GET') {
        res.write('Request Method: ' + method + '\n');
        res.write('Request URL: ' + url + '\n');
    }
    else {
        res.statusCode = 404;
        res.write('404 Page Not Found\n');
    }

    res.end();
}).listen(3000);