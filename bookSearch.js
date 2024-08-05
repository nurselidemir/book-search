let book1 = 
{
    name: "Homo Sapiens", author: "Yuval Noah Harari", price: 250, bookshelf: "1.5 bookshelf"
};
let book2 = 
{
    name: "Hobbit", author: "J. R. R. Tolkien", price: 300, bookshelf: "2.3 bookshelf"
};

let book3 = 
{
    name: "Alice's Adventures in Wonderland", author: "Lewis Carol", price: 400, bookshelf: "3.4 bookshelf"
};

let book4 =
{
    name: "1984", author: "George Orwell", price: 250, bookshelf: "4.1 bookshelf"
};

let book5 =
{
    name: "Romeo and Juliet", author: "William Shakespeare", price: 270, bookshelf: "5.3 bookshelf"
};

let books = [book1, book2, book3, book4, book5];

let bookshelf11 = { code: "1.1 bookshelf", display: false };
let bookshelf12 = { code: "1.2 bookshelf", display: false };
let bookshelf13 = { code: "1.3 bookshelf", display: false };
let bookshelf14 = { code: "1.4 bookshelf", display: false };
let bookshelf15 = { code: "1.5 bookshelf", display: false };

let bookshelf21 = { code: "2.1 bookshelf", display: false };
let bookshelf22 = { code: "2.2 bookshelf", display: false };
let bookshelf23 = { code: "2.3 bookshelf", display: false };
let bookshelf24 = { code: "2.4 bookshelf", display: false };
let bookshelf25 = { code: "2.5 bookshelf", display: false };

let bookshelf31 = { code: "3.1 bookshelf", display: false };
let bookshelf32 = { code: "3.2 bookshelf", display: false };
let bookshelf33 = { code: "3.3 bookshelf", display: false };
let bookshelf34 = { code: "3.4 bookshelf", display: false };
let bookshelf35 = { code: "3.5 bookshelf", display: false };

let bookshelf41 = { code: "4.1 bookshelf", display: false };
let bookshelf42 = { code: "4.2 bookshelf", display: false };
let bookshelf43 = { code: "4.3 bookshelf", display: false };
let bookshelf44 = { code: "4.4 bookshelf", display: false };
let bookshelf45 = { code: "4.5 bookshelf", display: false };

let bookshelf51 = { code: "5.1 bookshelf", display: false };
let bookshelf52 = { code: "5.2 bookshelf", display: false };
let bookshelf53 = { code: "5.3 bookshelf", display: false };
let bookshelf54 = { code: "5.4 bookshelf", display: false };
let bookshelf55 = { code: "5.5 bookshelf", display: false };

let bookshelfs =
[
    [bookshelf51, bookshelf52, bookshelf53, bookshelf54, bookshelf55],
    [bookshelf41, bookshelf42, bookshelf43, bookshelf44, bookshelf45],
    [bookshelf31, bookshelf32, bookshelf33, bookshelf34, bookshelf35],
    [bookshelf21, bookshelf22, bookshelf23, bookshelf24, bookshelf25],
    [bookshelf11, bookshelf12, bookshelf13, bookshelf14, bookshelf15],
];

function createShelf() 
{
    console.clear();
    let line = "";
    for (let i = 0; i < bookshelfs.length; i++) 
        {
        for (let j = 0; j < 5; j++) 
            {
            line += " | " + (bookshelfs[i][j].display ? bookshelfs[i][j].code : "---") + " | ";
            }
        console.log(line);
        console.log("--------------------------------------------");
        line = "";
       }
}

function findCode(bookName)
{
    let bookshelfCode = null;
    books.forEach(function(book) 
    {
        if (book.name.toUpperCase().includes(bookName.toUpperCase())) 
            {
            bookshelfCode = book.bookshelf;
            }
    });
    return bookshelfCode;
}

function bookshelfDisplay(bookshelfCode) 
{
    for (let i = 0; i < bookshelfs.length; i++)
     {
        for (let j = 0; j < 5; j++)
        {
            if (bookshelfs[i][j].code.trim() === bookshelfCode.trim())
                 {
                bookshelfs[i][j].display = true;
                return; 
                 }
        }
    }
}

createShelf();
let bookName = prompt("Please enter the book name:");
let bookshelfCode = findCode(bookName);

if (bookshelfCode != null) 
    {
    bookshelfDisplay(bookshelfCode);
    createShelf();
    }
else
    {
    alert("No results were found matching the criteria you entered.");
    }
