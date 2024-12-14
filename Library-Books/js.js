let myLibrary = {
    array : ["1987", "Adventures of Tim Tim"]
}

function Book(name){
    this.name = name
}

function addBookToLibrary(Book){
    myLibrary.array.push(Book.name)
    console.log(myLibrary.array)
}

const shelf = document.getElementById("shelf");
const dialog = document.querySelector("dialog");
const buttonPressed = document.getElementById("button");
const closeDialog = document.querySelector("#close")
const submit = document.querySelector("dialog form button")
const newBook = document.getElementById("book")

updateShelf()

buttonPressed.addEventListener("click", () => {
    dialog.showModal()
});


submit.addEventListener("click", (event) => {
    bookName = newBook.value.trim()
    event.preventDefault();
    if (bookName) {
        console.log("AAAA")
        const newBookInstance = new Book(bookName);
        addBookToLibrary(newBookInstance);
        updateShelf();
        console.log("it rawwn")
        newBook.value = ""
        dialog.close()
    }
});

closeDialog.addEventListener("click", () => {
    dialog.close();
});

function updateShelf() {
    let shelfContent = myLibrary.array.join(" ");
    shelf.textContent = shelfContent;
}
