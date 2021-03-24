const myLibrary = [];
const myTable = document.querySelector('.myTable');
const bookForm = document.querySelector('.book-form');
const addBook = document.querySelector('.add-book');
const submitBook = document.querySelector('.submit-book');
let counter = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const showForm = () => {
  bookForm.classList.toggle('show-form');
};

addBook.addEventListener('click', () => {
  showForm();
});

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

const createBookTr = (number) => {
  const tr = document.createElement('tr');
  tr.dataset.index = number;
  return tr;
};

const createBookTh = (text) => {
  const th = document.createElement('th');
  th.textContent = text;
  return th;
};

const deleteBook = (index) => {
  const bookToBeDeleted = document.querySelector(`tr[data-index = '${index}']`);
  bookToBeDeleted.remove();
  delete myLibrary[index];
};

const createDeleteButton = (number) => {
  const delButton = document.createElement('button');
  delButton.textContent = 'Delete book';
  delButton.dataset.index = number;
  delButton.addEventListener('click', () => {
    deleteBook(number);
  });
  return delButton;
};

const createChangeButton = (number) => {
  const changeButton = document.createElement('button');
  changeButton.textContent = 'Change status';
  changeButton.addEventListener('click', () => {
    myLibrary[number].changeStatus(number);
  });
  return changeButton;
};

const showBook = (arr) => {
  const tr = createBookTr(counter);
  for (let i = 0; i < arr.length - 1; i += 1) {
    const th = createBookTh(arr[i]);
    tr.appendChild(th);
  }
  const th = createBookTh(arr[3]);
  th.dataset.index = counter;
  const delButton = createDeleteButton(counter);
  const changeButton = createChangeButton(counter);
  tr.appendChild(th);
  tr.appendChild(delButton);
  tr.appendChild(changeButton);
  myTable.appendChild(tr);
  counter += 1;
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

const resetValues = () => {
  document.getElementById('Title').value = null;
  document.getElementById('Author').value = null;
  document.getElementById('Pages').value = null;
  document.getElementById('Read').checked = false;
};

submitBook.addEventListener('click', () => {
  addNewBook();
  bookForm.classList.toggle('show-form');
  resetValues();
});

const showChangeStatus = (book, index) => {
  const readStatus = document.querySelector(`th[data-index='${index}']`);
  readStatus.textContent = book.read;
};

Book.prototype.changeStatus = function fn(index) {
  this.read = (this.read === 'Read') ? 'Not Read' : 'Read';
  showChangeStatus(this, index);
};
