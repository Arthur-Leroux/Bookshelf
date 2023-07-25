//j'importe le module natif http de node
const http = require(`http`);
//j'importe my-modules
const books = require(`./my-modules/books`);

//console.log(books);
//j'instancie mon server
const server = http.createServer();
const localhost = "http://localhost:";
const lienBook = '/books';
//j'écoute les requêtes
server.on(`request`, (req, res) => {
  const url = req.url;
  //je place en dur mon tableau

  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>`);

  switch (url) {
    case `/`:
      res.write(
        `voici la liste des bouquins réferencé => 
        <a href="${localhost}${port}${lienBook}">ici</a>`
      );
break;
    case `/books`:
      for (let book of books) {
        res.write(`<ul>
    <li>voici les livres :${book.title}
    language : ${book.language}
    country :${book.country}
    author :${book.author}
    date :${book.date}
    </li></ul>`);
      }
      break;
      default:
        res.write(`cette page n'est pas disponible`);
  }
  
  res.write(`</body>
</html>`);

  res.end();
});

//j'écoute le port
const port = 5000;

server.listen(port, () => {
  console.log(`Start on : ${localhost}${port}`);
});
