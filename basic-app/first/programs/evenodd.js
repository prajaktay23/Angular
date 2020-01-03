// 1st Option
function even(num1){
    if(num1%2==0){
       return 'even no';
    }
    else
    return 'odd no';
}
console.log(even(3))

// 2nd Option
function evenodd(x){
    return ( x & 1 ) ? "odd" : "even";
}
console.log(evenodd(3))

// 3rd Option
var isEven=n=>(n&1)? "odd":"even";
console.log(isEven(4))