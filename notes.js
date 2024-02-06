//todo _____ What are functions in js and tell me its types ?

//? 1 Function Statement / function declaration
//classic way to create a function with function keyword

// function a(){
//   console.log("Function Statement / function declaration");
// }
// a()

//? 2 Function expression
//Store a anonymous function in a variable, and treate the variable as a function is a function expresstion way

// const a = function () {
//   console.log("function Expression");
// };
// a();

//? 3 Anonymous Function
//A function without a name is called anonymous function, but you can't use it bearly, it can be use in methods of object or as a function expression form.

// function(){

// }

//? 4 Named Function Expression
// create a function expresstion and store into a variable is form Named function experssion

// const named = function xyx(){

// }

// xyx() //guess the output

// const named = function xyx(){
// console.log(a,b);
// }

// named(1,2) //guess the output

// const named = function xyx() {
//   return xyx;
// };

// const result = named();
// console.log(result); //guess the output

//? 5 First Class Function

// In JavaScript, first-class functions refer to the concept that functions are treated as first-class citizens. This means that functions can be:

//* 1 store in a variable or assign into variable

// const greet = function(name) {
//   console.log(`Hello, ${name}!`);
// };

// */ 2 Passed as arguments to other functions:

// function executeFunction(func) {
//   func();
// }

// executeFunction(greet);

//* 3 Returned from other functions:

// function createGreetingFunction() {
//   return function(name) {
//       console.log(`Hello, ${name}!`);
//   };
// }

// const greetFunction = createGreetingFunction();
// greetFunction('John');


//* 4 Stored in data structures:

// const functionsArray = [greet, someOtherFunction, anotherFunction];


//? 6 Arrow Function
//they have arrow in their syntax

// const arrow = ()=>{
//   console.log("Hello Thier i am a fate arrow function");
// }

// arrow()

//? 7 Higher Order Function

// // Higher-order function: Takes a function as an argument
// function operateOnNumbers(a, b, operation) {
//   return operation(a, b);
// }

// // Functions to pass as arguments
// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// // Using the higher-order function with different operations
// const resultAddition = operateOnNumbers(3, 4, add);
// console.log(resultAddition);  // Output: 7

// const resultMultiplication = operateOnNumbers(3, 4, multiply);
// console.log(resultMultiplication);  // Output: 12


//todo <-------------    JS Operators   ----------------->

//todo => Arithmetic Operators

//? Q: How can you find power of any Integer

// let resultA = Math.pow(2, 3);
// console.log(resultA);

//? Q: find square root of 25 ?

// let resultBx = Math.sqrt(25);
// console.log(resultBx);

//? Q: Guess the out put?

// let x = 5;
// let y = 10;
// let resultAx = x > 0 && (y = 20);
// console.log(resultAx); // Output: true, y remains 10 (short-circuit prevents assignment)

//? Q: Guess the out put?

// let num = 15;
// let isBetween = num >= 10 && num <= 20;
// console.log(isBetween);

//? Q: Guess the out put?

// const resutl = 5 + 3 * 2 / (4 - 1) + 5 + ((3 * 2) / (4 - 1))
// console.log(resutl);

//? Q: Guess the out put?

// let remainder = 17 % 3;
// console.log(remainder);

//? Q: Guess the out put?

// let resultB = 2 ** 3;
// console.log(resultB);

//todo => Comparison Operators

//? Q: Guess the out put?

// console.log("5" == 5); // Output: false
// console.log(5 !== "5"); // Output: true

//? Q: Guess the out put?

// let x = 10;
// let y = "10";
// console.log(x !== y); // Output: false

//? Q: Guess the out put?

// console.log(!(3 > 5)); // Output: true

//? Q: Guess the out put?

// console.log(true && false); // Output: false

//? Q: Guess the out put?

// let a = 5;
// let b = "5";
// console.log(a == b); // Output: true

//? Q: Guess the out put?

// console.log(NaN === NaN); // Output: false
// console.log(NaN == NaN); // Output: false

//? Q: Guess the out put?

// console.log(null === undefined); // Output: false
// console.log(undefined == null); // Output: true

//? Q: Guess the out put?

// let value = "Not a Number";
// console.log(isNaN(value));          // Output: true
// console.log(Number.isNaN(value));   // Output: false

//todo => Logical Operators

//? Q: Guess the out put?

// let x = 5;
// let y = 10;
// let resultAND = x > 0 && y > 0;
// console.log(resultAND);

//? Q: Guess the out put?

// let num = 15;
// let isBetween = num > 10 && num < 20;
// console.log(isBetween);

//? Q: Guess the out put?

// let a = 8;
// let b = 7;
// let resultOR = a > 5 || b < 10;
// console.log(resultOR);

//? Q: Guess the out put?

// let value = "Hello";
// let isStringOrNumber = typeof value === "string" || typeof value === "number";
// console.log(isStringOrNumber);

//? Q: Guess the out put?

// let numberx = 5;
// let notEqualZero = !(numberx === 0);
// console.log(notEqualZero);

//? Q: Guess the out put?

// let falsyValue = null;
// let isNotFalsy = !!falsyValue;
// console.log(isNotFalsy);

// //short-circuit
//? Q: Guess the out put?

// let x = 5;
// let y = 10;
// let resultAND = x > 0 && (y = 20);
// console.log(resultAND); // Output: true, y remains 10 (short-circuit prevents assignment)
// console.log(y); // Output: 10 (y is not assigned 20)

//? Q: Guess the out put?

