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

//? Q:12 Write a JavaScript function which accepts an argument and returns the type

// const giveMeType = (val)=>{
//     return typeof val
// }
// const val= +undefined
// const result = giveMeType(val)
// console.log(result);

//? Q:13 Write a JavaScript function to get the first element of array (second parameter is n and print elements of array times n equal)
//give first element of array if n=1 (which by default is 1)

// const printElement = (arr, n = 1) => {
//   for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
//   }
// };

// const data = [10, 20, 453, 54, 530];
// printElement(data, 2);

//? Q:14 Write a JavaScript function to get the last element of array on given n if n = 5 then last five elements of array

// const giveMeLast_N_Element = (data, n = 1) => {
//   for (let i = data.length - n; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

// const data = [1, 2, 3, 0, 10];
// giveMeLast_N_Element(data, 2);

//! <--- hard -->  Q:15 Write a JavaScript program to find the most frequent item of an array (most biggest one)

// const countFrequency = (arr) => {
//   let freq = {};

//   arr.forEach((ele) => {
//     if (freq.hasOwnProperty(ele) === false) {
//       freq[ele] = 1;
//     } else {
//       freq[ele] = freq[ele] + 1;
//     }
//   });

//   const highestFreq = Object.keys(freq).reduce((acc, item) => {
//     return freq[acc] > freq[item] ? acc : item;
//   });

//   console.log(highestFreq);
// };

// const data = [1, 2, 3, 3, 3, 2, 1, 1, 1, 1];
// countFrequency(data);

//? Q:16 Write a JavaScript program that shuffle an array

//todo The Fisher-Yates shuffle, also known as the Knuth shuffle, is an algorithm for generating a random permutation of a finite set—in other words, for randomly shuffling the elements of an array. It was designed by Ronald A. Fisher and Frank Yates and later popularized by Donald E. Knuth in his book "The Art of Computer Programming."

// const shuffleArr = (arr) => {
//   for (let i = arr.length-1; i >=0; i--) {
//     const randomNumber = Math.floor(Math.random() * (i+1));
//     [arr[i], arr[randomNumber]] = [arr[randomNumber], arr[i]];
//   }

//   return arr;
// };

// const data = [1, 2, 3, 4, 5];
// const result = shuffleArr(data);
// console.log(result);

//? Q19: find the prime number

// const isPrimeNumber = (number)=>{

//         if (number<=1) {
//             return false
//         }

//         for (let i = 2; i < number; i++) {
//            if (number%i===0) {
//             return false
//            }

//         }

//         return true
// }

// const n = 1132
// console.log(isPrimeNumber(n));

// console.log(10 + undefined);
// console.log(10 + !null);
// console.log(10 + !false);
// console.log(10 + !true);
// console.log(10 + +undefined);
// console.log(null + undefined);
// console.log(typeof (3 + 4 + +"5"));
// console.log(undefined == null);
// console.log("hellppo" <= "world");
// console.log(+true);
// console.log(typeof +true);
// console.log(typeof +null);
// console.log(typeof +undefined);
// console.log(typeof +Object);
// console.log(typeof +Array);
// console.log(typeof +"10");
// console.log(typeof Boolean);
// console.log(typeof NaN);
// console.log([1, 2, 3] > [1, 2]);
// console.log("3" + 2);
// console.log("3" - 2);
// console.log(1 + true);
// console.log(null + "s");
// console.log("5" +  undefined );
// console.log([] + []);
// console.log({} + {});
// console.log(NaN === NaN);
// console.log(Infinity - Infinity);
// console.log(typeof (5 / 0));
// console.log(!!"hello");
// console.log(!!0);
// console.log("5" - "2");
// console.log("2" * "3");
// console.log("2" == 2);
// console.log("2" === 2);
// console.log(+"2");
// console.log(+"abc");
// console.log(typeof NaN); //todo hard
// console.log("2" === 2);
// console.log(+"2"); //todo hard
// console.log(+"adil"); //todo hard
// console.log(+""); //todo hard
// console.log([]=="");
// console.log([]==0);
// console.log([-55]==0);
// console.log([0]==0);
// console.log([0]=="");
// console.log([""]=="");

// const str = '09060108546759';
// const lastDiget = str.slice(-4)
// console.log(lastDiget.padStart());

// const findPairsWithSum = (arr, x) => {
//   const pairs = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === x) {
//         pairs.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return pairs;
// };

// const arr = [2, 3, 4, 9, 11, 0, 23, 24, 27];
// const x = 27;

// const result = findPairsWithSum(arr, x);

// console.log(`Pairs with sum ${x}:`, result);

// function x() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Learn");
// }
// x();

// Write a program to print all the LEADERS in the array.
// An element is leader if it is greater than all the elements to its right side.

