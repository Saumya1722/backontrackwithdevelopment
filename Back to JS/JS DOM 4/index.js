// synchronous code

// function sync()
// {
//     console.log('first');
// }
// sync();

// console.log('second');


//asynchronous is executed only if calll stack is empty
// and there is no synchronous execution occuring
// setTimeout(function()
// {
//     console.log('third');
// },3000)
// // synchronous
// function sync()
// {
//     console.log('first');
// }
// sync();

// console.log('second');



// promise
// resolve- when promise is fulfilled
// let meraPromise=new Promise(function(resolve,reject)
// {
//     setTimeout(function() {
//         console.log('I am inside Promise');
//     }, 5000);
//     resolve(4445);
// });
// console.log('First promise');



// reject- when promise is rejected
// let meraPromise=new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('I am inside promise');
// },5000);
// reject(new Error('Error is found in promise'))
// });
// console.log('First promise');



// run promises parallel in js
// let meraPromise1 =new Promise(function()
// {
//     setTimeout(function()
// {
//     console.log('I am inside promise1');
// },5000);
// });

// let meraPromise2=new Promise(function()
// {
//     setTimeout(function()
// {
//     console.log('I am inside promise2');
// },3000);
// });

// console.log('First promise of mine');


// then() in promise
// let meraPromise1=new Promise(function(resolve,reject)
// {
// setTimeout(function()
// {
//     console.log('I ma inside Promise1');
// },3000);
// resolve(12345);
// });

// meraPromise1.then((value)=>{console.log(value)});



//catch() in promise
// let meraPromise1=new Promise(function(resolve,reject)
// {
//     setTimeout(function()
// {
//     console.log('I am inside promise1');
// },5000);
// reject(new error('We found new error'))
// });

// // meraPromise1.then((value)=>{console.log(value)});

// // meraPromise1.catch((error) =>{console.log('Received an error')});

// // one line execution of then() and catch() in promise
// meraPromise1.then((value) =>{ console.log(value)},
// (error) =>{console.log('Received an error')});




// multiple promise working simultaneously
// let promise1 =new Promise(function(resolve,reject)
// {
//     setTimeout(()=>{
//         console.log('sentiment started');
//     },2000);
//     resolve(true);
// })

// let output=promise1.then(()=> {
//     let promise2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('setimeout2 started');
//         },3000);
//         resolve('promise2 resolved');
//     })
//     return promise2;
// })
// output.then((value)=>console.log(value));




// aynsc() function 
// async function fnc()
// {
//     return 8;
// }
// async function fnc()
// {
//     return "job mili kya";
// }


// promises are running parallel
// async function utility()
// {
// let hajipurMausam=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         resolve('Hajipur mein thand hai');
//     },1000);
// });

// let goaMausam= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Goa is hot');
//     },5000);
// });

// let kM= hajipurMausam;
// let gM= goaMausam;

// return [kM,gM];
// }




// await 
// async function utility()
// {
// let khararMausam=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         resolve('Kharar mein thand hai');
//     },1000);
// });

// let goaMausam= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Goa is hot');
//     },5000);
// });

// let kM=await khararMausam;
// let gM= await goaMausam;

// return [kM,gM];
// }




// fetch API-returns promise
// let content= fetch('https://jsonplaceholder.typicode.com/posts');




// getting something using fetch API
// let obj={
//     heading:"head"
// };

// // get
// async function utility()
// {
//     let content= await 
//     fetch('https://jsonplaceholder.typicode.com/posts');
//     let output=await content.json();
//     console.log(output);
// }

// utility();


// sending something using fetch API
// async function helper(){
// let option={
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'Saumya',
//       body: 'Developer',
//       userId: 1,
//       level:'Expert'
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// };
// post call using fetch api
// let content=await fetch('https://jsonplaceholder.typicode.com/posts',
//     option);
// let response=content.json();
// return response;
// }

// async function utility()
// {
//     let ans=await helper();
//     console.log(ans);
// }

// utility();




// closure
// function init() {

//     let name="Saumya";
//     // displayName() is the inner function, that forms the closure
//     function displayName(){
      
//         console.log(name);
//     }
//     displayName();
// }
// init();




// function init() {

    // displayName() is the inner function, that forms the closure
//     function displayName(){
      
//     let name="Saumya";
//         console.log(name);
//     }
//     displayName();
// }
// init();




// function init() {
//   let name="Somu";
    // displayName() is the inner function, that forms the closure

//     function displayName(){
      
//     let name="Saumya";
//         console.log(name);
//     }
//     displayName();
// }
// init();




// function init() {
//     {
//         let name="Somu";
//     }
//     // name is a local variable created by init
//     // let name="Saumya";
//     // displayName() is the inner function, that forms the closure
//     function displayName(){
//         // let name="Sinha";
//         console.log(name);
//     }
//     displayName();
// }
// init();



//   let name="Somu";
// function init() {
//     // displayName() is the inner function, that forms the closure

//     function displayName(){
   
//         console.log(name);
//     }
//     displayName();
// }
// init();




function init()
{
    let name="Saumya";
    function displayName()
    {
        console.log(name);
    }
    return displayName;
}
let a= init();
a();