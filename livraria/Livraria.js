class Livraria{

    #subscribes = [];

    addSubscribe(subscribe){
        this.#subscribes.push(subscribe);
    }

    addNewBook(book){
        this.notifyAllSubscribers(book);
    }

    notifyAllSubscribers(book){
        this.#subscribes.forEach(subscribe => {
            subscribe.update(book);
        });
    }
}

module.exports = {Livraria};