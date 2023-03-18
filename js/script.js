const apiKey = "AIzaSyB9jQH0ik-hHrTbOiX4JYV3t1LLUxcgyug";
const userID = "114186212132847518300";

//Book List All
async function bookList(pageNumber, shelfNumber, domTarget) {

    let index = pageNumber * 40;
    let theURL = "https://www.googleapis.com/books/v1/users/" + userID + "/bookshelves/" + shelfNumber + "/volumes?maxResults=40&startIndex=" + index; 

    const response = await fetch(theURL);
    const bookData = await response.json();

    console.log(bookData);

    if("items" in bookData) {
        document.querySelector(domTarget).innerHTML = "";
        let removeMe = document.querySelector(domTarget).closest(".tab-pane").querySelector(".pagination");
            if (typeof removeMe != "undefined" && removeMe != null) {
                removeMe.remove();
            }

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
        
                document.querySelector(domTarget).append(bookGridItem);
    }

    const innerTemplate = `<ul class="pagination justify-content-center">
    </ul>`

    const paginationSet = document.createElement("nav");
    paginationSet.innerHTML = innerTemplate;

    let disabled = "disabled";
    if(pageNumber > 0) {
        disabled = "";
    }

    paginationSet.querySelector("ul").innerHTML += `<li class="page-item ${disabled}">
    <a class="page-link pagPre" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
    </a>
        </li>`;

    const pageCount = Math.ceil(bookData.totalItems/40)

    for (i=0; i < pageCount; i++){
        let active = "active";
        if (pageNumber != i) {
            active = "";
        }
        let shownPageNumber = i+1;
        paginationSet.querySelector("ul").innerHTML += `<li class="page-item ${active} pagNum"><a class="page-link" href="#">${shownPageNumber}</a></li>`
    }

    disabled = "disabled";
    if (pageNumber < pageCount-1) {
        disabled = "";
    }

    paginationSet.querySelector("ul").innerHTML += `<li class="page-item ${disabled}">
    <a class="page-link pagNex" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
    </a>
        </li>`

    let targetTab = document.querySelector(domTarget).closest(".tab-pane").append(paginationSet);

    // click on pre - 1 from current page
    document.querySelector(domTarget).closest(".tab-pane").querySelector(".pagPre").addEventListener('click', function(e){
        e.preventDefault();
        
        const targetPageNumber = pageNumber - 1;
        bookList(targetPageNumber, shelfNumber, domTarget);

    });

    document.querySelector(domTarget).closest(".tab-pane").querySelector(".pagNex").addEventListener('click', function(e){
        e.preventDefault();
        
        const targetPageNumber = pageNumber + 1;
        bookList(targetPageNumber, shelfNumber, domTarget);

    });  
  
    let pageNumberSet = document.querySelector(domTarget).closest(".tab-pane").querySelectorAll(".pagNum");
    for (i=0; i < pageNumberSet.length; i++){
        pageNumberSet[i].querySelector("a").addEventListener('click', function(e){
            e.preventDefault();
            const targetPageNumber = parseInt(this.innerText)-1;
            bookList(targetPageNumber, shelfNumber, domTarget);

        });
    }
    
    return bookData.totalItems;
}
    return 0;
}

async function getAllBooks(){
    let tabTitle = "";
    tabTitle = await bookList(0, 4, ".bookGrid");
    document.querySelector("#pills-all").innerText = "All (" + tabTitle + ")";
    document.querySelector('.preFooterTotal').innerText = tabTitle;

    tabTitle = await bookList(0, 1001, ".bookGrid21");
    document.querySelector("#pills-twoOne").innerText = "2021 (" + tabTitle + ")";

    tabTitle = await bookList(0, 1002, ".bookGrid22");
    document.querySelector("#pills-twoTwo").innerText = "2022 (" + tabTitle + ")";

    tabTitle = await bookList(0, 1003, ".bookGrid23");
    document.querySelector("#pills-twoThree").innerText = "2023 (" + tabTitle + ")";
}
getAllBooks();


// Extra Tab JS from Bootstrap
const triggerTabList = document.querySelectorAll('#pills-twoThree button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})


