let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = read;
  }

  Book.prototype.info = function() {
    if(this.hasRead === false) {
        this.hasRead = 'not read yet'
    }
    else {
        this.hasRead = 'read'
    }
        return this.title + " by " + this.author + ", " + this.pages  + " pages, " + this.hasRead
  }

  function addBookToLibrary(e) {
    e.preventDefault();
     let book = makeBook();
     myLibrary.push(book);
     console.log(myLibrary);
  }
// ADD THE EVENT LISTEN TO EACH BUTTON AS THEY ARE PUT ON
//read as to how to set with new elements https://stackoverflow.com/questions/35349212/select-an-html-element-created-with-js-in-js
let readButton = document.querySelector('#readToggle');
readButton.addEventListener('click', readToggle);
function readToggle() {
    readButton.classList.toggle('off');
    if(readButton.classList.contains("off")) {
        readButton.textContent = "NOT READ";
    }
    else {
        readButton.textContent = "READ";
    }
  }


let modal = document.getElementById("modalID");
let closeButton = document.getElementById("no");
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

//set this button when a new card is made instead of just declaring it here!
let modalButton = document.getElementById("delete");
modalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});



  /*                 <div class="card">
                    <div class="container">
                        <h2 class="title">The Hobbit</h2>
                        <h4>J.R.R Tolkien</h4>
                        <p>295 pages</p>
                        <div class="card-button">
                            <button class="on" id="readToggle" type="button">READ</button>
                            <button id="delete" type="button">DELETE</button>
                        </div>
                    </div>
                </div> */ 




function makeBook() {
    let form = document.querySelector('#input');
    let newBook = [];
    for(i = 0; i < 3; i++) {
        newBook.push(form[i].value);
    }
      newBook.push(document.querySelector('#read').checked)

    console.log(newBook);
    let book = new Book(newBook[0], newBook[1], newBook[2], newBook[3]);
    return book;
}
let submitButton = document.querySelector('#input');
submitButton.addEventListener('submit', addBookToLibrary);

//make sure to put the e.prevent deafault on whatever is called on the button at the end