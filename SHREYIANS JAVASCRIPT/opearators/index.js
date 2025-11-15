// arithmetic:(=,-,*,/,**)
// COMPARISON :
// DIFFERENEC BETWEEN "==" AND "==="
// ==:SIRF VALUE CHECK KARTA HAI and data type ki parvah nahi karta hai ismein check karte samay type corsion ho jaate hai 
// ===:values and data types dono strictly check hote hai ismein check karte samay no automatically conversion
// eg:console("5"==5)=>true BUT console("5"===5) => gives false as here no string conversion to number
// eg:1==true{true} BUT 1===true{false}

// TERNARY :(CONDITION):sahi hone pe code jo chalega:false pe
// eg:12>13?console("true"):console("false"){false as condition is false}

// TYPEOF AND INSTANCEOF
// typeof का उपयोग किसी variable का basic data type जानने के लिए किया जाता है, जैसे कि Number, String, Boolean आदि।
// INSTANCEoF ये बताता है कि कोई object किसी खास class या constructor का हिस्सा है या नहीं।
// eg:typeOf 5{number},typeOf 'abc'{string} and instance of eg:let arr=[1,2,3] console(arr instanceOf object){true} console(arr instanceOf Object)[true]

// !![is used to find any value as truthy or falsy value] like eg:!!0{its value is 0} and !!12{true}
// usecase:ye humein find karne mein madad karta hai ki value truthy hai ya falsy
