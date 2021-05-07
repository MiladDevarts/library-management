
const bookRecordForm = document.querySelector('#bookRecordForm');
const getBookLenght = document.querySelector('#bookLenght');
const errBox = document.querySelector('#validtionErrorBox');

let productLengh = 0 ;

let bookList = [];
let bookInfo = {};

document.querySelector('#addBook').addEventListener('click' , (e) => {


    document.querySelector('#bookName').value = '';
    document.querySelector('#bookAuthor').value = '';
    document.querySelector('#bookPrice').value = '';

    e.preventDefault()

})


const recieveDataFromUser = (form) => {


    form.addEventListener('submit',(e)=>{

        bookInfo = {
    
            name:e.target.bookName.value,
            author:e.target.bookAuthor.value,
            price:e.target.bookPrice.value,
            genere:e.target.bookGenere.value,

        }


        
    if(bookRecordingValidation() == false) {

        errBox.textContent = 'لطفا فرم را تکمیل کنید :('
    
    }  else {

        errBox.classList.remove('badge-danger');
        errBox.classList.add('badge-success');
        errBox.textContent = 'در حال انتقال به سبد خرید';

        // document.querySelector('.modal').style.display = 'none';


        saveAndShowBook()
        console.log(bookList)

    }

      

        e.preventDefault()

    
    })

}

const saveAndShowBook = () => {
    
    bookList.push(bookInfo)

    productLengh++;

    getBookLenght.textContent = '';
    getBookLenght.textContent = productLengh;

    document.querySelector('#notFoundBlock').style.display = 'none';

 let booklistRendered = bookList.map(function(book,index){

    

    let row = document.createElement("tr");

    for(key in book) {

        let col = document.createElement("td");
        let value = book[key]; 
        col.appendChild(document.createTextNode(value));
        row.appendChild(col);
        console.log(row);

    }

    bookList = [];

    return row;


})



    let getBookItemsTable = document.querySelector('#bookItemsTable');

    booklistRendered.forEach(function(books){


        getBookItemsTable.appendChild(books);



    })

}

const bookRecordingValidation = () => {

    if(bookInfo.name == '') {

        return false
    
    } else if(bookInfo.author == '') {

        return false;
    
    } else if (bookInfo.price == '') {

        return false;
    
    } else if(bookInfo.genere == '') {

        return false;
    
    } else {

       return true

    }

}



recieveDataFromUser(bookRecordForm);





