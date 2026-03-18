const myLibrary = [
    {
        id : '1',
        title: 'the wonderfully world',
        author: 'root',
        pages: 56,
        readStatus: 'complete',
    },
    {
        id : '2',
        title: 'the wonderfully world 2',
        author: 'root2',
        pages: 52,
        readStatus: 'pending',
    },
];

const bookDialog = document.querySelector('#book-dialog');
const addBookBtn = document.querySelector('#add-book-btn');
const libraryGrid = document.querySelector('#library-grid');
const bookForm = document.querySelector('#book-form');
const cancelBtn = document.querySelector('#cancel-btn');

function Book(title, author, pages, readStatus) {
    // const id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus= readStatus;
}


function displayBooks(){
    libraryGrid.innerHTML = '';
    myLibrary.forEach((currentBook,index) =>{
        const newCard = document.createElement('div');
        const myTitle = document.createElement('h2');
        const myAuthor = document.createElement('h3');
        const myPage = document.createElement('h4');
        const myStatus = document.createElement('p');
        const removeBtn = document.createElement('button');

        myTitle.textContent = currentBook.title;
         myAuthor.textContent = currentBook.author;
         myPage.textContent = currentBook.pages;
         myStatus.textContent = currentBook.readStatus;
         
         newCard.classList.add('book-card');
        newCard.appendChild(myTitle);
        newCard.appendChild(myAuthor);
        newCard.appendChild(myPage);
        newCard.appendChild(myStatus);
        newCard.appendChild(removeBtn);
        libraryGrid.appendChild(newCard);

        newCard.setAttribute('data-index',index);

        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
            saveLocal();
        });
         
    })
    
}


addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
    
});
cancelBtn.addEventListener('click',()=>{
    bookDialog.close();

    bookForm.reset();
})
bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    const pagesInput = document.querySelector('#pages').value;
    const readInput = document.querySelector('#read').value;

    const newBook = new Book(titleInput, authorInput, pagesInput, readInput);
    
    myLibrary.push(newBook);
    
    displayBooks();

    bookDialog.close();
    bookForm.reset();
    saveLocal();
});

           
 function saveLocal(){
    const libraryString = JSON.stringify(myLibrary);
    localStorage.setItem(mySavedLibrary,libraryString);
}
function restoreLocal()
{

}

restoreLocal();
// displayBooks();