// let x = 5;
// let y = 10;
// let resultAND = (y = 20) && x > 0 ;
// console.log(resultAND);

//? Q: Guess the out put?

// let a = true;
// let b = false;
// let resultOR = a || (b = true);
// console.log(resultOR); // Output: true, b remains false (short-circuit prevents assignment)
// console.log(b); // Output: false (b is not assigned true)

//? Q: Guess the out put?

// let a = true;
// let resultOR = a || (b = true);
// console.log(resultOR);
// console.log(b);

//? Q: Guess the out put?

// function greet(name) {
//   name = name || "Guest";
//   console.log("Hello, " + name + "!");
// }

// greet();         // Output: Hello, Guest!
// greet("Alice");  // Output: Hello, Alice!

//todo => Assignment Operators

//? Q: Guess the out put?

// let x = 5;
// let y = "Hello";
// let z = true;

//? Q: Guess the out put?

// let a = 10;
// a += 5; // Equivalent to a = a + 5;
// console.log(a);

//? Q: Guess the out put?

// let b = 20;
// b -= 8; // Equivalent to b = b - 8;
// console.log(b);

//? Q: Guess the out put?

// let c = 3;
// c *= 4; // Equivalent to c = c * 4;
// console.log(c);

//? Q: Guess the out put?

// let d = 24;
// d /= 3; // Equivalent to d = d / 3;
// console.log(d);
//? Q: Guess the out put?

// let e = 17;
// e %= 5; // Equivalent to e = e % 5;
// console.log(e);

//? Q: Guess the out put?

// let f = 2;
// f **= 3; // Equivalent to f = f ** 3;
// console.log(f);

//? Q: Guess the out put?

// let person = { name: "John", age: 30 };
// let { name, age } = person;
// console.log(name);
// console.log(age);

//? Q: Guess the out put?

// let numbers = [1, 2, 3];
// let [first, second, third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);

//? Q: Guess the out put?

// let numbers = [1, 2, 3];
// let [,first] = numbers;
// console.log(first);

//todo => Unary Operators

// let num = 5;
// let unaryPlus = +num;  // No change, the unary plus has no effect
// let unaryMinus = -num; // Changes the sign of num to -5
// console.log(unaryPlus);  // Output: 5
// console.log(unaryMinus); // Output: -5

// let x = 10;
// x++; // Increment: x becomes 11
// console.log(x); // Output: 11

// let y = 7;
// y--; // Decrement: y becomes 6
// console.log(y); // Output: 6

// let isTrue = true;
// let isFalse = !isTrue; // Logical NOT: Changes true to false
// console.log(isFalse);  // Output: false

// let a = 5; // Binary: 0101
// let bitwiseNotA = ~a; // Bitwise NOT: Inverts the bits, resulting in -6 (Binary: 1010)
// console.log(bitwiseNotA); // Output: -6

// let value = "Hello";
// let type = typeof value;
// console.log(type);

// let result = void 0; // Void Operator: Evaluates the expression and returns undefined
// console.log(result); // Output: undefined
// console.log("result");

// let person = { name: "John", age: 30 };
// delete person.age; // Delete Operator: Deletes the 'age' property
// console.log(person); // Output: { name: "John" }

//! <-------------------  I am again repeating the code step by step vedio  --------------------->

//todo ?- 1 <--- hard --->

// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);

//todo ?- 2  <--- hard --->

// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);

//todo ?- 3

// let a = [20];
// let b = ['20'];
// console.log(a[0]==b[0]);
// console.log(a[0]>=b[0]);

// console.log(a[0]===b[0]);

//todo ?- 4  <--- hard --->

// console.log(JSON.stringify([]) === JSON.stringify([])); // true

//todo ?- 5

// let z=[1,2,3,4]
// let a = {name:"adil"}
// console.log(...z);

//todo ?- 6  <--- hard --->

// console.log(typeof NaN);

//todo ?- 7

// let data = 10 - -10
// console.log(data);

//todo ?- 8
// const set2 = new Set([1,1,1,2,3,4])

// const set = new Set([1,1,1,2,3,4,'1','2'])
// console.log([...set]);

//todo ?- 9

// let data = {name:"adil"}
// console.log(delete data.name);

//todo ?- 10

// let data = {name:"adil"}
// console.log(delete data);

//todo ?- 11

// const data = ["peter","anil","sam"]
// const [y] = data

// console.log(y);

//todo ?- 12

// const data = ["peter","anil","sam"]
// const [,y] = data

// console.log(y);

//todo ?- 13

// const data = {names:"adil",age:25,skill:"Js"}
// const {names} = data
// console.log(names);

//todo ?- 14

// const data = {name:"Anil",age:25,skill:"Js"}
// const info = {city:"Gujranwala",mail:"adildev00@gmail.com"}
// const merge = {...data,...info}
// console.log(merge);

//todo ?- 14

// const obj = {
//   age:34,
//   age:90
// }
// console.log(obj);

//todo ?- 15

// const data = {name:"Anil",age:25,skill:"Js"}
// const info = {city:"Gujranwala",mail:"adildev00@gmail.com"}
// const merge = {data,...info}
// console.log(merge);

//todo ?- 16  <--- hard --->
// const obj = {
//     name:"adi",
//     name:"sdf"
// }
// console.log(obj);

// const data = {skill:"Js",name:"Anil",age:25}
// const info = {city:"Gujranwala",skill:"Node"}
// console.log({...data,...info});

//todo ?- 17

