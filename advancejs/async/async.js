// const prom1 = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1 resolved');
//     }, 4000)
// })

// const prom2 = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2 resolved');
//     }, 0);
// })
//const username = 'abdhaseeb'
//fetch(`https://api.github.com/users/${username}`)

const api_url = "https://api.github.com/users/abdhaseeb"

async function getUserData(){
    const raw_data = await fetch(api_url); 
    const user_data = await raw_data.json();
    console.log(user_data.name, user_data.location);
}

//getUserData();

async function getData(){
    //prom.then( (data) => console.log(data));
    console.log('Hello')

    const data1 = await prom1;
    console.log(data1);
    const data2 = await prom2;
    console.log(data2);
    
    console.log('Printing after promises')
}

//getData();


const p1 = new Promise( (resolve, reject) => {
    setTimeout( ()=>{
        resolve('P1 fulfilled')
    }, 3000);
})

const p2 = new Promise( (resolve, reject) => {
    setTimeout( ()=>{
        reject('P2 rejected')
    }, 1000);
})

const p3 = new Promise( (resolve, reject) => {
    setTimeout( ()=>{
        resolve('P3 fulfilled')
    }, 2000);
})

Promise.allSettled([p1, p2, p3])
.then( (response) => console.log(response))
.catch( (err) => console.error(err));

//p1.then( (status) => console.log(status))