// const findLeader = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let firstEl = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let secondEl = arr[j];
//       if (firstEl > secondEl) {
//         result.push(firstEl);
//       }
//     }
//   }
//   const unique = [...new Set(result)];
//   return unique;
// };

// const data = [16, 17, 4, 3, 5, 2];
// const a = findLeader(data);
// console.log(a);

// const findLeaders = (arr) => {
//   const result = [];
//   let maxRight = arr[arr.length - 1];

//   // The rightmost element is always a leader
//   result.push(maxRight);

//   // Traverse the array from right to left
//   for (let i = arr.length - 2; i >= 0; i--) {
//     if (arr[i] > maxRight) {
//       maxRight = arr[i];
//       result.unshift(maxRight);
//     }
//   }

//   return result;
// };

// const data = [16, 17, 4, 3, 5, 2];
// const leaders = findLeaders(data);
// console.log("Leaders in the array:", leaders);









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


// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const midValue = arr[mid];

//     if (midValue === target) {
//       return mid; // Element found, return its index
//     } else if (midValue < target) {
//       low = mid + 1; // Search in the right half
//     } else {
//       high = mid - 1; // Search in the left half
//     }
//   }

//   return -1; // Element not found
// }

// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const targetValue = 15;

// const resultIndex = binarySearch(sortedArray, targetValue);

// if (resultIndex !== -1) {
//   console.log(`Element ${targetValue} found at index ${resultIndex}.`);
// } else {
//   console.log(`Element ${targetValue} not found in the array.`);
// }


//? Q24:Generate Fibonacci Sequence
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

//? Q:25 create a program through which you can merge multiple nested arrays in one array

// const arr = [12,2,3,[4,5,4,1,4565,[45,45,5,4,5]]].flat(Infinity)
// console.log(arr);

//? Q:26 You are giving an array const arr = [2, 3, 4, 9, 11, 0, 23, 24, 27] create a program in which sum of two elements in array equal to x

//todod My own logic
// const x = 13;
// let pairData = [];

// const arr = [2, 3, 4, 9, 11, 0, 23, 24, 27];
// for (let i = 0; i < arr.length; i++) {
//   let firstEl = arr[i];
//   for (let j = i + 1; j < arr.length; j++) {
//     let secondEl = arr[j];
//     if (firstEl + secondEl === x) {
//       pairData.push(firstEl, secondEl);
//     }
//   }
// }

// console.log(pairData);

//todo chat gpt logic

// const findPairsWithSum = (arr, x) => {
//   const pairs = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === x) {
//         pairs.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return pairs;
// };

// const arr = [2, 3, 4, 9, 11, 0, 23, 24, 27];
// const x = 27;

// const result = findPairsWithSum(arr, x);

// console.log(`Pairs with sum ${x}:`, result);

//? Q:27 You are giving two objects so create a program in which same key and value from object 1 and object 2 should be present into new object

// const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// const obj2 = { a: 1, b: 20, c: 3, d: 4, e: 50 };
// const obj3 = {}

// for(let key in obj1){
//   if (obj1[key] === obj2[key]  ) {
//     obj3[key] = obj1[key]
//   }
// }

// console.log(obj3);

//? Q:28 You are giving multidimention array, find all values eqaual to Lahore if two Lahore then 2 prints("Lahore")

// var array2 = [
//   ["ali", 26, "fasilabad", "Male", "BSCs"],
//   ["bali", 24, "pashawar", "Male", "B.Com"],
//   ["shmai", 23, "Lahore", "Male", "BSSE"],
//   ["shmai", 23, "Lahore", "Male", "BSSE"],
//   ["ammad", 22, "islamabad", "Male", "IT"],
//   ["mani", 20, "karacho", "Male", "SE"],
// ];

// for (let i = 0; i < array2.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     let rowData = array2[i][j];
//     if (rowData === "Lahore") {
//       console.log(rowData);
//     }
//   }
// }



//?Q 29:You are given a nested array [1, [2, [3, 4], 5], 6] Create a JavaScript function, flattenArray, to flatten a nested array

// function flattenArray(arr) {
//   return arr.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
// }

// // Example usage
// let nestedArray = [1, [2, [3, 4], 5], 6];
// let flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);


//? Q: 30 You are given an array [1, 2, 3, 4, 2, 1, 4]; Create a JavaScript function, to find unique number from two time repeated array 

// 0^n = n
// 0^5=5

// n^n=0
// 5^5=0


function findDuplicate(arr) {
  let result = 0;

  // Use XOR to find the duplicate
  for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];
  }

  return result;
}

const arrayWithDuplicate = [1, 2, 3, 4, 2, 1, 4];
const duplicateValue = findDuplicate(arrayWithDuplicate);
console.log(`The duplicate value is: ${duplicateValue}`);



