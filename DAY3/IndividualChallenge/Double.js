function doubled (array){
let doubleNumber = []
for (let i=0; i< array.length ; i++){

    doubleNumber.push(array[i]*2)
    }

    return doubleNumber;
}

//Example

array = [1,2,3]
console.log(doubled(array))