class Book {
    constructor(title, author, image) {
        this.title = title;
        this.author = author;
        this.image = image;
    }

    generateElement() {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
    
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = this.title;
        bookDiv.appendChild(bookTitle);
    
        const bookAuthor = document.createElement("h3");
        bookAuthor.textContent = this.author;
        bookDiv.appendChild(bookAuthor);
    
        const bookImage = document.createElement("img");
        bookImage.src = this.image;
        bookDiv.appendChild(bookImage);
    
        return bookDiv;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const imageInput = document.getElementById("image");
    const form = document.getElementById("form");
    const bookContainer = document.getElementById("book");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let title = titleInput.value;
        let author = authorInput.value;
        let image = imageInput.value;
        let book = new Book(title, author, image);
        let bookElement = book.generateElement();
        bookContainer.appendChild(bookElement);
        
        form.reset();
    });

});



