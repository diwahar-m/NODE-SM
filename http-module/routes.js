const http  = require('http'); 

const server = http.createServer((req, res)=> {
    if(req.url  === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Home page');
    }else if(req.url === '/projects'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Projects Page')
    }else {
         res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Page Not Found')
    }
})

const port = 3000; 
server.listen(port, ()=> {
    console.log(`Server on port ${port}`)
})
