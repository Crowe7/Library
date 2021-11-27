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

function submitBook(e) {
    e.preventDefault();
    addBookToLibrary();
    // adds the last element to the dom
    addCard(myLibrary.reverse()[0]);
    localStorage.setItem('library', JSON.stringify(myLibrary));
}
let submitButton = document.querySelector('#input');
submitButton.addEventListener('submit', submitBook);

// LOCAL STORAGE 

function makeCards() {
    let localBook = JSON.parse(localStorage.getItem('library'));
    if(localBook == null) {
       return;
    }
    else {
        makeLocalBooks(localBook);
        console.log(myLibrary);
        for(i = 0; i < myLibrary.length; i++) {
            addCard(myLibrary[i]);
        }
    }
}
makeCards();
//had to turn json parsed storage into books
function makeLocalBooks(localBook) {
    for(i = 0; i < localBook.length; i++) {
        console.log(localBook[i]);
        let book = new Book(localBook[i].title, localBook[i].author, localBook[i].pages, localBook[i].hasRead);
        myLibrary.push(book);
    }
}


// MAKES NEW CARDS INTO BOOKS
function addBookToLibrary() {
    let book = makeBook();
    myLibrary.push(book);
}

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

    //MODAL DELETE AND READ BUTTONS HERE
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

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete');
    deleteButton.innerText = "DELETE";
    buttonContainer.appendChild(deleteButton)
    // ties the yes button onto the specific card 
    deleteButton.addEventListener('click', () => {
        makeYes(card, book);
        modal.style.display = 'block';
    });

}
// CARD BUTTON LOGIC
function readToggle(book, read){
    book.read();
    console.log(book);
    if(book.hasRead === false) {
        read.innerText = 'NOT READ'
        read.classList.toggle('off');
    }
    else {
        read.innerText = 'READ';
        read.classList.toggle('off');
    }
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

function deleteBook(card, book) {
    card.remove();
    modal.style.display = 'none';
    for(i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i] === book) {
            myLibrary.splice([i], 1);
        }
    }
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

// MODAL LOGIC
let modal = document.getElementById("modalID");
let closeButton = document.getElementById("no");
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.querySelector('#yes').remove();  
});


function makeYes(card, book) {
yesButton = document.createElement('button');
yesButton.setAttribute('id', 'yes')
yesButton.innerHTML = ('YES');

let modalContainer = document.querySelector('.yes-no')

modalContainer.appendChild(yesButton);

yesButton.addEventListener('click', () => {
    deleteBook(card, book);
    yesButton.remove();
});
}