// const name = "Anil"
// console.log(name());

//todo ?- 18 <--- hard --->

// const result = false || {} || null

// const result = false || undefined || null

// const result = false || -77 || null

// console.log(result);

//todo ?- 19 <--- hard ---> mistake

// const result = false || 0 || null
// console.log(result);

//todo ?- 20

// const result = null || false || ""
// console.log(result);

//todo ?- 21

// const result = [] || 0 ||true
// console.log(result);

//todo ?- 22

// console.log(Promise.resolve(5));

//todo ?- 23

// console.log("❤"=="❤");
// console.log("❤"==="❤");

//todo ?- 24

// JSON.parse()
//this method use for
// A: Parses JSON to a JavaScript value
// B: Parses a JavaScript object to JSON
// C: Parses any JavaScript value to JSON
// D: Parses JSON to a JavaScript object only

//todo ?- 25

// let name = "Adil younas"

// function getName(){
//     console.log(name);
//     let name = "aqil"
// }

// getName()

//todo ?- 26

// let name = "adil";

// function getName() {
//   console.log(name);
// }
// getName();

//todo ?- 26

// console.log(0 == undefined);
// var a
// console.log(a == undefined);

//todo ?- 27

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Boolean);
// console.log(typeof "adil");
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof 30);

// todo ?- 28

// console.log(`${(x=> x)('I love')} to program` );

// (function () {
//   console.log("adil younas");
// })();

// todo ?- 29

//Answer should be 6
// function sumValues(x, y, z) {
//   return x + y + z;
// }
// A: sumValues([...1,2,3])
// B: sumValues([...[1,2,3]])
// C: sumValues(...[1,2,3])
// D: sumValues([1,2,3])

// todo ?- 30

// const names = "code"
// console.log(!typeof names==="object");
// console.log(!typeof names==="string");
// console.log(!typeof names===false);

// todo ?- 31

// const names = "subscribe"
// const age = 25
// console.log(isNaN(names));
// console.log(isNaN(age));

// todo ?- 32
//what can modify person object
// let person = {names:"adil"}
// Object.seal(person)
// person.age = 25
// console.log(person);

// todo ?- 33
// let data = [2,9,0,10]
//remove the first elemenet
// console.log(data);

// todo ?- 34
// let data = [2,9,0,10]
//remove the last elemenet
// console.log(data);

// todo ?- 35
//check any value is odd or even
// const a =10
// console.log(a%2===0?true:false);
// console.log(a%2);
// const date = new Date();
// const year = date.getFullYear();

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

// todo ?- 36
//!is this show error
// let data = {
//     names:"adil"
// }

// delete data
// console.log(data);

// todo ?- 37

// let data = {
//     names:"adil"
// }

// delete data.names
// console.log(data);

// todo ?- 38

// let data = "true"
//convert data to boolean false value
// console.log(data);

// todo ?- 39

// let data = "true"
//convert data to boolean truer value
// console.log(data);

// todo ?- 40 <---  very Important  --->

//difference between map and forEach function

// todo ?- 41 <---  hard  --->

// const data = [1, 2, 3];

// const result = data.forEach((ele) => {
//   return ele*4
// });
// console.log(result);

// todo ?- 42 <---  hard  --->

// const data = [1, 2, 3];
// const a = []

// data.forEach((ele) => {
//   a.push(ele)
// });
// console.log(result);

// todo ?- 43 <---  hard  --->

// let data = ["anil","peter","bruce"]
// delete data[1]
// console.log(data);

// let data = ["anil","peter","bruce"]
// delete data[1]
// data[1] = 1200
// console.log(data);

// todo ?- 44

// let data = ["anil","peter","bruce"]
// delete data[1]
// console.log(data.length);

// todo ?- 45

// let data2 = {
//     name:"adil",
//     age:25
// }

// delete data2.name
// console.log(data2);

// todo ?- 46

// let a = [1,2,3,4]
// let b = [4,5,6]
// let c = [...a,...b]
// console.log(c);

// todo ?- 47 <---  very hard ---> mistake

// let c = 3**3
// console.log(c);

// let c = 3^3
// console.log(c);

// let c = 3&3
// console.log(c);

// let c = 3|4
// console.log(c);

// todo ?- 48

// const a  = 2
// const c = Math.pow(a,3)
// console.log(c);

// todo ?- 49 <--- hard -->

// let a = 2
// setTimeout(() => {
//     console.log(a);
// }, 0);
// a=100

// todo ?- 50

// let a = 20
// let A = 30
// console.log(A);
// console.log(a);

// todo ?- 51

// let A10 = "like"
// console.log(A10);

// todo ?- 52

// let 10A = "like"
// console.log(10A);

// todo ?- 53

// let a = "like"
// let b = `like`

// console.log(a===b);

// todo ?- 54

// let a = "like"
// let b = `like`
// let c = 'like'

// console.log(a===b&&b===c);

// todo ?- 55  <--  very hard --> mistake

// let a = 1
// let c = 20
// console.log(a- ++c);
// console.log(a - - c);
// console.log(--c===a);

// todo ?- 56

// let a  =1
// let b =1
// let c = 2
// console.log(a===b===--c);

// todo ?- 57

// console.log(3*3);
// console.log(3**3);
// console.log(3***3);

// todo ?- 58

// console.log(a);
// var a = 10

// todo ?- 59

// console.log(b);

// todo ?- 60

// console.log([[[[]]]]);

// todo ?- 61

