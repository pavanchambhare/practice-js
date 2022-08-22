// object in javascript
  

// const user = {
//     name: "Roadside Coder",
//     age : 23,
//      isTotallyAwesome : true,
// };
// user.name = "pavan chambhare";
// console.log(user)
 
// what is first class function

//   function square(num) {
//  return num * num;
//   }

//   function displaySquare(fn){
//     console.log("square is", + fn(5));
//   }

//   displaySquare(square)

//   function checkPassword(ok , fail) {
//     let password = prompt("Password?", "");
//     if (password == "Pavan Chambhare") ok();
//     else fail();
//   }

//   let user = {
//     name: "Mahesh Chambhare",

//     login(result){
//         console.log(this.name + (result  ? "login successful" : "login fail"));

//     },
//   };

//   checkPassword(user.login.bind(user,true), user.login.bind(user,false));

// // expliicate binding with arrow function
// const age = 10;

// var person = {
//   name: "piyush",
//   age: 20,
//   getAgeArrow: () => console.log(this.age),
//   getAge:function() {
//     console.log(this.age); 
//   }
// };

// var person2 ={ age: 23};

// person.getAge.call(person1);
// person.getAge.call(person2);


// polyfill for call
// let car1 = {
//   color: "red",
//   company: "farrari"
// };


// function  purchaseCar(currency, price){
//   console.log(
//     `i have purchased ${this.color} - ${this.company}${price}`
//   );
// }

// Function.prototype.myCall = function (context = {},  ...arge) {
//   if(typeof this !== "fuction") {
//     throw new Error(this + "It's not callable");

//   }
//   context.fn = this;
//   context.fn(...arge);
// };


// const a = {};
// const b = { key: "b"};
// const c = {key: "c"};


// a[b] = 123;
// a[c]  = 456;

// console.log(a[b]);

// what's  JSON.strigify and JSON.parse

const user = {
  name: "Piyush",
  age:24,

};

  const strObj =  JSON.stringify(user);
  localStorage.setItem("test" , strObj)
console.log(JSON.parse(strObj));


 