// for-of loop

//const arr = [10, 20, 30, 40, 50]
// const str = "Haseeb is also Fahad"
// for (const char of str) {
//     console.log(element);
// }

const obj = {
    name:"Haseeb",
    age: 27, 
    telephone: "8187094637",
    address : {
        city :"Hyderabad",
        pin : 500086,
        state : "TG",
        country : "India"
    }
}

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
//     if(typeof obj[key] === 'object'){
//         const child = obj[key];
//         for(const k in child){
//             if (!Object.hasOwn(child, k)) continue;
//             const v = child[k]
//             console.log(v);
//         }
//         break;
//     }
//     const value = obj[key];
//     console.log(value)
// }


//***forEach loop ***
// const arr =  ["Haseeb", "Abdul", 90, 80, 70];
// arr.forEach( (e) => { return console.log(e+'x')} )  //same o/p
// arr.forEach( (e) => ( console.log(e+'x') ) )        //same o/p


//**MAP** : unique; remembers the order of insertion of keys; any value may be used either a key or a value 
const map1 = new Map()
map1.set('IN', "Spineless India")
map1.set('US', "Tyranous USA")
map1.set('ISR', "Disgusting Israel")
//console.log(map1)

// for (const [key, value] of map1) {
//     console.log(value);
// }