// let for = 10
// console.log(for);

// todo ?- 62

// function fruit() {
//   console.log(names);
//   console.log(price);

//   var names = "apple";
//   let price = 20;
// }

// fruit();

// todo ?- 63

// let price = 200;

// function fruit() {
//   console.log(names);
//   console.log(price);

//   var names = "apple";
//   let price = 20;
// }

// fruit();

// todo ?- 64
// let o = undefined
// for (var i = 0; i < 3; i++) {
//     o=i
// }
// setTimeout(() => {
//   console.log(o);
//   console.log(i);
// }, 0);

// todo ?- 65
//what is setTimeOut default dependency value

// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//   console.log("a");
//   console.log("a");
// });

// console.log(4);

// setTimeout(() => {
//   console.log("a");
// });
// console.log(5);

// todo ?- 66
//guess alll the outputs

// let x, y;
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//   console.log(x);
//   console.log(y);
// });

// console.log(4);

// setTimeout(() => {
//   let a = 10;
//   let b = 20;
//   x = a;
//   y = b;
// });

// setTimeout(() => {
//   console.log(x);
//   console.log(y);
// });
// console.log(5);

// todo ?- 67

// console.log(i);
// for(var i=0; i<3; i++){

// }
// console.log(i);

// todo ?- 68

// console.log(i);
// for(let i=0; i<3; i++){

// }
// console.log(i);

// todo ?- 69

// let i
// if (i=10) {

// }
// console.log(i);

// todo ?- 70

// let i
// if (let i=10) {

// }
// console.log(i);

// todo ?- 80 <-- hard --> mistake

// console.log(+true); hard
// console.log(typeof +true);
// console.log(typeof +null);
// console.log(typeof +undefined);
// console.log(typeof +Object);
// console.log(typeof +Array);
// console.log(typeof +"10");

// function fun(){

// }
// console.log(typeof +fun);

// function fun(){

// }
// console.log(typeof fun);

// todo ?- 81

// console.log(!"anil");
// console.log(typeof "anil");

// ! ?- 82 <-- to hard --> mistak

// let data = "size"
// const bird = {
//     size:"small",
//     age:25
// }

// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// todo ?- 83

// let c = {name:"peter"}
// let d;

// d=c
// c.name = "anil"
// console.log(d.name);

// todo ?- 84

// var x
// var x = 10
// console.log(x);

// todo ?- 85 <--- hard ---> mistake

// let a = 3
// let b = new Number(3)

// console.log(a==b);
// console.log(a===b);
// console.log(typeof b);

// todo ?- 86

// let names

// nmae = {}
// console.log(names);

// todo ?- 87

// function fruit(){
// console.log("woof!");
// }

// fruit.xyz = "apple"
// console.log(fruit.xyz);

// todo ?- 88

// function sum(a,b){
// return a + b
// }

// console.log(sum(1,"2"));
// console.log(typeof sum(1,"2"));

// ! ?- 89  <--- hard --> mistake

// let numbers = 0
// console.log(numbers++);
// console.log(++numbers);
// console.log(numbers);

// todo ?- 90

// function getAge(args){
//     console.log(typeof args);
//     console.log(...args);
// }

// getAge(21,22)

// todo ?- 91

// function getAge(s,...args){
//     console.log(typeof args);
//     console.log(args);
// }

// getAge(21,22,23)

// todo ?- 92

// function getAge(){
//     "use strict"
//     age = 21
//     console.log(age);
// }

// getAge()

// todo ?- 93

// const sum = eval("10*10+5")
// console.log(sum);

// todo ?- 94

//? how long is Secret accessible last
// sessionStorage.setItem("Secret",120)

// todo ?- 95  <--- hard -->  mistage

//is it is valid or not if yes then guess the output

// const obj = {
//   1:"a",
//   2:"b",
//   3:"c",
//   age:25
// }

// console.log(obj);
// console.log(obj[1]);
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

// todo ?- 95  <--- hard -->  mistage

// const obj = {
//   "adil":20
// }

// console.log(obj.adil);
// todo ?- 96

// const obj = {a:"one",b:"two",a:"repeat"}
// console.log(obj);

// todo ?- 97  <--- hard -->

// for(let i=1; i<5;i++){
//   if (i===3) continue

//   console.log(i);
// }

// todo ?- 98

// const bar = ()=> setTimeout(() => {
//   console.log("second")
// });
// const baz = ()=> console.log("third");
// const foo = ()=> console.log("First");

// bar()
// baz()
// foo()

// todo ?- 99
//what is the answer
{
  /* <div onclick="console.log('first div')">
<div onclick="console.log('second div')">
  <button onclick="console.log('button')"> 
    Click
  </button>
</div>
</div> */
}

// todo ?- 100  <-- hard -->  mistake

// const person = {names:"adil"}

// function sayHi(age){
//  return `${this.names} is ${age}`
// }

// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21));

// todo ?- 101  <-- hard --> mistake

// const person = {names:"adil"}

// function sayHi(age){
//  return `${this.names} is ${age}`
// }

// console.log(sayHi.call(person,21));
// const result = sayHi.bind(person,21)

// console.log(result);
// console.log(result());

// todo ?- 102

// function sayHi(){
//   return (()=>0)()
// }

// console.log(typeof sayHi());

// todo ?- 103

// function sayHi(){
//   return ()=>0;
// }

// console.log(typeof sayHi());
// console.log(typeof sayHi()());

// todo ?- 104 <--- hard -->

