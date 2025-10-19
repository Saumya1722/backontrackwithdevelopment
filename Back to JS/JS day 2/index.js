// console.log('We are doing Day 2 of JS');

// object create
// let rectangle=
// {
//     length:1,
//     breadth:2,

//     // method of object
//     draw:function()
//     {
//         console.log('drawing rectangle');
//     }
// };

// factory function
// function createFactoryFunction()
// {
//     let rectangle=
//     {
//         length:1,
//         breadth:2,

//         draw()
//         {
//             console.log('Factory Function');
//         }
//     };
//     return rectangle;
// }

// function createFactoryFunction()
// {
//     return rectangle=
//     {
//         length:1,
//         breadth:2,

//         draw()
//         {
//             console.log('Factory Function');
//         }
//     };
  
// }

// function which is called and object returned by function is stored in object1 variable

// let object1=createFactoryFunction();

// function createFactoryFunction(len,bre)
// {
//     return rectangle=
//     {
//         length:len,
//         breadth:bre,

//         draw()
//         {
//             console.log('Factory Function');
//         }
//     };
// }

// // Function call 1
// let object1=createFactoryFunction(4,6);


// function createFactoryFunction(len,bre)
// {
//     return rectangle=
//     {
//         len,
//         bre,

//         draw()
//         {
//             console.log('Factory Function');
//         }
//     };
// }


// Function Call 2
// let object2=createFactoryFunction(5,6);
// // Function Call 3
// let object3=createFactoryFunction(9,6);

// constructor function
function Constructor()
{
    // initialize length
    this.length=2;
    // initialize breadth
    this.breadth=4;
    // define function
    this.draw=function()
    {
        console.log('drawing');
    }
}

// object creation using constructor function
let rectangleObj= new Constructor();

// adding properties to object
// rectangleObj.color='yellow';
// console.log(rectangleObj);

// deleting properties from object
// delete rectangleObj.color;
// console.log(rectangleObj);

// let Rectangle1=new Function(
//     'length','breadth',
//      // initialize length
//     `this.length=length;
//      // initialize breadth
//      this.breadth=breadth;
//      // define function
//      this.draw=function()
//      {
//          console.log('drawing');
//      }`
// );

// let rect=new Rectangle1(2,3);


// rect.length;

// console.log(rect);

// Primitives types of JS
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// Reference Types of JS
// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// primitive types
// let a=10;
// function inc(a)
// {
//     a++;
// }
// inc(a);
// console.log(a);


// refrence types
// let a={value:10};

// function inc(a)
// {
//     a.value++;
// }

// inc(a);

// console.log(a.value);



// let rectangle={
//     length:2,
//     breadth:4
// };
// // for-in loop
// for(let key in rectangle)
// {
      
//     // keys are reflected through key variable
//     // console.log(key,rectangle[length]);

//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }



// let rectangle={
//     length:2,
//     breadth:4
// };

// for-of loop
// for(let key of rectangle)
// {
//     console.log(key);
// }

// for(let key of Object.keys(rectangle))
// {
//     console.log(key);
// }
// for(let key of Object.entries(rectangle))
// {
//     console.log(key);
// }

// present
// let rectangle={
//     length:2,
//     breadth:4
// };

// if('breadth' in rectangle)
// {
//     console.log('Present');
// }
// else
// {
//     console.log('Absent');
// }


// absent
// let rectangle={
//     length:2,
//     breadth:4
// };

// if('color' in rectangle)
// {
//     console.log('Present');
// }
// else
// {
//     console.log('Absent');
// }

// Cloning
// let src={
//     a:11,
//     b:12,
//     c:13
// };

// let dest={};

// for(let key in src)
// {
//     dest[key]=src[key];
// }

// console.log(dest);

// //  to check that we actually cloned by incrementing src object key values

// src.a++;
// console.log(dest);



// object- cloning method 2
// let src={
//     a:10,
//     b:12,
//     c:14
// };

// // // We can copy multiple src and multiple objects in one object
// let src2={value:25};

// let dest=Object.assign({},src,src2);

// console.log(dest);

// // //  to check that we actually cloned by incrementing src object key values

// src.a++;
// console.log(dest);


// Object Cloning method 3
let src={
    a:22,
    b:33,
    c:66
};

let dest={...src};

console.log(dest);

src.a++;

console.log(dest);