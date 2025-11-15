// DATA TYPES TYPE
// 1:PRIMITIVE:ek simple value hoti hai jo directly variable mein store hoti hai
// eg of primitive:String,number,boolean,null,bigint
// eg:a=5;b=a;a=a=2;console.log(a):7 and console(b):5 matlab when we copy primitve it copies directly values not refereneces 
// IMPORTANT:matlab do jagah banta hai memory mein and a hai also 5 and b has also 5

// 2:REFERENCE:matlab variable directly data nhi rakhte hai balki wo ek memory address ke reference ke trrah use hote hai
// eg of reference:array,objects ,function and date
// IMPORTANT POINT:when you copy values in reference the values not copied the exact values
// eg:let obj1={name:"aryan"}; let obj2=obj1; obj2.name="kumar"; console(obj1) and console(obj2) both give same result name:kumar
// BECAUSE:Both variables point to same object in memory

// SOME PRIMITIVE TYPES:
// 1:null:jab jaise humein nahi pata koi valkue agar nahi pata hota hai toh hum usko null likh dete hai
// eg:let name=null;
// 2:undefined:jab hum value kuch define hio nahi karte uss variable ko
// eg;let name; console(name):undefined

// DYNAMIC TYPING:
// what:matlab js mein humko variable banate samay usko batana nahi padta hai ki wo kaun sa type hai(number,string) isliye hum uski value ko change kar sakte hai jaise hum value dete hai uske hisab se datatype uska define ho jaata hai
// let a=5; a="aryan"; but in other language if we have to define the datatype like eg:int a=5

// TYPE COERSION:
// WHAT: का मतलब है कि JavaScript अपने आप एक data type को दूसरे data type में बदल देता है, जब operations (जैसे addition, comparison) में ज़रूरत होती है।
// 1:+:as addition can do 2 things like concat and addition thats why when you do
// eg:"5"+2="52"[as jab beech mein + hota hai aur ek string hota hai toh js ko lagta hai ki cioncat karna hai]
// 2:(-):as substrtaction do only minus thats awhy when you do
// eg:'5'-2=3(as minus can do only subs thats why string automatically converted to number here)

// TRUTHY AND FALSY VALUES:means in js har value ko truthy and falsy value mein bata gaya hai taaki jab agar condition mein if(true ) ki jagah if(12) likh de toh js ko samjh jaaye hm kya karna cha rahe hai
// falsy values:0,false,"",null,undefined,NaN others are truthy values

// NaN:NaN का मतलब है "Not a Number" (संख्या नहीं है)
// जब आप JavaScript में कोई ऐसा calculation करते हैं जिसका जवाब valid number नहीं होता,तब JavaScript आपको NaN देता है। EG:2*'abc' or "abc"/2


