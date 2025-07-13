document.addEventListener("DOMContentLoaded", loadBooks);

function addBook() {
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("book-author").value;

    if (title === "" || author === "") {
        alert("Please enter both title and author.");
        return;
    }

    let book = { title, author };

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
}

function displayBooks() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${book.title} by ${book.author} 
            <button class="delete-btn" onclick="deleteBook(${index})">X</button>`;
        bookList.appendChild(li);
    });
}

function deleteBook(index) {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}

function loadBooks() {
    displayBooks();
}
