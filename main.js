let addBtn = document.querySelector("#add-b");
let dialog = document.querySelector("#add-prompt");
let addConf = document.querySelector("#add-co-btn");
let books = document.querySelector("#books");
let form = document.querySelector("#add-book-form");
let bookItem = document.querySelector("#book-grid");

//details for the books
let author, title, pages, readn;
let bookList = [];

function Book(author, title, pages, read, index){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

// function clearPrev(){
//     if(bookItem !== null)
//         books.clearItem(bookItem);
//     bookItem = document.createElement("div");
//     books.appendChild(bookItem);
// }

function renderBook(){
    // clearPrev();
    for(const book of bookList){
        const bookDom = document.createElement("div");
        let authorP = document.createElement("p");
        let titleP = document.createElement("p");
        let pagesP = document.createElement("p");
        let readP = document.createElement("p");
        let deleteB = document.createElement("button");

        authorP.innerText = `Author Name : ${book.author}`;
        titleP.innerText = `Title of the Book : ${book.title}`;
        pagesP.innerText = `Pages Read : ${book.pages}`;
        readP.innerText = `Read or not : ${book.read}`;
        deleteB.innerText = "Delete";

        deleteB.addEventListener("click", ()=>{
            bookList.splice(book.index, 1);
            // let bookDelete = document.querySelector(`#books:nth-child(${book.index+1})`);
            // clearPrev();
            renderBook();
        });
        bookDom.setAttribute("class", "book");
        bookDom.appendChild(authorP);
        bookDom.appendChild(titleP);
        bookDom.appendChild(pagesP);
        bookDom.appendChild(readP);
        bookDom.appendChild(deleteB);

        books.appendChild(bookDom);
    }
}

addBtn.addEventListener("click", ()=>{
    form.reset();
    dialog.showModal();
});

addConf.addEventListener("click", (event)=>{
    author = document.querySelector("#author").value;
    title = document.querySelector("#title").value;
    pages = document.querySelector("#pages").value;
    readn = document.querySelector("#readn").checked;
    let book = new Book(author, title, pages, readn, bookList.length);
    bookList.push(book);
    renderBook();
    event.preventDefault();
    dialog.close();
});

