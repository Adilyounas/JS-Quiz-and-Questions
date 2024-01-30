//todo => Logical Operators

// let x = 5;
// let y = 10;
// let resultAND = x > 0 && (y = 20);
// console.log(resultAND); // Output: true, y remains 10 (short-circuit prevents assignment)
// console.log(y); // Output: 10 (y is not assigned 20)

//todo ?- 26

// console.log(false == undefined);
// console.log(0 == undefined);

// var a;

// console.log(a == undefined);

// todo ?- 35
//check any value is odd or even
// const a = 10;
// console.log(a % 2 === 0 ? true : false);
// console.log(a%2);
// const date = new Date();
// const year = date.getFullYear();

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

// todo ?- 56

// let a  = 1
// let b = 1
// let c = 2
// console.log(a===b==--c);

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

//! ?- 145 <-- hard --> mistake
//todo settimeout has it's own execution context

// const piyush = {
//   name: "Piyush garg",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(piyush.sayName,0)

// const piyush = {
//   name:"Piyush garg",
//   sayName:function(){
//     console.log(this.name);
//   }
// }

// const adil = {
//     name:"Adil",
// }

// setTimeout(piyush.sayName.bind(adil),3*1000)

// // this is closure function
// setTimeout(()=>piyush.sayName(),3*1000)

// let a = null
// console.log(a + a + 1);

//todo ?- 149

// console.log(10 + undefined);
// console.log(10 + !null);
// console.log(10 + !false);
// console.log(10 + !true);
// console.log(10 + +undefined);
// console.log(null + undefined);
// console.log(typeof (3 + 4 + +"5"));
// console.log(undefined == null);
// console.log(undefined == "");
// console.log("world" >= "world");
// console.log(+true);
// console.log(typeof +true);
// console.log(typeof +null);
// console.log(typeof +undefined);
// console.log(typeof +Object);
// console.log(typeof +Array);
// console.log(typeof +"10");
// console.log(typeof Boolean);
// console.log(typeof NaN);
// console.log([1, 2] >= [1, 2]);
// console.log([1, 2,3] > [1, 2]);
// console.log("3" + 2);
// console.log("3" - 2);
// console.log(1 + true);
// console.log(null + "adil");
// console.log("5" +  undefined );
// console.log("5" -  undefined );
// console.log([] + []);
// console.log([2] + [1]);

// console.log({} + {});
// console.log({age:1} + {age:2});

// const obj1 = {
//     age:25
// }
// const obj2 = {
//     age:10
// }
// console.log(obj1.age + obj2.age);

// console.log(NaN === NaN);
// console.log(Infinity - Infinity);
// console.log(typeof Infinity);

// console.log(typeof (5 / 0));
// console.log(!!"adil");
// console.log(!!0);
// console.log("5" - "2");
// console.log("2" ** 3);
// console.log("2" == 2);
// console.log("2" === 2);
// console.log(+"2");
// console.log(+"abc");
// console.log(10 + undefined);
// console.log(10 + !null);
// console.log(10 + !false);
// console.log(10 + !true);
// console.log(10  +     +undefined);
// console.log(null + undefined);
// console.log(typeof (3 + 4 + +"5"));
// console.log(undefined == null);

// console.log("a" <= "b");  //todo hard => The first character in "hellppo" is "h," and the first character in "world" is "w."
// Since "h" comes before "w" in the Unicode order, the comparison returns true.
// console.log("adil" <= "aqil");
// console.log("" <= "b");
// console.log("b" == "b");

// console.log(+true);
// console.log(typeof +true);
// console.log(typeof +null);
// console.log(typeof +undefined);
// console.log(typeof +Object);
// console.log(typeof +Array);
// console.log(typeof +"10");
// console.log(typeof Boolean);
// console.log(typeof NaN); //todo hard
// console.log([1, 2, 3] > [1, 2]);  //todo hard
// console.log("3" + 2);
// console.log("3" - 2);
// console.log(1 + true);
// console.log(null + "s"); //todo hard
// console.log("5" +  undefined ); //todo hard
// console.log([] + []); //todo hard
// console.log({} + {}); //todo hard
// console.log(NaN === NaN);
// console.log(Infinity - Infinity); //todo hard
// console.log(typeof (5 / 0)); //todo hard
// console.log(!!"hello");
// console.log(!!0);
// console.log("5" - "2");
// console.log("2" * "3");
// console.log("2" == 2);
// console.log("2" === 2);
// console.log(+"2"); //todo hard
// console.log(+"adil"); //todo hard
// console.log(+""); //todo hard

//? Q:1 Your are given a String, reverse each word in the sentense

// const reverseStr = (str) => {
//   const strArr = str.split(" ");

//   const ans = strArr.map((word) => {
//     return word.split("").reverse().join("");
//   });

//   console.log(ans);
// };

