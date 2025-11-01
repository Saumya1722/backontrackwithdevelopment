// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is Para' +i;
//     document.body.appendChild(newElement);
// }

//change a bit
// let myDiv=document.createElement('div');

// for(let i=1;i<=100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent='This is para' +i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);



//checking time taken by code to run
// const t1=performance.now();
// for(let i=1;i<=100;i++)
//     {
//         let newElement=document.createElement('p');
//         newElement.textContent='This is Para' +i;
//         document.body.appendChild(newElement);
//     }
// const t2=performance.now();
// console.log("this took"+ (t1-t2) + " ms");



//checking time taken by code when code is changed/
// optimized
// const t3=performance.now();
// let myDiv=document.createElement('div');

// for(let i=1;i<=100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent='This is para' +i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log("this took"+ (t3-t4) + " ms");




//using fragment
// let fragment= document.createDocumentFragment();
// for(let i=1;i<=100;i++)
//         {
//             let newElement=document.createElement('p');
//             newElement.textContent='This is Para' +i;
//             fragment.appendChild(newElement);
//         }
//         // 1 reflow    1 repaint
//         document.body.appendChild(fragment);


// function declaration
// function addPara(){
//     let para=document.createElement('p');
//     para.textContent='JS is single';
//     document.body.appendChild(para);
// }
// // function declaration
// function appendNewMessage()
// {
//     let para= document.createElement('p');
//     para.textContent='JS is savage';
//     document.body.appendChild(para);
// }

// // function call
// addPara();
// appendNewMessage();



