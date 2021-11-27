const fakeBook = new Book('Fake Book', 'Jacob Crowe', '69', true);
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', false);
let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = read;
    this.indexNum = null;
  }

  Book.prototype.read = function() {
    if(this.hasRead === false) {
        this.hasRead = true;
    }
    else {
        this.hasRead = false;
    }
  }
//assigns a number based on where book is in array
Book.prototype.index = function() {
    for(i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title === this.title) {
          return this.indexNum = i;            
        }
    }
}

function submitBook(e) {
    e.preventDefault();
    addBookToLibrary();
    // adds the last element to the dom
    addCard(myLibrary.reverse()[0]);
}

function addBookToLibrary() {
     let book = makeBook();
     myLibrary.push(book);
}



// MODAL LOGIC
let modal = document.getElementById("modalID");
let closeButton = document.getElementById("no");
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.querySelector('#yes').remove();  
});




function makeBook() {
    let form = document.querySelector('#input');
    let newBook = [];
    for(i = 0; i < 3; i++) {
        newBook.push(form[i].value);
    }
      newBook.push(document.querySelector('#read').checked)

    let book = new Book(newBook[0], newBook[1], newBook[2], newBook[3]);
    return book;
}
let submitButton = document.querySelector('#input');
submitButton.addEventListener('submit', submitBook);

//save this for local storage
function makeCards() {
    for(i = 0; i < myLibrary.length; i++) {
        addCard(myLibrary[i]);
    }
}


function addCard(book){
    let dom = document.querySelector('.card-wrapper')

    let card = document.createElement('div');
    card.classList.add('card');
    dom.appendChild(card);

    let container = document.createElement('div');
    container.classList.add('container');
    card.appendChild(container);

    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = book.title;
    container.appendChild(title)

    let author = document.createElement('h4');
    author.innerText = book.author;
    container.appendChild(author);

    let pages = document.createElement('p');
    pages.innerText = book.pages + " pages";
    container.appendChild(pages);

    //TODO ADD MODAL DELETE AND READ BUTTONS HERE
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('card-button');
    container.appendChild(buttonContainer); 


    let read = document.createElement('button');
    read.classList.add('on', 'off');
    read.setAttribute('id', 'readToggle');
    if(book.hasRead === false) {
        read.innerText = 'NOT READ'
    }
    else {
        read.innerText = 'READ';
        read.classList.toggle('off');
    }
    
    read.addEventListener('click', () => {
        readToggle(book, read);
    });
    buttonContainer.appendChild(read);


    // TODO DELETE FUNCTION
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete');
    deleteButton.innerText = "DELETE";
    buttonContainer.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        makeYes(card);
        modal.style.display = 'block';
    });



}

function readToggle(book, read){
    book.read();
    if(book.hasRead === false) {
        read.innerText = 'NOT READ'
        read.classList.toggle('off');
    }
    else {
        read.innerText = 'READ';
        read.classList.toggle('off');
    }
}

function deleteBook(card) {
    card.remove();
    modal.style.display = 'none';
}

function makeYes(card) {
yesButton = document.createElement('button');
yesButton.setAttribute('id', 'yes')
yesButton.innerHTML = ('YES');

let modalContainer = document.querySelector('.yes-no')

modalContainer.appendChild(yesButton);

yesButton.addEventListener('click', () => {
    deleteBook(card);
    yesButton.remove();
});
}