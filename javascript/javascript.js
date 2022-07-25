function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    let string = `${this.title} was written by ${this.author} and it contains ${this.pages} pages.`
    if (this.read == false) {
        string += ` You have not read this book.`
    } else {
        string += ` You have read this book.`
    }
    return string
}

let allBooks = []
allBooks.push(new Book(`Gornol and Fron`, `Mick Harris`, 201))
allBooks.push(new Book(`Pardon my french!`, `Philippe Eustache`, 122))
allBooks.push(new Book(`Phenomenology of the Amogus`, `Stu Tossings`, 375, true))
allBooks.push(new Book(`How to catch flatworms flatfooted`, `Fred Flatstones`, 45, true))
allBooks.push(new Book(`The Necronomicon`, `Abdul al-Hazred`, 168, true))
allBooks.push(new Book(`ABC for barbarians`, `Grok the Wise`, 38))
allBooks.push(new Book(`The science of singing`, `Charleene Beak`, 251))
allBooks.push(new Book(`I hate my husband`, `Nina Beater`, 493))
allBooks.push(new Book(`I hate my wife`, `Victor Beaker`, 78))

const library = document.querySelector(`.library`)

allBooks.forEach(displayBook)

function displayBook(book, index) {
    const bookCard = document.createElement(`div`)
    bookCard.dataset.index = index
    const title = document.createElement(`div`)
    title.innerHTML = book.title
    const author = document.createElement(`div`)
    author.innerHTML = `by ${book.author}`
    const pages = document.createElement(`div`)
    pages.innerHTML = `Pages: ${book.pages}`
    const readStatus = document.createElement(`div`)
    if (book.read) {
        readStatus.innerHTML = `Read`
    } else {
        readStatus.innerHTML = `Not read`
    }
    library.appendChild(bookCard)
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(readStatus)
}