// console.log(typeof typeof 1);
//first typeof 1 = "number"
//second time typeof "number"

// todo ?- 105

// const numbers = [1,2,3]
// numbers[6] = 11
// console.log(numbers);

// ! ?- 106 <-- hard --> mistake tricky

// const numbers = [1,2,3]

// numbers[9] = numbers
// console.log(numbers);
// console.log(numbers.length);

// todo ?- 107 <-- hard -->

// const numbers = [1,2,3]
// const number = [1,2,3]

// numbers[9] = number
// console.log(numbers);
// console.log(numbers.length);

// todo ?- 108 <-- hard -->

// Everything in JavaScript is either a ....

// A: Primitive or Object
// B: function or object
// C: trick question only objects
// D: number or object

//! ?- 109 <--- hard one -->

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

//! ?- 110 <--- hard one -->

// console.log(setInterval(() => {
//   console.log("hi");
// }, 1000));

// console.log(setInterval(() => {
//   console.log("hi");
// }, 1000));

// console.log(setInterval(() => {
//   console.log("hi");
// }, 1000));

//todo ?- 111

// console.log(..."anil");
// console.log([..."anil"]);

//! ?- 112  <-- hard -->

//todo */ setTimeout(() => res("two"), 100);

// const firstPromise = new Promise((res) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

//! ?- 113  damn question <-- hard -->

// let person = {name:"Peter"}
// const members = [person]
// person = null
// console.log(members);

//** and

// let person = {name:"Peter"}
// const members = person
// person = null
// console.log(members);
// console.log(person);

//** and

// let person = {name:"Peter"}
// const members = person
// person.name= "ending"
// console.log(members);

//todo ?- 114

// const person = {
//   namex:"batman",
//   age:21
// }

// for(const item in person){
// console.log(item);
// }

//todo ?- 115

// let data = 3 + 4 + "5"
// console.log(typeof data);

//todo ?- 116 <-- hard -->

// console.log(typeof 3 + 4 + "5");

//todo ?- 117 <-- hard -->

// console.log(typeof (3 + 4 + +"5"));

//todo ?- 118

// console.log([]==[]);
// console.log([]===[]);

//! ?- 119 <-- hard --> mistake

// let data = [1,2,3].map((num)=>{
//   if (typeof num ==="number") return
//   return num * 2
// })

// console.log(data);

//both are not same

// let data = [1,2,3].map((num)=>{
//   if (typeof num ==="number") {
//     return
//   }else{
//     return num * 2
//   }
// })

// console.log(data);

//? trick is like as continue as reutun prevent the next line exicution

//todo ?- 120

// function getInfo(member) {
//   member.name = "Anil";
// }

// const person = { name: "Sarah" };
// getInfo(person);
// console.log(person);

//! ?- 122 damn question <--hard ->

// function Car(){
//   this.make = "toyota"
//   return {make:"Farari"}
// }

// const myCar = new Car()
// console.log(myCar.make);

// function Car() {
//   this.make = "toyota";
// }

// const myCar = new Car();
// console.log(myCar.make);

//todo ?- 123  <--- hard --> mistake

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);

// (() => {
//   let x = (y = 10);
//   console.log(x);
// })();

// console.log(typeof x);

//todo ?- 124 <-- hard --> mistake

// (() => {
//   let x = y = 10
//   console.log(x);
// })();

// console.log(typeof y);
// console.log(typeof window.y);

//todo ?- 125

// (() => {
//   let x = 10;
// })();

// (() => {
//   let x = 10;
// })();

// console.log(typeof x);

//todo ?- 126

// (() => {
//   let x = (y = 10);
// })();

// (() => {
//   let x = (y = 20);
// })();

// console.log(y);

//todo ?- 127

// let x = 100;

// (() => {
//   var x = 20;
// })();

// console.log(x);

//todo ?- 128

// console.log(!true - true);

//todo ?- 129 <-- hard --> mistak

// console.log(true + +"10");

//todo ?- 130 <-- hard --> mistak

// age = 100
// console.log(age);
// let age = 200

//todo ?- 130 <-- hard --> mistak

// myFun();

// var myFun = function () {
//   console.log("First");
// };
// myFun();

// function myFun() {
//   console.log("Second");
// }

// myFun();

//todo ?- 130 <-- hard --> mistak

// console.log(typeof true);
// console.log(typeof !"adil");
// console.log(typeof Boolean);
// console.log(typeof false);

//todo ?- 131 <-- hard --> mistak

// let a = y = "adil"
// function getca(){
//   console.log(y);
// }

// getca()

//todo ?- 132 <-- hard --> mistak

// var a = 10
// var a = 10
// console.log(a);

//todo ?- 133

// let x = y = 10

// console.log(x);
// console.log(y);
// alert(x)

//todo ?- 134

// console.log(y=10);

//todo ?- 135

// (() => {
//    x = 20;
// })();

// console.log(x);

//todo ?- 136

//what is temportal dead zone

// console.log(age);
// let age = 10

//todo ?- 137  <-- hard --> mistak

// var variable = 10;
// (() => {
//   console.log(variable); //30
//   variable = 20;
//   console.log(variable);
// })();

// console.log(variable);
// var variable = 30;

//todo ?- 138

// foo = 30
// console.log("FOO",foo);

// var foo = 100
// console.log("FOO",foo);

//todo ?- 139  <-- hard --> mistak

// variable = 10;

// (() => {
//   foo = 100;
//   console.log(variable);
//   var foo = 100;
//   variable = 20;
//   console.log(variable);
// })();

