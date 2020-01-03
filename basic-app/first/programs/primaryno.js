// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
//   console.log(isPrime(-3))

 
function sumPrimes(num) { 
let numArray = [];
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }

  //Remove non-prime numbers from the array     
  numArray.map((number) => {
    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            let index = numArray.indexOf(number);
            return numArray.splice(index, 1);       
        }
    }   
  });

 return numArray;
}
sumPrimes(10);