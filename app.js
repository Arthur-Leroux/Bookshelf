//j'importe le module natif http de node
const http = require(`http`);


//j'instancie mon server
const  server = http.createServer();
//j'écoute les requêtes
server.on(`request`,(req,res)=>{


res.write(`coucou`);


    res.end();
});


//j'écoute le port
const port = 5000;

server.listen(port,()=>{
    console.log(`Start on : http://localhost:${port}`);
})