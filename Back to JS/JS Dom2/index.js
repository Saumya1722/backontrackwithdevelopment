// document.addEventListener('click',function()
// {
//     console.log('Clicked');
// });


// function eventFunction()
// {
//     console.log('Clicked');
// }
// document.addEventListener('click',eventFunction);



// function eventFunction()
// {
//     console.log('Clicked');
// }
// document.addEventListener('click',eventFunction);
// document.removeEventListener('click',eventFunction);


// document.addEventListener('click',function ()
//  {
//     console.log('Clicked');
//  });
// document.removeEventListener('click',function ()
//  {
//     console.log('Clicked');
//  });


// const content= document.querySelector('#wrapper');

// content.addEventListener('click',function(event)
// {
//     console.log(event);
// })
// content.addEventListener('click',function(saumya)
// {
//     console.log(saumya);
// })


// let links=document.querySelectorAll('a');
// let thirdLink=links[2];

// thirdLink.addEventListener('click', function(event)
// {
//     event.preventDefault();
//     console.log('I am wonderful');
// });


// let myDiv= document.createElement('div');

// for(let i=1;i<=100;i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     newElement.addEventListener('click', function(event)
// {
//     console.log('I have clicked on para');
// });
// myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);




// let myDiv= document.createElement('div');

//   function paraStatus(event)  
// {
//     console.log('I have clicked on para');
// }
// for(let i=1;i<=100;i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;
// newElement.addEventListener('click',paraStatus); 

// myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);




// let myDiv= document.createElement('div');

//   function paraStatus(event)  
// {
//     console.log('I have clicked on para');
// }
// myDiv.addEventListener('click',paraStatus); 


// for(let i=1;i<=100;i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;


// myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);




// let myDiv= document.createElement('div');

//   function paraStatus(event)  
// {
//     console.log('Para'+ event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus); 


// for(let i=1;i<=100;i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;


// myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);



// let element= document.querySelector('#wrapper2');

//     element.addEventListener('click',function(event)
// {
//     console.log('I clicked on span'+event.target.textContent);
// });



let element= document.querySelector('#wrapper2');

    element.addEventListener('click',function(event)
{
    if(event.target.nodeName ==='SPAN')
    {
console.log('I clicked on span'+event.target.textContent);
    }
    
});