//todo => Logical Operators

// let x = 5;
// let y = 10;
// let resultAND = x > 0 && (y = 20);
// console.log(resultAND); // Output: true, y remains 10 (short-circuit prevents assignment)
// console.log(y); // Output: 10 (y is not assigned 20)

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

const piyush = {
  name: "Piyush garg",
  sayName: function () {
    console.log(this.name);
  },
};

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







