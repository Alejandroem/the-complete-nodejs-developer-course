const fs = require('fs');

// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };
//
// const bookJSON = JSON.stringify(book);
//
// console.log(bookJSON);
//
// const parsedData = JSON.parse(bookJSON);
//
// console.log(parsedData.author);
//
// fs.writeFileSync('playground/1-json.json',bookJSON);


// const dataBuffer = fs.readFileSync('1-json.json');
// const data = JSON.parse(dataBuffer.toString());
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
let data = JSON.parse(dataBuffer.toString());
console.log(data);
data.name = 'Alex';
data.age = 26;

const dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json',dataJSON);





