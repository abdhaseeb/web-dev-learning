// console.log('First js msg')
// console.log('second js msg')

let multiply = function(x, y, z){
    console.log(x*y + z);
} 

let multiply2 = multiply.bind(this, 10, 10);
multiply2(2);

let multiply3 = multiply.bind(this, 2, 5);
multiply3(3);