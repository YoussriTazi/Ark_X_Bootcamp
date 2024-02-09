const fetch = require("node-fetch");

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/25/'
;

// First function using Promise chaining
fetch(apiUrl)
.then(function (res) {
return res.json();
})
.then((data) => console.log(data.name))
.catch((err) => console.log(err));

// Second function using async/await
const getPokemon = async () => {
try {
const response = await fetch(apiUrl);
const data = await response.json();
console.log(data.name);
} catch (error) {
console.error(error);
}
};

getPokemon();