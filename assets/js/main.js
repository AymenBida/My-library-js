const myLibrary = [];
let counter = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}


// addBookToLibrary('Alchemist', 'Paolo Coelho', 125, 'read');
// addBookToLibrary('Romeo and juliet', 'unknown', 360, 'not read');
// addBookToLibrary('Inception', 'Hans Zimmer', 450, 'read');
// addBookToLibrary('Tarzan', 'Disney', 122, 'not read');


const myTable = document.querySelector('.myTable');


// for (let i = 0; i < myLibrary.length; i += 1) {
// const tr = document.createElement('tr');
// tr.dataset.index = i
// const myKeys = Object.keys(myLibrary[i]);
// const myValues = Object.values(myLibrary[i]);
// for (let j = 0; j < myKeys.length; j += 1) {
//   const th = document.createElement('th');
//   th.textContent = myValues[j];
//   tr.appendChild(th);
// }
// myTable.appendChild(tr);
// };


const bookForm = document.querySelector('.book-form');
const addBook = document.querySelector('.add-book');
const submitBook = document.querySelector('.submit-book');

const showForm = () => {
  bookForm.classList.toggle('show-form');
};

addBook.addEventListener('click', () => {
  showForm();
});

const deleteBook = (index) => {
  const bookToBeDeleted = document.querySelector(`tr[data-index = '${index}']`);
  bookToBeDeleted.remove();
  delete myLibrary[index];
};

const showBook = (arr) => {
  const tr = document.createElement('tr');
  tr.dataset.index = counter;
  for (let i = 0; i < arr.length; i += 1) {
    const th = document.createElement('th');
    th.textContent = arr[i];
    tr.appendChild(th);
  }
  const delButton = document.createElement('button');
  delButton.textContent = 'Delete book';
  delButton.dataset.index = counter;
  const bookNumber = counter;
  delButton.addEventListener('click', () => {
    deleteBook(bookNumber);
  });
  tr.appendChild(delButton);
  myTable.appendChild(tr);
  counter += 1;
};

const resetValues = () => {
  document.getElementById('Title').value = null;
  document.getElementById('Author').value = null;
  document.getElementById('Pages').value = null;
  document.getElementById('Read').value = null;
};

const addNewBook = () => {
  const bookTitle = document.getElementById('Title').value;
  const bookAuthor = document.getElementById('Author').value;
  const bookPages = document.getElementById('Pages').value;
  let bookRead = document.getElementById('Read');
  bookRead = (bookRead.checked) ? 'Read' : 'Not Read';
  const arr = [];
  arr.push(bookTitle, bookAuthor, bookPages, bookRead);
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  showBook(arr);
};

submitBook.addEventListener('click', () => {
  addNewBook();
  bookForm.classList.toggle('show-form');
  resetValues();
});
