let books = require('./books');
const dayjs = require('./dayjs');


books.sort(function (a, b) {

    return new Date(a.date) - new Date(b.date);
});

//création du body
let bookTable = `<table>
        <thead>
            <tr>
                <th>Titre</th>
                <th>Langue</th>
                <th>Auteur</th>
                <th>Country</th>
                <th>Date de publication</th>
                <th>Age</th>
                <th>Age 2</th>
            </tr>
        </thead>
    <tbody>`;
//Ajouter une colonne spécifiant l'âge du livre.
for (const book of books) {
    bookTable += `
        <tr>
            <td>${book.title}</td>
            <td>${book.language}</td>
            <td>${book.author}</td>
            <td>${book.country}</td>
            <td>${dayjs(book.date).format('dddd, MMMM Do YYYY')}</td>
            <td>${dayjs().diff(book.date, 'year')} ans</td>
            
        </tr>
        `;
}
bookTable += '</tbody></table>';

module.exports = bookTable;