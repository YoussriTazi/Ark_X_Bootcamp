

// we gonna use linear search to find the price of a given book name


const books = require("./books.json");      //Recall the library



function priceOfBook(bookName) {
  // write your code here
 if (bookName === "") return "Not Found"; // we should declare not found, to not waste time waiting the whole loop to end. for performance
 for (let i = 0; i < books.length; i++) {
   if (books[i].title === bookName) {
     return books[i].price;
   }
 }
 return "Not found";
}

console.log(priceOfBook("The Alchemist"))
