// function difference(a, b) {
//     return Math.abs(a - b);
//   }
  
//   console.log(difference(3, 5));
//   console.log(difference(5, 3));
//   console.log(difference(1.23456, 7.89012));

// string as primitive
  // let lastName=' Sinha ';
//   string as object
  // let firsttName=new String('Saumya');

// let lastName=' Sinha ';
// // by including '.' operator after string as primitive
// // we can convert string as primitive as string as object

// let message='This is my first code';

// let words=message.split(' ');

// console.log(words);


// let message='This is \n my first \n code';
// console.log(message);

// let message='This is \n "my first" \n code';
// console.log(message);

// let message="This is \ 'my first' code";
// console.log(message);


// template literal example 1
// let message= 
// `My 
// name 
// is 
// Saumya`;

// console.log(message);


// template literal example 2
// let message= 
// `My 
// 'name'
// is 
// Saumya `;

// console.log(message);


// template literal example 3
// let message= 
// `My 
// name
// is 
// "Saumya" `;

// console.log(message);


// template literal example 4
// let lastName='Sinha';
// let message= 
// `My  ${lastName},
// name
// is 
// "Saumya" `;

// console.log(message);

// date
// let date= new Date();
// console.log(date);

// let date= new Date('October 20 2025 09:15');
// console.log(date);

// year, month date, day
// ,month indexing starts from 0
// let date= new Date(2001, 11, 17, 5);
// console.log(date);

// let date= new Date(2001, 11, 17, 5);
// date.setFullYear(1999);
// console.log(date);


// Arrays

// let numbers=[2,4,6,3];
// console.log(numbers);

// end->  push
// beggining-> unshift
// middle->  splice

// Searching in array
// console.log(numbers);
// console.log(numbers.indexOf(9));


// let numbers=[2,4,6,3];
// console.log(numbers);
// // we want to check if item.number exist in array or not
// if(numbers.indexOf(3) != -1)
//   console.log("present");


// let numbers=[2,4,6,3];
// console.log(numbers);
// // we want to check if item.number exist in array or not
// if(numbers.indexOf(7) != -1)
//   console.log("present");
// else
//   console.log("absent");


// let numbers=[2,4,6,3];
// console.log(numbers);
// console.log(numbers.includes(4));

// if(numbers.indexOf(4) !=-1)
//   console.log("present");
// console.log(numbers.includes(7));

// Searching using index
// let numbers=[2,4,6,3];
// console.log(numbers);
// console.log(numbers.indexOf(3,2));


// let courses= [
//   {no:1, naam:'Saumya'},
//   {no:2, naam:'Sinha'}
// ];

// console.log(courses);
// console.log(courses.indexOf({no:1, naam:'Saumya'}));


// let courses= [
//   {no:1, naam:'Saumya'},
//   {no:2, naam:'Sinha'}
// ];

// console.log(courses);
// // console.log(courses.includes({no:1, naam:'Saumya'}));

// // callback function
// let course=courses.find(function(course){
//   return course.naam == 'Saumya';
// }
// )

// console.log(course);


// let courses= [
//   {no:1, naam:'Saumya'},
//   {no:2, naam:'Sinha'}
// ];

// // callback function
// let course=courses.find(function(course){
//   return course.naam == 'Harsh';
// }
// )

// console.log(course);

// let courses= [
//   {no:1, naam:'Saumya'},
//   {no:2, naam:'Sinha'}
// ];

// Arrow function
// // let course=courses.find(course =>{
// //   return course.naam == 'Saumya';
// // }
// // )
// let course=courses.find(course => course.naam == 'Saumya');

// console.log(course);


// Removing element in array
// let numbers = [1,2,3,4,5,6,7];
// // removing from end
// numbers.pop();
// console.log(numbers);

// let numbers = [1,2,3,4,5,6,7];
// // removing from beginning
// numbers.shift();
// console.log(numbers);


// let numbers = [1,2,3,4,5,6,7];
// removing from beginning
// spalice(indexof of element to be removed, 
// number of to be removed after index mentioned)

// numbers.splice(3,1);
// console.log(numbers);


// empting an array
// let numbers= [1,2,3,4,5,6];

// numbers=[];

// console.log(numbers);


