// index.js
const processFiles = require('./processFiles');

async function index() {
    try {
        // Specify input and output file paths
        const inputFilePath = './file.txt';
        const outputFilePath = './UppercaseNodeProject.txt';

        // Call processFiles function with input and output file paths
        await processFiles(inputFilePath, outputFilePath);

        console.log('Processing complete.');
    } catch (error) {
        console.error('Error in main application:', error);
    }
}

index();