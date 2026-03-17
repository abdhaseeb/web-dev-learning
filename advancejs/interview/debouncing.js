let counter = 0;
const getData = function(){
    //calls an API to get data
    console.log("Inside getData " + counter++);
}

function delayGetData(fxn, delay){
    let timer;
    return function(){
        let context = this, args = arguments; 
        clearTimeout(timer);
        timer = setTimeout(() => {
            fxn.apply(context, arguments);
        }, delay);
    }
}

window.debouncingFunction = delayGetData(getData, 500);