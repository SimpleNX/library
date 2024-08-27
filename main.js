let addBtn = document.querySelector("#add-b");
let dialog = document.querySelector("#add-prompt");
let addConf = document.querySelector("#add-co-btn");
let books = document.querySelector("#books");
let form = document.querySelector("#add-book-form");

//details for the books
let author, title, pages, readn;
let bookList = [];

function Book(author, title, pages, read, index){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.index = index;
    this.domE = null;
    this.readState = null;
    this.toggleState = ()=>{
        this.read = !this.read;
        this.readState.innerText = `${(this.read)?"Yes":"No"}`;
    }
}

function renderBook(){
    for(const book of bookList){
        if(book.domE === null){
            const bookDom = document.createElement("div");
            let authorP = document.createElement("p");
            let titleP = document.createElement("p");
            let pagesP = document.createElement("p");
            let readP = document.createElement("p");
            let readState = document.createElement("p");
            let deleteB = document.createElement("button");
            authorP.innerText = `Author Name : ${book.author}`;
            titleP.innerText = `Title of the Book : ${book.title}`;
            pagesP.innerText = `Pages Read : ${book.pages}`;
            readP.innerText = `Read or not :`;
            readState.innerText = `${(book.read)?"Yes":"No"}`;
            deleteB.innerText = "Delete";
            deleteB.addEventListener("click", ()=>{
                bookList.splice(book.index, 1);
                books.removeChild(book.domE);
                renderBook();
            });
            readState.addEventListener("click", book.toggleState);
            readState.setAttribute("class", "statebtn");
            deleteB.style.backgroundColor = "blue";
            bookDom.setAttribute("class", "book");
            bookDom.appendChild(authorP);
            bookDom.appendChild(titleP);
            bookDom.appendChild(pagesP);
            readP.appendChild(readState);
            bookDom.appendChild(readP);
            bookDom.appendChild(deleteB);
            book.domE = bookDom;
            book.readState = readState;
            books.appendChild(book.domE);
        }
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