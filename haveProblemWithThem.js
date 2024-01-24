//This file is for practice only and scripts is not, it belongs to the questions section

// todo => Comparison Operators

// let value = "Not a Number";
// console.log(isNaN(value));
// console.log(Number.isNaN(value));

//todo => Logical Operators

// let x = 5;
// let y = 10;
// let resultAND = x > 0 && (y = 20);
// console.log(resultAND); // Output: true, y remains 10 (short-circuit prevents assignment)
// console.log(y); // Output: 10 (y is not assigned 20)

// let a = true;
// let b = false;
// let resultOR = a && (b = 0);
// console.log(resultOR); // Output: true, b remains false (short-circuit prevents assignment)
// console.log(b); // Output: false (b is not assigned true)

//todo => Assignment Operators

// let e = 17;
// e %= 5;
// console.log(e);

//todo => Unary Operators

// let a = 5;
// let bitwiseNotA = ~a;
// console.log(bitwiseNotA);

//todo ?- 3

// let a = [20];
// let b = ['20'];
// console.log(a[0]==b[0]);
// console.log(a[0]>=b[0]);
// console.log(a[0]===b[0]);

//todo ?- 6  <--- hard --->


//todo ?- 26

// console.log(false == undefined);
// console.log(0 == undefined);

// var a
// console.log(a == undefined);



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

// todo ?- 43 <---  hard  --->

// let data = ["anil","peter","bruce"]
// delete data[1]
// console.log(data);

// let data = ["anil","peter","bruce"]
// delete data[1]
// data[1] = 1200
// console.log(data);

// todo ?- 56

// let a  = 1
// let b = 1
// let c = 2
// console.log(a===b===--c);


// todo ?- 90

// function getAge(args){
//     console.log(typeof args);
//     console.log(...args);
// }

// getAge(21,22)

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
//   name:"Piyush garg",
//   sayName:function(){
//     console.log(this.name);
//   }
// }

// setTimeout(piyush.sayName,0)

// const piyush = {
//   name:"Piyush garg",
//   sayName:function(){
//     console.log(this.name);
//   }
// }

// setTimeout(piyush.sayName.bind(piyush),3*1000)

// // this is closure function
// setTimeout(()=>piyush.sayName(),3*1000)

//todo ?- 149

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
// console.log(+"abc");//todo hard









