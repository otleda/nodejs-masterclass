const http = require('http');

http.createServer((req, res)=>{
    if(req.url === '/')
        return res.end('Home Page')
    
    if (req.url=== '/contato') {
        return res.end('Contato')
    }
}).listen(3000, ()=>{
        console.log('Server is Running ...')
})