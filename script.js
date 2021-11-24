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

  function addBookToLibrary() {

  }
  const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', false);
  const fakeBook = new Book('Fake Book', 'Jacob Crowe', '69', true);
  const fakerBook = new Book('Faker Book', 'Jacobo Crother', '67', false);
  console.log(theHobbit.info());
  console.log(fakeBook.info());
  console.log(fakerBook.info());


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