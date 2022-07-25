function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const library = document.querySelector(`.library`)
const addBookForm = document.querySelector(`#add-book`)
addBookForm.addEventListener(`submit`, addNewBook)

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

allBooks.forEach(displayBook)

function addNewBook(event) {
    event.preventDefault()
    let values = collectValues(event.target.elements)
    let newBook = new Book(...values)
    allBooks.push(newBook)
    displayBook(newBook, allBooks.length - 1)
}

function collectValues(formSubmission) {
    let values = []
    values.push(formSubmission.title.value)
    values.push(formSubmission.author.value)
    values.push(formSubmission.pages.value)
    values.push(formSubmission.readStatus.checked ? `true` : `false`)
    return values
}

function displayBook(book, index) {
    const bookCard = document.createElement(`div`)
    bookCard.dataset.index = index
    bookCard.classList.add(`card`, `text-bg-info`, `p-0`, `col-xs-8`, `col-sm-5`, `col-xl-3`)

    const bookCardBody = document.createElement(`div`)
    bookCardBody.classList.add(`card-body`, `d-flex`, `flex-column`, `justify-content-end`, `gap-2`)

    const title = document.createElement(`h5`)
    title.innerHTML = book.title
    title.classList.add(`card-header`)

    const author = document.createElement(`small`)
    author.innerHTML = `by ${book.author}`
    author.classList.add(`text-muted`)

    const pages = document.createElement(`div`)
    pages.innerHTML = `Pages: ${book.pages}`

    const buttonsContainer = document.createElement(`div`)
    buttonsContainer.classList.add(`d-flex`, `flex-row`, `justify-content-evenly`)

    const readStatus = document.createElement(`button`)
    readStatus.classList.add(`btn`, `btn-primary`)
    readStatus.dataset.index = index
    if (book.read) {
        readStatus.innerHTML = `Read`
    } else {
        readStatus.innerHTML = `Unread`
    }
    readStatus.addEventListener(`click`, changeReadStatus)

    const removeBook = document.createElement(`button`)
    removeBook.classList.add(`btn`, `btn-primary`)
    removeBook.dataset.index = index
    removeBook.innerHTML = `Delete`
    removeBook.addEventListener(`click`, deleteBook)

    library.appendChild(bookCard)
    bookCard.appendChild(title)
    title.appendChild(document.createElement(`br`))
    title.appendChild(author)
    bookCard.appendChild(bookCardBody)
    bookCardBody.appendChild(pages)
    bookCardBody.appendChild(buttonsContainer)
    buttonsContainer.appendChild(readStatus)
    buttonsContainer.appendChild(removeBook)
}

function deleteBook() {
    let index = this.dataset.index
    allBooks[index] = null
    let book = document.querySelector(`.card[data-index="${index}"]`)
    book.remove()
}

function changeReadStatus() {
    let book = allBooks[this.dataset.index]
    if (book.read == false) {
        this.innerHTML = `Read`
        book.read = true
    } else {
        this.innerHTML = `Unread`
        book.read = false
    }
}