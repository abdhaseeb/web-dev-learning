let counter = 0;
function handleScroll(){
    console.log('Scrolling '+ counter++);
}

function throttle1(fn, delay){
    let lastCall = 0;

    return function(...args){
        let now = Date.now();
        if(now - lastCall >= delay){
            lastCall = now;
            fn.apply(this, args);
        }
    }
}

function throttle(fn, delay){
    let lastCall = 0;
    let timer;

    return function(...args){
        let now = Date.now();
        if(now - lastCall >= delay){
            clearTimeout(timer);
            timer = setTimeout( () => {
                lastCall = Date.now();
                fn.apply(this, args);
            }, delay)

        }
        else{
            lastCall = now;
            fn.apply(this, args);
        }
    }
}

const throttleScroll = throttle(handleScroll, 1000);
window.addEventListener('scroll', throttleScroll);