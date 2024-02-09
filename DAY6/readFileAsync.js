// readFileAsync.js
const fs = require('fs');

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file: ${err}`);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = readFileAsync ;



async function start(){
    const data = await fetch('https://dummyjson.com/users');
    const result = await data.json();
    console.log(result);
}
start();