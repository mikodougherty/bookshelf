const apiKey = "AIzaSyB9jQH0ik-hHrTbOiX4JYV3t1LLUxcgyug";
const userID = "114186212132847518300";

async function bookList() {

    let theURL = "https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/4/volumes?key=" + apiKey;  

    const response = await fetch(theURL);
    const bookData = await response.json();

    for(let i=0; i < bookData.items.length; i++){
        const bookGridItem = document.createElement("article");
        bookGridItem.classList.add("bookGridItem")

        const newBookItem = document.createElement("img");
        newBookItem.setAttribute("src", bookData.items[i].volumeInfo.imageLinks.thumbnail);
        newBookItem.setAttribute("alt", bookData.items[i].volumeInfo.title);
        bookGridItem.append(newBookItem);

        const bookTitle = document.createElement("h1");
        bookTitle.innerText = bookData.items[i].volumeInfo.title;
        bookGridItem.append(bookTitle)

        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = bookData.items[i].volumeInfo.authors[0];
        bookGridItem.append(bookAuthor)
 
        document.querySelector(".bookGrid").append(bookGridItem);
    }
}

bookList();