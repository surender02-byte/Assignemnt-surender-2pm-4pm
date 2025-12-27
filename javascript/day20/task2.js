// Add a method describe() that prints the book details.

const book = {
    title: "javafullstack",
    author: "javan",
    page: 300,
    describe() {
        console.log(`this is ${this.title}, author is ${this.author},page${this.page}`);
        
    }
};
    book.describe();