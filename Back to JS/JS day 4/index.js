// function declaration
// function run()
// {
//     console.log('Dogs are running');
// }
// // function call or invoke
// run();


// hoisting
// function call or invoke
// run();
// // function declaration
// function run()
// {
//     console.log('Dogs are running');
// }



// Named Function assignment
// let stick=function walk()
// {
//     console.log('Walking');
// };

// // call function
// stick();


// stick();
// // function assignment
// let stick=function walk()
// {
//     console.log('Walking');
// };



// function assignment
// let stick=function walk()
// {
//     console.log('Walking');
// };

// // call function
// stick();

// let work=stick;
// work();




// Anonymous Function assignment
// let stick2=function()
// {
//     console.log('Walking');
// };

// // assignment
// let jump=stick2;

// //call again using function assignment
// jump();

// // anonymous function call
// stick2();



// dynamic property
// let x=1;
// x='a';
// console.log(x);
 

// function declaration
// function sum(a,b)
// {
//     return a+b;
// }

// print +call
// console.log(sum(1,2));
// a is defined but bis not defined-  1+undefined=NaN
// console.log(sum(1));
// console.log(sum());

// console.log(sum(1,2,3,4,5,6));


// argument object in JS
// function sum(a,b)
// {
//     console.log(arguments);
//     return a+b;
// }

// let ans=sum(1,2);
// let ans=sum(1,2,3,4,5,6);


// dynamic function with multiple parameters
// function sum()
// {
//     let total=0;
//     // loop- for-of loop
//     for(let value of arguments)
//         total=total+value;
//     return total;
// }

// assignment function call
// let ans=sum(1,2,3,4,5,6,7);
// let ans=sum(1,2);
// let ans=sum(1);
// let ans=sum();
// // print
// console.log(ans);



// rest operator
// arguments used as array
// function sum(...args)
// {
//     console.log(args);
// }

// sum(1,2,3,4,5);



// 1 is taken by num and rest parameters are taken by args
// function sum(num,...args)
// {
//     console.log(args);
// }

// sum(1,2,3,4,5);


// arguments used as array
// function sum(num,value,...args)
// {
//     console.log(args);
// }

// sum(1,2,3,4,5);



// function sum(num,value,...args,values)
// {
//     console.log(args);
// }

// sum(1,2,3,4,5);


// Default parameters
// function interest(p,r,y)
// {
//     return p*r*y/100;
// }

// console.log(interest(1000,3,4));

// function interest(p,r,y)
// {
//     return p*r*y/100;
// }

// console.log(interest());



// function interest(p,r=10,y=10)
// {
//     return p*r*y/100;
// }

// console.log(interest(1000,2));



// function interest(p,r=10,y=10)
// {
//     return p*r*y/100;
// }
// console.log(interest(1000,undefined,2));



//object
// let person=
// {
//     fName:'Saumya',
//     lName:'Sinha'
// };

// console.log(person);

// // showing only read only properties of getter
// function fullName()
// {
//     return `${person.fName} ${person.lName}`;
// }

// console.log(fullName());


// getter and setter
// let person=
// {
//     fName:'Saumya',
//     lName:'Sinha',
//     get fullName()
//     {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//     if(typeof value !== String)
//     {
//         throw new Error("You have not sent string");
//     }
    
//         let parts=value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person.fullName);

// setting our own fullname
// person.fullName='Harsh Raj';
// console.log(person.fullName);

// person.fullName=1;
// console.log(person.fullName);

// person.fullName=true;
// console.log(person.fullName);

// person.fullName= undefined;
// console.log(person.fullName);


// // // error handling
// try
// {
//     person.fullName='Saumya Sinha';
// }
// try
// {
//     //  calling setter
//     person.fullName= true;
// }
// catch(e)
// {
//     alert(e);
//         // alert('You have entered number in fullName');
// }

// console.log(person.fullName);

// Scope
// {
//     let a=2;
// }
// console.log(a);


// {
//     var a=2;
// }
// console.log(a);


// function walk()
// {
//     var a=2;
// }

// console.log(a);

// if(true)
// {
//     let b=10;

// }
// console.log(b);



// if(true)
// {
//     var b=10;

// }
// console.log(b);



// for(let i=0;i<10;i++)
// {

// }
// console.log(i);



// for(var i=0;i<10;i++)
// {

// }
// console.log(i);




// function a()
// {
//     const ab=5;
// }

// function b()
// {
//     const ab=5;
// }



// const a=4;
// function xyz()
// {
//     const a=5;
// }


// function a()
// {
//     const a=6;
// }
// const c=10;
// function b()
// {
//     const a=6;
// }



// let arr=[1,2,3,4];
// let total=0;
// // for-of loop - iterable
// for(let value of arr)
//     total=total+value;
// console.log(total);



// let arr=[1,2,3,4];
// let totalSum=arr.reduce((accumulator, currentValue)=> accumulator + 
// currentValue);

// console.log(totalSum);


// let arr=[1,2,3,4];
// let totalSum=arr.reduce((accumulator, currentValue)=> accumulator + 
// currentValue,0);

// console.log(totalSum);


let arr=[-1,-2,-3,-4];
let totalSum=arr.reduce((accumulator, currentValue)=> accumulator + 
currentValue,0);

console.log(totalSum);