// console.log(foo);
// console.log(variable);
// var variable = 30;

//! ?- 140  <-- hard --> mistak

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

//! ?- 141  <-- hard --> mistak

// var fullname = "Piyush Garg";

// var obj = {
//   fullname: "Hacked full name",
//   prop: {
//     fullname: "Inside prop",
//     getFullname: function () {
//       return this.fullname;
//     },
//   },
//   getFullname: function () {
//     return this.fullname;
//   },

//   getFullnameV2: () => {
//     return this.fullname;
//   },
//   getFullnameV3: (function () {
//     return this.fullname;
//   })(),
//   getFullnameV4: (() => {
//     return this.fullname;
//   })(),
// };

// console.log(obj.prop.getFullname());
// console.log(obj.getFullname());
// console.log(obj.getFullnameV2());
// console.log(obj.getFullnameV3());
// console.log(obj.getFullnameV4());

//! ?- 142  <-- hard --> mistak

// var fullname = "Piyush Garg";

// var obj = {
//   getFullname: function () {
//     return this.fullname;
//   }
// };

// console.log(obj.getFullname());

//todo ?- 143

// const Piyush = {
//   name:"piyush garg",
//   sayName:function(){
//      console.log(this.name);
//   }
// }

// const john = {
//   name:"john garg",
//   sayName:function(){
//     console.log(this.name);

//   }
// }

// john.sayName.call(Piyush)

//todo ?- 144 <-- hard --> mistake

// const obj = {
//   age: 25,
//   getFullname: function (age) {
//     console.log(this.name + " " + age);
//   },
// };

// const person = {
//   name: "adil",
// };

// obj.getFullname.call(person, 25);

//! ?- 145 <-- hard --> mistake
//todo settimeout has it's own execution context

// const piyush = {
//   name:"Piyush garg",
//   sayName:function(){
//     console.log(this.name);
//   }
// }

// setTimeout(piyush.sayName,3*1000)

// const piyush = {
//   name:"Piyush garg",
//   sayName:function(){
//     console.log(this.name);
//   }
// }

// setTimeout(piyush.sayName.bind(piyush),3*1000)

//this is closure function
// setTimeout(()=>piyush.sayName(),3*1000)

//todo ?- 146

// const obj = {
//   height:30
// }

// console.log(obj.height);

// delete obj.height
// console.log(obj.height);

//! ?- 147 <--hard-->  mistake

//This Object.create() add height in object prototype

// const obj = Object.create({
//   height: 30,
// });

// console.log(obj.height);

// delete obj.height;
// console.log(obj.height);

//todo ?- 148

// const obj = {
//   name:"husan ansari",
//   age:25
// }

// const {names,ages} = obj

// console.log(names);
// console.log(ages);

//todo ?- 149

// console.log(10 + !undefined);
// console.log(10 + !null);
// console.log(10 + !false);
// console.log(10 + !true);
// console.log(10 + +undefined);
// console.log(null + undefined);

//todo ?- 150 <-----hard ----->

// const findingY = ()=>{
//   y=10
// }

// findingY()
// console.log(y);

//todo ?- 151 <-----hard ----->

// let myMap = new Map();

// myMap.set('a', 1);
// myMap.set('b', 2);
// myMap.set('c', 3);

// console.log( myMap.get("a"));

//todo ?- 152 <-----hard ----->

// const guessTheAnswer = (arg) => {
//   console.log(arg);
// };

// guessTheAnswer();

//todo ?- 153 <-----hard ----->

// const giveFirstElementOfArray = (arr, n = 1) => {
//   for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
//   }
// };

// const data = [1, 2, 3, 4, 5];

// giveFirstElementOfArray(data, 100);

//todo < ------- Interview Question practice -------->

//? Q:1 Your are given a String, reverse each word in the sentense

// const str = "Hello g kese ho";

// const reverseArr = str.split(" ").map((word) => {
//   return word.split("").reverse().join("")
// });
// console.log(reverseArr);

//? Q:2 How to check if an object is an array or not?

// console.log(typeof []);

// const checkArray = (ele) => {
//   console.log(Array.isArray(ele));
// };

// checkArray([]);
// checkArray({});

//? Q:3 How to empty an array in JavaScript? do not reset it to a new array and do not run through?

// let arr = [1,2,3,4,5]
// arr.length = 0
// console.log(arr);

//? Q:4 How would you check if a number is an integer?

// let interger = 1.1
// console.log(typeof interger);  //not valid because it is float

//Question:1
// const interger = 10;
// if (typeof interger === "number" && interger % 1 === 0) {
//   console.log("Integer");
// } else {
//   console.log("Not !Integer");
// }
//Question:2
// console.log(Number.isInteger(interger));

//? Q:5 Make this work:const data =[1,2,3,4,5,1,2,3,4,5] => const data = [1,2,3,4,5]

// const data =[1,2,3,4,5,1,2,3,4,5]
// const uniqueData = new Set(data)
// console.log([...uniqueData]);

//? Q:6 make this work: const data = [1,2,3,4,5] => const data =[1,2,3,4,5,1,2,3,4,5]

// const data = [1,2,3,4,5]
// console.log([...data,...data]);

//and
// const data = [1,2,3,4,5]
// console.log(data.concat(data));

//? Q:7 Write a JavaScript function that reverse a number

// let a = 12
// console.log(Number(a.toString().split("").reverse().join("")));

