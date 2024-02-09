// processFiles.js
const fs = require('fs');
const readFileAsync = require('./readFileAsync');
const writeFileAsync = require('./writeFileAsync');

async function processFiles(inputFilePath, outputFilePath) {
    try {
        // Read the content of the input file
        const data = await readFileAsync(inputFilePath);

        // Manipulate the content (e.g., convert to uppercase)
        const modifiedData = data.toUpperCase();

        // Write the modified content to the output file
        await writeFileAsync(outputFilePath, modifiedData);

        console.log(`File processed successfully. Output written to: ${outputFilePath}`);
    } catch (error) {
        console.error('Error processing files:', error);
    }
}

module.exports = processFiles;