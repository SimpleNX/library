let addBtn = document.querySelector("#add-b");
let dialog = document.querySelector("#add-prompt");
let addConf = document.querySelector("#add-co-btn");
let books = document.querySelector("#books");

//details for the books
let author, title, pages, readn;

function addVal(){
    console.log("Here");
    author = document.querySelector("#author").value;
    title = document.querySelector("#title").value;
    pages = document.querySelector("#pages").value;
    readn = document.querySelector("#readn").checked;
    console.log(author, title, pages, readn);
}

addBtn.addEventListener("click", ()=>{
    dialog.showModal();
});

addConf.addEventListener("click", (event)=>{
    addVal();
    event.preventDefault();
    dialog.close();
});

