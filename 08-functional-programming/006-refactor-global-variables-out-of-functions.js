// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    const innerBookList = [...bookList];
    innerBookList.push(bookName);
    return innerBookList;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    const innerBookList = [...bookList];
    const book_index = innerBookList.indexOf(bookName);
    if (book_index >= 0) {

        innerBookList.splice(book_index, 1);
        return innerBookList;

        // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);