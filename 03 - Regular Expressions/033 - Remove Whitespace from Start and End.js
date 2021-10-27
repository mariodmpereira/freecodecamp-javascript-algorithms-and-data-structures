let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let replaceText = "";
let result = hello.replace(wsRegex, replaceText); // Change this line