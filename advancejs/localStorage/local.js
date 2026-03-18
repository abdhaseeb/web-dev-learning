const name1 = 'Abdul Haseeb'
const userdata = {
    username: name1,
    city: "Hyderabad", 
    country: "India", 
    age: 27
}

// globalThis.localStorage.setItem('username', name1);
// localStorage.setItem('userdata', JSON.stringify(userdata))

// console.log(localStorage.getItem(JSON.parse(userdata)));

function counter(initialVal){
    let count = initialVal;
    
    return {
        increment: function(){
            // console.log(++count);
            ++count;
        },

        decrement: function(){
            // console.log(--count);
            --count;
        },

        reset: function(){
            count = initialVal;
            console.log(count);
        },
        get: function(){
            console.log(count);
            // return count;
        }
    }
}

const counterObject = counter(0);

counterObject.increment()
counterObject.increment()
counterObject.increment()
counterObject.increment()
counterObject.decrement()
counterObject.decrement()
// counterObject.reset()
counterObject.increment()
counterObject.get()