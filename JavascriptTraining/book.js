let books = [];

 

function displayBook(){

   let bookList = document.getElementById('bookList');

    bookList.innerHTML = '';

    document.createElement('div')

    books.forEach((book)=>{

      book-item.innerHTML = `<h1>${book.title}</h1>`;

    })

}

 

function addBook(){

  let inputTitle = document.getElementById("title").value;

  let inputAuthor = document.getElementById("author").value;

 

  if(inputTitle && inputAuthor){

    const newBook = {

      title: inputTitle,

      author: inputAuthor

    }

    books.push(newBook);

    displayBook();

  }

  document.getElementById('title').value = '';

  document.getElementById('author').value = '';

  // console.log(books);

}