// const str = "Hello There I am Adil Younas";
// reverseStr(str);

//? Q:2 How to check if an object is an array or not?

// const checkIsArray = (value)=>{

//   if (Array.isArray(value)) {
//     return true
//   }else{
//     return false
//   }
// }

// console.log(checkIsArray(10));

//? Q:3 How to empty an array in JavaScript? do not reset it to a new array and do not run through?
// x loop
// x reset

// const arr = [1,2,3]
// arr.length=0
// console.log(arr);

//? Q:4 How would you check if a number is an integer?

// check number is number

// const isNumber = (val)=>{
//   if (typeof val==="number") {
//     return true
//   }else{
//     return false
//   }
// }
// console.log(isNumber(Infinity));

//? Q:5 Make this work:const data =[1,2,3,4,5,1,2,3,4,5] => const data = [1,2,3,4,5]

// const uniqueValueFun = (data)=>{
// const arr = [...new Set(data)]
// console.log(arr);
// }

// const data = [1,2,3,4,5,1,2,3,4,5]
// uniqueValueFun(data)

//? Q:6 make this work: const data = [1,2,3,4,5] => const data =[1,2,3,4,5,1,2,3,4,5]

// const data = [1,2,3,4,5]
// console.log([...data,...data]);

//? Q:7 Write a JavaScript function that reverse a number

// const reverseNumber = (val)=>{

//   const ans = val.toString().split("").reverse().join("")
//   console.log(ans);

// }
// const number = 1020;
// reverseNumber(number)

//? Q:8 Write a JavaScript function that check wheather a passes string is palandrom or not?

//is palandrom or not
//reverse is same look like the past value
// length is also equal

// const isPalandrom = (val)=>{
//   const reverseStr = val.split("").reverse().join("")
//   if (reverseStr.length === val.length && val === reverseStr) {
//     return true
//   }else{
//     return false
//   }
// }

// const str = ""
// const result = isPalandrom(str)
// console.log(result);

//? Q:9 Write a JavaScript function that check wheather a passes string is anagram or not?

//order is diferent
//letters and length of both are same

// const isAnagram = (val1,val2)=>{

//   const checkValueOne = val1.toLowerCase().split("").sort().join("")
//   const checkValueTwo = val2.toLowerCase().split("").sort().join("")
//  if (checkValueOne.length=== checkValueTwo.length && checkValueOne===checkValueTwo) {
//   return true
//  }else{
//   return false
//  }

// }
// const str = "hello"
// const str2 = "olleH"

// console.log(isAnagram(str,str2));

//? Q:10 write a JavaScript function that returns a passed string with letters in alaphabetical order

// const covertIntoAlphabeticOrder = (val)=>{
//   return  val.split("").sort().join("")

// }

// const str = "hello"
// const result = covertIntoAlphabeticOrder(str)
// console.log(result);

//? Q:11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper Case

// const everWordInUpperCase = (val) => {
//   const strArr = val.split(" ");

//   const uperCaseArr = strArr.map(
//     (word) => word.charAt(0).toUpperCase() + word.substring(1)
//   );
//   console.log(uperCaseArr);
// };

// const str = "hello there i am adil younas and i am a mern stack developer";

// everWordInUpperCase(str);

//? Q:12 Write a JavaScript function to get the number of occurences of each letter in a specified string?

//ocurrence??

// const findOcurrence = (str) => {
//   let obj = {};

//   const strArr = str.toLowerCase().split("");
//   strArr.forEach((letter) => {
//     if (obj.hasOwnProperty(letter) === false) {
//       obj[letter] = 1;
//     } else {
//       obj[letter] = obj[letter] + 1;
//     }
//   });

//  const maxOccurence =  Object.keys(obj).reduce((acc,item)=> obj[acc] > obj[item] ? acc:item)
//  return maxOccurence
// };

// const str = "helloaa";
// console.log(findOcurrence(str));

//? Q:13 You have an array filled with strings and numbers just add the numbers

// function addNumbersFun(data) {
//   const sum = data.reduce((acc, item) => {
//     if (typeof item === "number") {
//       acc = acc + item;
//     }

//     return acc;
//   }, 0);

//   return sum;
// }

// const data = ["adil", 10, 20, "aqil", 30];
// console.log(addNumbersFun(data));

//? Q:14 Loop an array of objects and remove all the objects which don't have gender's value male

// const onlyMan = (data)=>{
//   return data.filter((obj)=>obj.gender === "male")
// }

// const data = [
//   {
//     id:1,
//     gender:"trans"
//   },
//   {
//     id:2,
//     gender:"male"
//   },
//   {
//     id:3,
//     gender:"female"
//   }
// ]

// console.log(onlyMan(data));

//? Q:12 Loop an array of objects and remove first objects which don't have gender's value male (remove first female)

//remove the first non male

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
