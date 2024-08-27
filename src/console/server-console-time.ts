import http from 'http';

console.time('hello-timer');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World');
    console.timeEnd('hello-timer');
    console.time('hello-timer');

}).listen(3000);

console.log('listen on PORT 3000')