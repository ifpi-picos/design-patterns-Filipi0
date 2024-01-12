
class Biografia {
    #books = [];

    update(book) {
        if (book.category === 'biografia') {
            this.#books.push(book.titulo);
            console.log(`<Biografia>: '${book.titulo}' adicionado!`);
        }
    }

    listBooks() {
        const formattedBooks = this.#books.map(title => `'${title}'`).join(', ');
        console.log(`Livros de Biografia: [${formattedBooks}]`);
    }
}



class FicCientista {
    #books = [];

    update(book) {
        if (book.category === 'ficCientista') {
            this.#books.push(book.titulo);
            console.log(`<Ficção>: '${book.titulo}' adicionado!`);
        }
    }

   listBooks() {
    const formattedBooks = this.#books.map(title => `'${title}'`).join(', ');
        console.log(`Livros de Ficção Científica: [${formattedBooks}]`);
    }
}


class Tecnologia {
    #books = [];

    update(book) {
        if (book.category === 'tecnologia') {
            this.#books.push(book.titulo);
            console.log(`<Tecnologia>: '${book.titulo}' adicionado!`);
        }
    }

    listBooks() {
        const formattedBooks = this.#books.map(title => `'${title}'`).join(', ');
        console.log(`Livros de Tecnologia: [${formattedBooks}]`);
    }
}



module.exports = { Biografia, FicCientista, Tecnologia };
