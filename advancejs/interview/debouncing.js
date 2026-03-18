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

//custom implementation
function debounce(fxn, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout( () => {
            fxn(...args);
        }, delay)
    }
}
//window.debouncingFunction = debounce(getData, 500);