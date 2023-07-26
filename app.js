//j'importe le module natif http de node
const http = require(`http`);




//j'importe my-modules
const html = require(`./my-modules/utils`);
const books = require(`./my-modules/books`);
const ucfirst = require(`./my-modules/ucfirst`);



//console.log(books);

//j'instancie mon server
const server = http.createServer();
//je créer un lien pour allre directement sur le url books cela mévite de la taper a la main a chaque fois

const localhost = "http://localhost:";
const lienBook = '/books';
//j'écoute les requêtes
server.on(`request`, (req, res) => {
  
  res.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      `)

res.write(html);
res.write(`</body>
</html>`)

  res.end();
});

//j'écoute le port
const port = 5000;

server.listen(port, () => {
  console.log(`Start on : ${localhost}${port}`);
});
