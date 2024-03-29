const {Livraria} = require('./Livraria');
const { Biografia, FicCientista, Tecnologia } = require('./Observer');

const livraria = new Livraria();
const biografia = new Biografia();
const ficCientista = new FicCientista();
const tecnologia = new Tecnologia();


livraria.addSubscribe(biografia);
livraria.addSubscribe(ficCientista);
livraria.addSubscribe(tecnologia);

biografia.listBooks();
ficCientista.listBooks();
tecnologia.listBooks();
console.log('\n---------------------------');

livraria.addNewBook({ titulo: 'A vida da bruxa',category: 'biografia' });
livraria.addNewBook({ titulo: 'Godzilla',category: 'ficCientista' });
livraria.addNewBook({ titulo: 'Spark',category: 'tecnologia' });
console.log('\n---------------------------');

// livraria.addNewBook({ titulo: 'steve jobs',category: 'biografia' });
// livraria.addNewBook({ titulo: 'Arkadya',category: 'ficCientista' });
// livraria.addNewBook({ titulo: 'Info basica',category: 'tecnologia' });
// console.log('\n---------------------------');

// livraria.addNewBook({ titulo: 'Indio da noite',category: 'biografia' });
// livraria.addNewBook({ titulo: 'Transformers',category: 'ficCientista' });
// livraria.addNewBook({ titulo: 'Electros',category: 'tecnologia' });
// console.log('\n---------------------------');


biografia.listBooks();
ficCientista.listBooks();
tecnologia.listBooks();