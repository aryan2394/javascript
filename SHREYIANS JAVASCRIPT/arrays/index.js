// ARRAYS IN JS CAN HOLD MULTIPLE VALUE OF DIFFERENT TYPES EG:LET ARR=[10,20,true,"aryan"]
// ARRAY METHODS
// let arr=[1,3,2];
// 1:PUSH:push values to the last in array arr.push(4); console.log(arr); [ 1, 3, 2, 4 ]

// 2:POP:REmoves from last of the array ar.pop(){removes 2 from last}

// 3:SHIFT:remved values from start arr.shift();{removes 1}

// 4:UNSHIFT:ADDS INTO START IN ARRAY arri.unshift(4){4,1,3,2};

// 5:SPLICE:it chnge value into acctual array like first 4 
// let arr=[1,2,3,4];
// console.log(arr);
// arr.splice(1,2);// toh basically ye kya kar raha hai ki splice(index,kitni value uss index se hatani hai aapko aage ki){1,2} means kya hai ki 1st index se value hatana shuru karo aur do values hatao
// console.log(arr);

// 6:SLICE:it retrun the copy of the array m,eans it return new array from the array it not modifies the original array
// let newarray=arr.slice(0,3);
// console.log(newarray); [ 1, 2, 3 ]

// 7:REVERSE:it reverse the original array arr.reverse(); console.log(arr);{4,3,2,1}

// 8:SORT:it works properly with strings but not with numbers properly 
// let a=["banana","apple","cherry"];
// a.sort();
// console.log(a);

// let numbers=[100,50,60,30];
// numbers.sort();
// console.log(numbers);{[ 100, 30, 50, 60 ]} output is wrong so when you want to sort a numbers aRRAY you have to use sort with compare function 
// numbers.sort(function(a,b)
// {
//     return a-b; //ascxending way and descending is return b-a;
// })
// console.log(numbers);{[ 30, 50, 60, 100 ]}

// 9:forEach,map,filter,reduce ye sab ek function hai aur parametre mein bhi ek fnc hi accept karte hai aur uss fnc mein ek variable hota hai jo uss array ke individual elements ko represent karta hai
// for eg:
// let arr=[1,2,3,4,5];
// 1:forEach:
// arr.forEach((val)=>
// {
//     console.log(val);//matlab pahli baar mein 1 aaya hai ab uspe jo bhi anmdar fnc hai wo chalega phir wapas ek val mein dusri value aayegi phir fnc perform hoga and same for all values
// })
// output is 1
// 2
// 3
// 4
// 5
// IMPORTANT POINT:you cannot modufy elements by using foreach in arr directly means it is used to perform action on individual emenets not for changiong or modifying array

// 2:MAP:it is returning new array based on the fnc provide inside the map function{means it does not modify the original array}
// let doubledvalue=arr.map((val)=>
// {
//     return val*val;
// })
// console.log(doubledvalue);
// USECASE:when you wanrt to create new array based on the original array elements

// 3:filter:it is also returning new array but it used for filtrering elements from the elements
// means it you want to create a new array but in that only you want evene elements
// let arr=[1,2,3,4,5,6,7,8];
// let newarr=arr.filter((val)=>
// {
//     if(val%2==0)
//         return true;//matlab jaha bhi condition sahi hoga waha pe ye va;lue chali jayegi matlab ye arr ke elements se hi filter karke ek naya array banta hai
// })
// console.log(newarr);[ 2, 4, 6, 8 ]

// 4:REDUCE:it basically what do that it reduces array to single value means isse ek store karne ke liye ek variable bhi chahiye jispe ye baar baar iterate karein aur value store rakhe
// let ans=arr.reduce((accumulator,val)=>
// {
//     return accumulator+val;
// },0)
// console.log(ans);
// ye chal kaise raha hai:: reduce has 2 thing s that is acc and val {val matlab array ka individual elements and acc jo hai ek storing variable ki tarah hai jo ki har baar add ke baad value currently abhi kya chal rahi hai wo batayegi}
// toh matlab accumulator storing variable hai and val jo hai individual elemnts hai and 0 jo hai ye define karta hai ki value of accumulator in starting is 0

// 5:find:ye kya karta hai ki array mein se find karta hai particular condition se aur jasie hi usne find kar liya wo return kar dega
// let arr=[
//     {id:1,key:1},{id:2,key:2},{id:3,key:1}
// ]
// let value=arr.find((val)=>
// {
//     return val.key===1;
// })
// console.log(value);

// 6:some :some check karta hai ki agar array mein se agar koi bhi value condition true ho gayi toh return true kar dega
// and every:saare values pe agar condition vaid hoga tabhi return karega

// let arr=[14,65,43,3,65]
// let value=arr.some((val)=>
// {
//     return val>63;
// })
// console.log(value);

// let arr=[14,65,43,3,65]
// let value=arr.every((val)=>
// {
//     return val>63;
// })
// console.log(value);

// DESTRUCTURING AND SPREAD OPERATOR
// 1:DESTRUCTURING:MATLAB ARRAY KE ELEEMNTS KO VARIABLES MEIN TODNA 
// let arr=[1,2,3,4,5];
// let[a,b]=arr;
// console.log(a,b);
// let[a,b,,d]=arr;
// console.log(a,b,d);

// 2:spread operator:yeh array ke elements ko spread karta hai phir hum jab hum[] laga dete hai tab ye array mein elemets aare badal jaate hai
// let nwarr=[...arr];//isse humne new arr array create kar diya hjai ye reference nahi ye naye address pe bana gaya ab
// console.log(nwarr===arr);

// PRACTICE QUESTIONS:
// 1;ADD RED AND BLUE AT INDEX 1
// let arr=["grreen","orange"];
// arr.splice(1,0,["red","blue"]);
// console.log(arr);