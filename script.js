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