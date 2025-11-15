// OBJECT:jab humein ek user ke baare mein poori infoirmation store karni ho jaise naam age work and etc 
// CREATION :
// let student={
//     name:"aryan",
//     age:20,
//     marks:function(){
//         console.log("hello");
//     }
// }
// HOW TO ACCESS:
// console.log(student.age);
// console.log(student.marks());

// OBJECT DESTRUCTURING:matlab hum oject ko destructure karke uske values ko extract karenge
// let{name,age}=student;
// console.log(name,age);

// VERY VERY IMPORTANT :BRACKET AND DOT NOTATIOON
// DOT NOTATION:ye exact dot ke baad wale cheej ko dhundta hai eg:obj.name(matlab ki object ke ndar ek name naam ka key hona hi chahiye)
// BRACKET NOTATION:ye dynamically key ko dhundhta hai
// eg:
// let obj={
//     name:"aryan",
//     age:22,
//     email:"70devirkt@gmail.com"
// }
// for(let key in obj)
// {
//     // console.log(key);//{one by one ye obj ke saare key ko nikal ke dega one by one }
//     // ab agar hum chahte hai uski value ko access karna toh // if we write 
//     // console.log(obj.key)//{iska matlab ye obj mein ek key naam ko search kar rahja hai jo ki hai hi nahi}
//     // agar aap chahte ho uski value access karna tyoh use 
//     console.log(key,obj[key]);
// }
// MATLAB HUMEIN JAB EXACT KEY JO USSI NAAM KA HO TAB USE KARNA HAI DOT OPEARORTR AND WHEN DYNAMICALLUY USKI VALUE HAI TOH BRACKET OPEARTOR

// COPYING OBJECTS

// 1:spread operator:
// let obj2={...obj};

// 2:DEEP CLONE:spread opearator ke disadvantages hai ki wo jab objects mein hai hi nestring ho jaati hai tab wo real copies nahi bana pata hai
// eg:
// let obj1={
//     name:"aryan",
//     age:22,
//     email:"70devirkt@gmail.com",
//     address:{
//         city:"bhopal",
//         country:"india",
//     }
// }
// let obj2={...obj1};// ab matlab hai ki obj2 alag jagah hai aur obj1 alag jagah matlab ek dusre ke changes affect nahi hone chahiye
// obj2.address.city="udaipur";
// // console.log(obj2);
// console.log(obj1);
// dono mein changes refelect huwe jab object ke andar nesting objects bane matlab real copies nahi bani hai
// HA NAHI BANI HAI LEKIN SIRF ANDAR WALE NESTED OBJECTS KA BAHAR KE NAME,AGE WO REAL HI COPIES HAI 
// TOH POORA COPY KAISE KAREIN

// let obj2=JSON.parse(JSON.stringify(obj1));
// obj2.address.city="udaipur";
// console.log(obj1);
// console.log(obj2);
// matlab ab yaha pe real copies ban gayi hai

// OPTIONAL CHAINING And computed properties
// optional chaining:matlab ye tab use hota hai jab objects mein nested objects use karte hai matlab suppose hum 

let obj1={
    name:"aryan",
    age:22,
    email:"70devirkt@gmail.com",
    address:{
        city:"bhopal",
        country:"india",
    }
}
// console.log(obj1.address.city);
// but agar suppose usmein koi key ko change kar de naam ya phir koi city ko hi delete kar de toh usse bachne ke liye error se we can use optional chaining
// console.log(obj1.addresses?.city); ya phir obj1 hi gayab ho jaaye toh console(obj1?.address?.city)
// practice

// QUESTION1: CAN OBJECT KEY BE A NUMBER OR BOOLEAN VALUE
let stu={
    12:"marks",
    true:"boy"
}
// console.log(stu[12]);
// console.log(stu.12);// as it is when we are searching stu.12 it is searching for 12 which you are thinkin a key but
// actually all key in oject converts to string means"12":"marks" and we are  doing with stu[12] toh here js dynamically searchin only stu["12"]
// means [] mein obj likh ke kisi bhi key types ko access kiya ja sakta hai

// question 2: 