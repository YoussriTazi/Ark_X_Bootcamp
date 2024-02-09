// writeFileAsync.js
const fs = require('fs');

function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', err => {
            if (err) {
                reject5(`Error writing file: ${err}`);
            } else {
                resolve('File written successfully.');
            }
        });
    });
}


module.exports = writeFileAsync ;