// let numbers= [1,2,3,4,5,6];
// let numbers2= numbers;
// numbers=[];

// console.log(numbers);
// console.log(numbers2);


// let numbers= [1,2,3,4,5,6];
// let numbers2= numbers;
// // numbers=[];
// numbers.length=0;

// console.log(numbers);
// console.log(numbers2);

// let numbers= [1,2,3,4,5,6];
// let numbers2= numbers;
// // numbers=[];
// // numbers.length=0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);


// let numbers= [1,2,3,4,5,6];
// let numbers2= numbers;
// // numbers=[];
// // numbers.length=0;
// // numbers.splice(0,numbers.length);
// while(numbers.length>0)
// {
//   numbers.pop();
// }

// console.log(numbers);
// console.log(numbers2);


// combining arrays
// let first= [1,2,3];
// let second= [4,5,6];

// let combined= first.concat(second);
// console.log(combined);

// slice array elemnts
// let marks= [10,20,30,40,50,60,70,80];
// first parameter is included and last parameter is excluded
// let sliced= marks.slice(2,6);
// after mentioned parameter, everything will be printed
// let sliced= marks.slice(2);
// all elements will be printed
// let sliced= marks.slice();
// console.log(sliced);
// console.log(marks);


// spread operator
// let first= [1,2,3];
// let second= [4,5,6];

// let combined=[...first, ...second];
// console.log(combined);


// let first= [1,2,3];
// let second= [4,5,6];

// let combined=[...first,'a', ...second, 'Saumya',true, false];
// console.log(combined);


// how to create copy
// let first= [1,2,3];
// let second= [4,5,6];

// let combined=[...first,'a', ...second, 'Saumya',true, false];
// console.log(combined);

// // copy
// let another =[...combined];
// console.log(another);


// iteration in array
// let arr=[10,20,30,40,50];

// for-of loop
// for(let value of arr)
// {
//   console.log(value);
// }

// for-each loop
// arr.forEach(function(number){
//   console.log(number);
// });

// arrow function
// arr.forEach(number=>console.log(number));

// joining elements in array using join function()
// let numbers= [10,20,30,40,50];
// const joined= numbers.join('-');

// console.log(joined);


// // splitting in array
// let message='I have got a message';
// let parts= message.split(' ');
// console.log(parts);

// // join
// let joined= parts.join('+');
// console.log(joined);


// // sorting in array
// let numbers= [40,30,50,70,80];
// numbers.sort();
// console.log(numbers);

// // reverse
// let reversenum=numbers.reverse();
// console.log(reversenum);


// sorting in array
// let numbers= [40,3,50,7,80];
// numbers.sort();
// console.log(numbers);

// // reverse
// let reversenum=numbers.reverse();
// console.log(reversenum);


// filtering in array
// let numbers= [1,2,-3,-5];
// let filtered= numbers.filter(function(value)
// {
//   return value >= 0;
// });

// console.log(filtered);

// let numbers= [1,2,-3,-5];
// let filtered= numbers.filter(function(value)
// {
//   return value < 0;
// });

// console.log(filtered);


// let numbers= [1,2,-3,-5];
// let filtered= numbers.filter(function(value)
// {
//   return value === 0;
// });

// console.log(filtered);


// let numbers= [1,2,-3,-5];
// // arrow function
// let filtered= numbers.filter(value=>value === 0);

// console.log(filtered);


// mapping
// let numbers=[3,5,7,9];

// let items=numbers.map(function(value)
// {
//   return 'student_no' +value;
// })

// console.log(items);


// let numbers=[3,5,7,9];

// let items=numbers.map(value=>'student_no' +value);

// console.log(items);


// mapping objects
// let numbers= [1,2,-5,-8];
// let filtered= numbers.filter(value => value >0);

// let items= filtered.map(function(num)
// {
//   return{value: num};
// })

// console.log(items);


// let numbers= [1,2,-5,-8];
// let filtered= numbers.filter(value => value >=0);

// // arrow function
// let items= filtered.map(num => {value: num});

// console.log(items);


// chaining
let numbers= [1,2,-5,-8];

let items= numbers
           .filter(value => value >=0)
           .map(num => {value:num});

console.log(items);