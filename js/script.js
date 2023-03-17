const apiKey = "AIzaSyB9jQH0ik-hHrTbOiX4JYV3t1LLUxcgyug";
const userID = "114186212132847518300";

//Book List All
async function bookList() {

    let theURL = "https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/4/volumes?maxResults=40";  

    const response = await fetch(theURL);
    const bookData = await response.json();

    console.log(bookData);

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

    const buttonAll = document.querySelector("#pills-all");
    buttonAll.innerText = "All (" + bookData.totalItems + ")";

    const totalBooks = bookData.totalItems;
    document.querySelector('.preFooterTotal').innerText = totalBooks;
}
bookList();

//Book List 2021
async function twoOneBookList() {
    let twoOneURL = "https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/1001/volumes";  

    const response = await fetch(twoOneURL);
    const twoOneBookData = await response.json();

    for(let i=0; i < twoOneBookData.items.length; i++){
        const bookGridItem = document.createElement("article");
        bookGridItem.classList.add("bookGridItem")

        const newBookItem = document.createElement("img");
        newBookItem.setAttribute("src", twoOneBookData.items[i].volumeInfo.imageLinks.thumbnail);
        newBookItem.setAttribute("alt", twoOneBookData.items[i].volumeInfo.title);
        bookGridItem.append(newBookItem);

        const bookTitle = document.createElement("h1");
        bookTitle.innerText = twoOneBookData.items[i].volumeInfo.title;
        bookGridItem.append(bookTitle)

        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = twoOneBookData.items[i].volumeInfo.authors[0];
        bookGridItem.append(bookAuthor)
 
        document.querySelector(".bookGrid21").append(bookGridItem);
    }

    const buttonTwoOne = document.querySelector("#pills-twoOne");
    buttonTwoOne.innerText = "2021 (" + twoOneBookData.totalItems + ")";
}
twoOneBookList();

//Book List 2022
async function twoTwoBookList() {
    let twoTwoURL = "https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/1002/volumes";  

    const response = await fetch(twoTwoURL);
    const twoTwoBookData = await response.json();

    for(let i=0; i < twoTwoBookData.items.length; i++){
        const bookGridItem = document.createElement("article");
        bookGridItem.classList.add("bookGridItem")

        const newBookItem = document.createElement("img");
        newBookItem.setAttribute("src", twoTwoBookData.items[i].volumeInfo.imageLinks.thumbnail);
        newBookItem.setAttribute("alt", twoTwoBookData.items[i].volumeInfo.title);
        bookGridItem.append(newBookItem);

        const bookTitle = document.createElement("h1");
        bookTitle.innerText = twoTwoBookData.items[i].volumeInfo.title;
        bookGridItem.append(bookTitle)

        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = twoTwoBookData.items[i].volumeInfo.authors[0];
        bookGridItem.append(bookAuthor)
 
        document.querySelector(".bookGrid22").append(bookGridItem);
    }

    const buttonTwoTwo = document.querySelector("#pills-twoTwo");
    buttonTwoTwo.innerText = "2022 (" + twoTwoBookData.totalItems + ")";
}
twoTwoBookList();

//Book List 2023
async function twoThreeBookList() {
    let twoThreeURL = "https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/1003/volumes";  

    const response = await fetch(twoThreeURL);
    const twoThreeBookData = await response.json();

    for(let i=0; i < twoThreeBookData.items.length; i++){
        const bookGridItem = document.createElement("article");
        bookGridItem.classList.add("bookGridItem")

        const newBookItem = document.createElement("img");
        newBookItem.setAttribute("src", twoThreeBookData.items[i].volumeInfo.imageLinks.thumbnail);
        newBookItem.setAttribute("alt", twoThreeBookData.items[i].volumeInfo.title);
        bookGridItem.append(newBookItem);

        const bookTitle = document.createElement("h1");
        bookTitle.innerText = twoThreeBookData.items[i].volumeInfo.title;
        bookGridItem.append(bookTitle)

        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = twoThreeBookData.items[i].volumeInfo.authors[0];
        bookGridItem.append(bookAuthor)
 
        document.querySelector(".bookGrid23").append(bookGridItem);
    }

    const buttonTwoThree = document.querySelector("#pills-twoThree");
    buttonTwoThree.innerText = "2023 (" + twoThreeBookData.totalItems + ")";
}
twoThreeBookList();

// Extra Tab JS from Bootstrap
const triggerTabList = document.querySelectorAll('#pills-twoThree button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})


