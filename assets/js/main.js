const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('Alchemist', 'Paolo Coelho', 125, 'read');
addBookToLibrary('Romeo and juliet', 'unknown', 360, 'not read');
addBookToLibrary('Inception', 'Hans Zimmer', 450, 'read');
addBookToLibrary('Tarzan', 'Disney', 122, 'not read');

const myTable = document.querySelector('.myTable');

for (let i = 0; i < myLibrary.length; i += 1) {
  const tr = document.createElement('tr');
  const myKeys = Object.keys(myLibrary[i]);
  const myValues = Object.values(myLibrary[i]);
  for (let j = 0; j < myKeys.length; j += 1) {
    const th = document.createElement('th');
    th.textContent = myValues[j];
    tr.appendChild(th);
  }
  myTable.appendChild(tr);
}

const bookForm = document.querySelector(".book-form");
const addBook = document.querySelector(".add-book");

const showForm = function () {
  bookForm.classList.toggle('show-form');
}

addBook.addEventListener('click', function() {
  showForm()
});

var bookTitle = document.getElementById('Title').value;
var bookAuthor = document.getElementById('Author').value;
var bookPages = document.getElementById('Pages').value;
var bookRead = document.getElementById('Read').value;