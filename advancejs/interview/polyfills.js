const arr = [1, 3, 5, 7, 9];

//polyfill for map
Array.prototype.myMap = function(callback){
    let result = [];

    for(let i =0; i<this.length; i++){
        result.push(callback(this[i], i, this));
    }

    return result;
}
const mymap_result = arr.myMap(n => n * 2);


//polyfill for filter
Array.prototype.myFilter = function(callback){
    let result = [];

    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}
const myfilter_result = arr.myFilter( n => n%2 === 1).myFilter( n => n < 6)


///polyfill for reduce
//"Take the current accumulated value, combine it with the current element
// using the callback, and store the result back into the accumulator"
Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue;
    let startingIndex = 0;

    for(let i = startingIndex; i<this.length; i++){
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator
}
const myReduceRes = arr.myReduce( (acc, curr) => acc+curr, 10) 


//polyfill for forEach
Array.prototype.myForEach = function(callback){
    for(let i = 0; i<this.length; i++){
        callback(this[i], i, this);
    }
}
//arr.myForEach( n => console.log(n));


//pollyfill for myBind()
//function(...args) -> context and params bundled together -> args[0] : context, args.slice(1) : params
//function(context, ...args) -> context and params are explicitly mentioned
Function.prototype.myBind = function(context, ...args1){
    let fxn = this;

    return function(...args2){
        fxn.apply(context, [...args1, ...args2]);
    }
};


//polyfill for myCall()
Function.prototype.myCall = function(context, ...args1){
    context.fxn = this; //attaching a function on which call() is called upon
    const result = context.fxn(...args1);
    delete context.fxn;
    
    return result;
}


//polyfill for myApply()
Function.prototype.myApply = function(context, args = []){
    context.fxn = this;
    const result = context.fxn(...args);
    delete context.fxn;

    return result;
}

const name1 = {
    fname: "Haseeb", 
    lname: "Abdul",
    printName: function(){
        console.log(`Name is : ${this.fname} ${this.lname}`);
    }
}
function printify(city,country){
    console.log(`Name is : ${this.fname} ${this.lname} from ${city}, ${country}`);
}
const obj1 = {
    fname: " Rahman",
    lname: "Abdur"
}
printify.myCall(obj1, "Hyderabad", "India");

printify.myApply(obj1, ["Hyd", "IN"]);
let bindPrint = printify.bind(obj1, 'HYDERABAD', 'INDIA');
bindPrint();

//console.log(myReduceRes)