//? Q:8 Write a JavaScript function that check wheather a passes string is palandrom or not?

// const isPalandrome = (str)=>{
//   const str2 = str.split("").reverse().join('')
//   return str===str2
// }

// const str = "pop"
// const result = isPalandrome(str)
// console.log(result);

//? Q:9 Write a JavaScript function that check wheather a passes string is anagram or not?

// const isAnnagram = (str, str2) => {
//   const modifiedStr = str.toLowerCase().split("").sort().join("");
//   const modifiedStr2 = str2.toLowerCase().split("").sort().join("");

//   if (modifiedStr.length !== modifiedStr2.length) {
//     return false;
//   }

//   return modifiedStr === modifiedStr2;
// };

// const str1 = "Hello";
// const str2 = "llohe";
// const result = isAnnagram(str1, str2);
// console.log(result);

//? Q:10 write a JavaScript function that returns a passed string with letters in alaphabetical order

// const convertAlphabeticOrder = (str) => {
//   const ordered = str.split("").sort().join("");
//   return ordered;
// };

// const str = "zaha";
// const result = convertAlphabeticOrder(str);
// console.log(result);

//? Q:11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper Case

//todo first letter of each word must be upper case

// const convertEachLetterOfWordCapital = (str) => {
//   const eachWordArr_Map = str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.substring(1));

//   return eachWordArr_Map.join(" ");
// };

// const str =
//   "hello i am adil younas and i considered myself a MERN stack developer";
// const result = convertEachLetterOfWordCapital(str);
// console.log(result);

//? Q:12 Write a JavaScript function to get the number of occurences of each letter in a specified string?

//* */ this can be use to count spaces

// const findMultipleOccurences = (str) =>{
//   let obj = {}
//   const strArr = str.split("")
//   strArr.forEach((letter)=>{
//     if (obj.hasOwnProperty(letter)) {
//       obj[letter] = obj[letter] +1
//     }else{
//       obj[letter] = 1
//     }
//   })

//   return obj
// }

// const str = "Zaroo"
// const result = findMultipleOccurences(str)
// console.log(result);

//todo Now loops and arrays
//? Q:13 You have an array filled with strings and numbers just add the numbers

// const data = [12, "adil", "John", 100, 12, "hehe"];

// const result = data.reduce((acc, ele) => {
//   if (typeof ele === "number") {
//     acc = acc + ele;
//   }
//   return acc;
// }, 0);

// console.log(result);

//? Q:14 Loop an array of objects and remove all the objects which don't have gender's value male

//remove female and have male

// const data = [
//   {
//     gender: "male",
//     age: 25,
//   },
//   {
//     gender: "female",
//     age: 25,
//   },
//   {
//     gender: "female",
//     age: 25,
//   },
//   {
//     gender: "male",
//     age: 25,
//   },
//   {
//     gender: "female",
//     age: 25,
//   },
//   {
//     gender: "female",
//     age: 25,
//   },
// ];

// const result = data.filter((obj)=>obj.gender!=="female")
// console.log(result);

//? Q:12 Loop an array of objects and remove first objects which don't have gender's value male (remove first female)

// const data = [
//   {
//     gender: "male",
//     age: 1,
//   },
//   {
//     gender: "female",
//     age: 2,
//   },
//   {
//     gender: "female",
//     age: 3,
//   },
// ];

// for (let i = 0; i < data.length; i++) {
//   if (data[i].gender === "female") {
//     data.splice(i, 1);
//     break;
//   }
// }
// console.log(data);

//my own logic

// const removeFirstNonMale = (data) => {
//   const firstNonMaleVal = data.find((item) => item.gender !== "male");

//   if (firstNonMaleVal) {
//     return data.filter((val) => val !== firstNonMaleVal);
//   }
// };

// const data = [
//   {
//     id: 1,
//     gender: "trans",
//   },
//   {
//     id: 2,
//     gender: "male",
//   },
//   {
//     id: 3,
//     gender: "female",
//   },
// ];

// console.log(removeFirstNonMale(data));

//? Q:12 Write a JavaScript function to clone an array

//create a copy if an array using function

// const arrClone = (data) => {
//   let arr = [];
//   data.forEach((ele) => {
//     arr.push(ele);
//   });

//   return arr;
// };

// const data = [1, 2, 3, 4];
// const result = arrClone(data);
// console.log(result);

//** another way

// const arrClone = (data) => {
//   let arr = data.map((e)=>e)
//   return arr;
// };

// const data = [1, 2, 3, 4];
// const result = arrClone(data);
// console.log(result);

//? Q:12 Write a JavaScript function which accepts an argument and returns the type

//recieve something and tell it type

// const tellType = (parameter) => {
//   return typeof parameter;
// };

// const guess = 10;
// const result = tellType(guess);
// console.log(result);

//? Q:13 Write a JavaScript function to get the first element of array (second parameter is n and print elements of array times n equal)

// const giveFirstElementOfArray = (arr, n = 1) => {
//   if (n<=arr.length) {
//     for (let i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   }else{
//     n= arr.length
//     console.log("n is sacrifised");
//     for (let i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   }
// };

// const data = [1, 2, 3, 4, 5];

// giveFirstElementOfArray(data, 5);

//todo own logic

// const printElement = (arr, n = 1) => {
//   for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
//   }
// };

// const data = [10, 20, 453, 54, 530];
// printElement(data, 2);

//? Q:14 Write a JavaScript function to get the last element of array on given n if n = 5 then last five elements of array

