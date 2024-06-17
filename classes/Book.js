const { v4: uuid } = require('uuid');

class Book {
    constructor(title = "", desc = "", authors = "", favorite = "", fileCover = "", fileName = "", fileBook = "") {
        this.id = uuid()
        this.title = title
        this.desc = desc
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
        this.fileBook = fileBook
    }
}

module.exports = Book