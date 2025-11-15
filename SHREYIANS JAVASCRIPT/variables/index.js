//VARIABLES
// VAR:it can be initialized again which is a problem and give confusing results later
// eg:var name="aryan"
// var name="kumar" it will not give any error

// LET:it can't be initized later which will not craete confusion 
// use:when you want to update values later
// let a=5;a=++a;console.log(a);

// CONST:use:when we dont want to change values
// eg:const pi=3.14;

// TEMPORAL DEAD ZONE(TDZ)
// what: Temporal Dead Zone वह समय होता है जब JavaScript में variable तो बना होता है लेकिन उसे use करने से पहले value assign नहीं हुई होती, इसलिए उसे access करने पर error आता है।
// matlab ki jum hum variable ko initiaze karte hai usse pahle use karne ki koshish karte hai toh error aata hai toh wo line ya jagah uski initize se pahle ka upar line is where tdz exists(the start to till use the variable)
// console.log(a);

// let a=5;
//accessing a till before declaring a so tdz exits from line 16 to 17 on acesing on line 16 gives eroor is due to tdz error

// HOISTING:
// what:matlab jab bhi hum variables ya functions banate hai toh wo do parts mein break ho jaata hai firts part is declaration and second is initialization and first part that is declaration jo hai wo code ke sabse upar part mein chala jaata hai
// jaise let a=5 divided into two parts:let a; and a=5; and let a goes to the upper side of the file

// COMMON DOUBT
// question1:const doubt that we cannot assign values to const variable but can change its object value like 
// const obj={name:"aryan"};
// obj.name="kumar";
// console.log(obj);
// but cannot do these error TypeError: Assignment to constant variable.
// obj={name:"sharma"};
// console.log(obj)
 

