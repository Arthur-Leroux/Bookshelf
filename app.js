//j'importe le module natif http de node
const http = require(`http`);
//j'importe my-modules
const books = require(`./my-modules/books`);
//console.log(books);
//j'instancie mon server
const  server = http.createServer();
//j'écoute les requêtes
server.on(`request`,(req,res)=>{


//je place en dur mon tableau 


res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>`);






res.write(`</body>
</html>`)


    res.end();
});


//j'écoute le port
const port = 5000;

server.listen(port,()=>{
    console.log(`Start on : http://localhost:${port}`);
})