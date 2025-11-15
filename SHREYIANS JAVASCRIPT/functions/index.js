// FUNCTION:hum fnc ko tab likhte hai jab hum chahte hai wo paerticular kaam perform ho jab hum chahe isliye hum isko banate hai 
// jaise ac mein button hai saare functions ahi jo particular key jab hum click karenge tabhi kaam karenge aise nahi
// HOW WE CREATE:function abc(){console('123')} OR jaise we craete let a=5 console(a) ussi tarah ab hum variable mein ek function likh sakte hai
// let value=function(){console.log('123');}value(){to run this function and when we create function inside any variable toh humein function ke aage naam nahi likhne ki jaroorat hai because wahi bvariable uska naam hai}

// function declaration ,function expression:{function abcd(){console.log(a)}}=>THIS IS FUNCTION DECLARATION and [let a=function() this is fnc expression]

// ARROW FUNCTIONS: 
// let abcd=()=>
// {
//     console.log('abc');
// }
// abcd();

// parametrs and arguements
// function sum(v1,v2){console.log(v1,v2)}; sum(1,2);[1,2 is arguements and v1,v2 is parameters]

// DEFAULT PARAMETRS
// function sum(v1=0,v2=0)
// {
//     console.log(v1+v2);
// }
// sum(); if we have not given any value to sum then BY DEFAULT ITS VALUE IS V1=0 AND V2=0 and if we have given the value its default value will not be set

// REST AND SPREAD OPERATOR 
// 1:REST :values ko array mein collect karta hai     // USED:in function mostly  
// function sum(...numbers)
// {
//     let sum=0;
//     for(let num of numbers)
//     {
//         sum+=num;
//     }
// }
// sum(1,2,3,4,5,5,6,7,8){jab humein pata nahi ho ki users kitni values de dega aur humein uspe opearion karna ho tab hum usko rest opeartor se tod ke ek array mein collect kar lete hai}

// 2:SPREAD :basically iska use hum tab karte hai jab humein basically object ya array ki values ko copy ya merge karna ho
// eg:let fruits=["apple","banana"];
// let morefruits=[...fruits,"mango","pineapple"];{ismein merge ho jayega and values will be 4}

// FIRST CLASS FUNCTIONS:matlab jaise hum varibale ko treat karte hai waise hum function ko treat kar sakte hai
// matlab let a=5 mtlab we can also do let a=function(){body}
// jiase hum function merin value dete hai ussi tarah hum kisi function mein ek function de saklte hai like map in array that is khud ek function hai and take another function as arguement 
// example:function abc(5) ussi tarah function abcde(function ){arr.map(function(num){ num*num})}

// HIGHER OREDR FUNCTIONS:
// WHAT:aisa fnc jo ek function ko arguement mein leta ho ya ek function ko return karta hai
// eg:MAP Function of array is an example of higheroderfnc 
// let arr=[1,2,3,4,5] 
// const square=arr.map((num)=>
// {
//     return num*num;
// })
// console.log(square); output is [ 1, 4, 9, 16, 25 ]

// eg:jab ek fnc return ho
// function hello(){
//     return function(){
//         console.log("hello");
//     }
// }
// let value=hello();{jab humne hello() ko call liya toh ye ek function return kiya matlab abhi value==function} ab isko cahalane ke liye call value()}
// value();

// CLOSURES:
// WHAT:ek aisa fnc so apne surrounding(outer) fnc ke variables ko yaad rakhta hai aur usko use kar sakta hai bhale hi wo fnc ab chal ke khatam ho gaya ho
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;{matlab jab bhi outer fnc ko call kiya jayega toh usmein return hoke inner function jayega phir hum inner fnc ko chala sakte hai kabhi bhi}
// }

// const countUp = outer();{yaha pe outer() fnc ko chalalya gaya hai toh ye return karega inner() ko matlab ki ab[countup=inner()]} LEKIN ABHI INNER FNC CHALA  NHI HAI SIRF STORE HUWA HAI USKO CHALANE KE LIYE CALL KARNA PADEGA
// countUp();  // 1
// countUp();  // 2
// countUp();  // 3

// PURE AND IMPURE FUNCTIONS:

// PURE:jisko chalane se bahar koi effect n pade kisipe eg:
// let a=5;
// function print()
// {
//     console.log(a);
// }this will not affect the vriable a that is outside

// IMPURE:jisko chalane se bahar pe effect pade 
// function increment()
// {
//     // a++; isko cahalane se bahar ke variables pe fark padta hai
// }

// LEXICAL SCOPE:Lexical scoping का मतलब है कि functions अपने defined scope और किसी parent scope के variables को access कर सकते हैं।
// eg:function abc()
// {
//     let a=5;
//     function def()
//     {
//         let b=5;
//         function geh()
//         {
//             let c=6;
//         }
//     }
// }
// matlab a is accessible in whole and b in whole def and c in geh()

// IIFE(immediately invoked function expression):matlab isko call nahi karna padta hai ye craete  hote hi turant chal jaate hai
// (function ()
// {
//     console.log("helloo");
// })();

// HOISTING:
// what:matlab jab bhi hum variables ya functions banate hai toh wo do parts mein break ho jaata hai firts part is declaration and second is initialization and first part that is declaration jo hai wo code ke sabse upar part mein chala jaata hai
// jaise let a=5 divided into two parts:let a; and a=5; and let a goes to the upper side of the file

// HOISTING WITH FUNCTIONS:
// when function declaration:
// abcde()
// function abcde()
// {
//     console.log("hello"); //as  function decalaration whole things goes to the top of the code and now it will run the code
// }

// WHEN FUNCTION EXPRESSIONS:
// geh();
// let geh=function()
// {
//     console.log("hello");// only function declaration that is let geh=undefinded upar gaya hai aur neeche geh ko define kiya gaya hai isliye print undefined ho raha hai
// }
// ReferenceError: Cannot access 'geh' before initialization

// OVERALL FUNCTION DECALATYION HOISTS AND FUNCTION EXPRESSION NOT HOISTS

// QUESTION PRACRTICE

// 1:USE REST OPEARTOR TO ACCEPT ANY NO OF GOALS AND RETURN THE SCORES TOTAL
// function abcd(...arr)
// {
//     let total=0;
//     arr.forEach((num)=>
//     {
//         total+=num;
        
//     })
//     return total;
// }
// console.log(abcd(5,6,3,65,7,8));

// question2:pass a function into another function and then execute it inside
// function abcde(kamine)// ayah kamine wala console wala function jo hai kamine variable mein aake store huwa hai 
// {
//     kamine();
// }
// abcde(function()
// {
//     console.log("kamine");
// })

// higher order funcion
// WHEN FUNCTION IS RETURNED FROM FUNCTION
// function hello()
// {
//     return function()
//     {
//         console.log("jamina ");
//     }
// }
// let value=hello();//[matlab value==function]
// value();

// WHEN ANY FUNCTION ACCEPT FUNCTION AS PARAMETER
// function hello(val)
// {
//     val();
// }
// hello(function()
// {
//     console.log("hello");
// })

function discount(discount,price)
{
    let value=price-(price*(discount/100));
    return value;
}
console.log(discount(20,400));