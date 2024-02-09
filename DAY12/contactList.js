const readline = require('readline');
const storingArray = [];
const re = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function addContact() {
re.question('enter a name and a phone number:', (input) => {
const [name, num] = input.split(' ');
storingArray.push({name, num});
console.log("Contact added successfully!\n");
showMenu();
});
}

function viewAllContacts() {
console.log("\nAll Contacts:");
storingArray.forEach(contact => {
console.log(`Name: ${contact.name}, Phone Number: ${contact.num}`);
});
console.log();
showMenu();
}

function searchContact() {
re.question("enter the contact name you wanna search for: ",(searchName) => {
const foundContact = storingArray.find(contact => contact.name === searchName);
if (foundContact) {
console.log(`the name is ${foundContact.name} and their phone number is ${foundContact.num}`);
} else {
console.log("the contact aint found");
}
showMenu();
});
}

function exitApplication() {
console.log("exiting the app!")
process.exit;
}

function showMenu() {
console.log('choose an option:');
console.log('1. add a contact');
console.log('2. view all contacts');
console.log('3. search for a contact');
console.log('4. exit the app');

re.question('Enter your choice (1-4): ', (choice) => {
switch(parseInt(choice)) {
case 1:
addContact();
break;
case 2:
viewAllContacts();
break;
case 3:
searchContact();
break;
case 4:
exitApplication();
break;
default:
console.log('invalid choice. Please enter a valid choice\n');
showMenu();
}
});
}
showMenu();