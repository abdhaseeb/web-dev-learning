// let myName = "placeholder"
// let age = 0

// const obj = {
//     myName : "Haseeb",
//     age : 27, 
//     printDetails : () => {
//         console.log(`Name is ${this.myName} and age is ${this.age}`); 
//     }
// }

// obj.printDetails()

// const obj = {
//   name: "Haseeb",
//   method() {
//     return () => {
//       console.log(this.name);
//     };
//   }
// };

// const fn = obj.method();
// fn();

const obj = {
  name: "Haseeb",
  greet() {
    console.log(this.name);
  }
};

const sayHi = obj.greet.bind(obj);
sayHi();
//setTimeout(obj.greet.bind(obj), 1000);