let number = 3
 let remainder = (number % 2)

 if (remainder == 0 ) {
  console.log(`${number} is even`)
 }else{
  console.log(`${number} is odd`)

 }


 //using a function
 function isEven(number)
 {
    let remainder = (number % 2)
 
 if (remainder == 0 ){
      console.log(`${number} is even`)
 }else {
  console.log(`${number} is odd`)
 }
 }

isEven(6)