// const giveLastElementsOfArray = (arr,n=1) => {

//  if (arr.length>=n) {
//     for (let i = arr.length-n; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//  }
// };

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// giveLastElementsOfArray(data);

//! <--- hard -->  Q:15 Write a JavaScript program to find the most frequent item of an array (most biggest one)

//todo The function you've provided is commonly referred to as a "frequency counter" or "element frequency counting" function. It calculates the frequency of each unique element in an array and then returns the element that occurs with the highest frequency.

// const frequencyFun = (arr) => {

//   let freq = {};

//   arr.forEach((item) => {
//     if (freq.hasOwnProperty(item) === false) freq[item] = 1;
//     else freq[item] = freq[item] + 1;
//   });

//In our case reduce compare every value

//   const ans = Object.keys(freq).reduce((acc, num) => {
//     return freq[acc] > freq[num] ?acc:num
//   },freq[0]);

// default value, This value change every time and return deside the value of acc every iteration of condition check

//   return ans
// };

// const data = [1, 2, 3, 3,2];
// const result = frequencyFun(data);
// console.log(result);

//todo <========== -------------- Practice the upper question ------------ =============>

// const frequencyFun = (arr) => {
//   let freq = {};

//   //kon sa element kitni dafa aya hai
//   arr.forEach((item) => {
//     if (freq.hasOwnProperty(item) === false) {
//       freq[item] = 1; //"1":1
//     } else {
//       freq[item] = freq[item] + 1;
//     }
//   });

//   //jis key ki value sab se ziada hai wo de do
//   const ans = Object.keys(freq).reduce((acc, num) => {
//     //first comparision between same key : value of freq (jetny wala next compete krey ga)
//     return freq[acc] > freq[num] ? acc : num;
//   });

//   return ans;
// };

// const data = [1, 2, 3, 3];
// const result = frequencyFun(data);
// console.log(result);

//? Q:16 Write a JavaScript program that shuffle an array

//todo The Fisher-Yates shuffle, also known as the Knuth shuffle, is an algorithm for generating a random permutation of a finite set—in other words, for randomly shuffling the elements of an array. It was designed by Ronald A. Fisher and Frank Yates and later popularized by Donald E. Knuth in his book "The Art of Computer Programming."

//this code is written from better understanding
// const arr = [10, 20, 30];
// [arr[0], arr[2]] = [arr[2], arr[0]];
// console.log(arr);

// const shuffleArr = (arr) => {
//   let length = arr.length;

//   for (let i = 0; i < length; i++) {
//     // Generate a random index from 0 to i (inclusive)
//     const randomIndex = Math.floor(Math.random() * (i + 1));

//     // Swap elements at randomIndex and i
//     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//   }

//   console.log(arr);

// };

// const data = [1, 2, 3, 4];
// shuffleArr(data);

//? Q:17 Write a JavaScript program to compute the union of two arrays

// const findUnique = (arr1, arr2) => {
//   return [...new Set(arr1.concat(arr2))];
// };

// const arr = [1, 2, 3];
// const arr2 = [100, 2, 1, 10];
// const result = findUnique(arr, arr2);
// console.log(result);

//? Q18: What would you need to change in the code to make it calculate the dates for a specific week, given a start date for that week?

// function getCurrentWeekDates() {
//   const currentDate = new Date();
//   const currentDay = currentDate.getDay();

//   const daysToMonday = currentDay === 0 ? 1 : currentDay - 1;

//   const mondayDate = new Date();
//   mondayDate.setDate(currentDate.getDate() - daysToMonday);

//   const sundayDate = new Date();
//   sundayDate.setDate(mondayDate.getDate() + 6);

//   const lastWeekMonday = new Date(mondayDate);
//   lastWeekMonday.setDate(mondayDate.getDate() - 7);

//   const lastWeekSunday = new Date(sundayDate);
//   lastWeekSunday.setDate(sundayDate.getDate() - 7);

//   console.log('Last Week Monday:', lastWeekMonday.getDate());
//   console.log('Last Week Sunday:', lastWeekSunday.getDate());
// }

// getCurrentWeekDates();

//? Q19: find the prime number

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(30));

//? Q20 : What is binary search give an example

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (arr[mid] === target) {
//           return mid;
//       } else if (arr[mid] < target) {
//           left = mid + 1;
//       } else {
//           right = mid - 1;
//       }
//   }

//   return -1; // Element not found
// }

// let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let targetValue = 5;
// console.log(binarySearch(sortedArray, targetValue));

//? Q21 : What is binary search give an example

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//           console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//           console.log("Fizz");
//       } else if (i % 5 === 0) {
//           console.log("Buzz");
//       } else {
//           console.log(i);
//       }
//   }
// }

// fizzBuzz(15);

//? Q22 : Random Number within a Range

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Example usage
// let randomNum = getRandomNumber(10, 20);
// console.log(randomNum);

//? Q23 : What is binary search give an example

// function flattenArray(arr) {
//   return arr.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
// }

// // Example usage
// let nestedArray = [1, [2, [3, 4], 5], 6];
// let flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);

//? Q24 :Generate Fibonacci Sequence
//todo => Generating a Fibonacci sequence involves creating a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

// function fibonacci(n) {
//   let sequence = [0, 1];
//   for (let i = 2; i < n; i++) {
//       sequence[i] = sequence[i - 1] + sequence[i - 2];
//   }
//   return sequence;
// }

// // Example usage
// let fibSequence = fibonacci(8);
// console.log(fibSequence);
