let library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages}, ${this.isRead ? 'Read' : 'Not yet read'}`);
    }
};

const submit = document.getElementById('submit-btn');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
});

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value || 0;
    const isRead = document.getElementById('read').checked;

    const book = new Book (title, author, pages, isRead);
    library.push(book);
}