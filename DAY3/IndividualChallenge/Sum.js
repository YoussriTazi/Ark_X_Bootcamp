function sum(numbers) {
    let E = 0;
    for (let i= 0 ; i< numbers.length ; i++) {
        E += numbers[i];
    }
    return E;
}

const numbers = [1, 2, 3, 4, 5];
const total = sum(numbers);
console.log(total);
