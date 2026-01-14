// java script is interpreter langugage , in this code is executed line by line during the runtime . it does not produce a seperate , permanent output file .

//words vs keywords 
// js mein aise words jinse kuch ho skta hai wo saaare wordds js ke keywords hai 

//  var , let, const line by line comparision 

// var username = "harsh saini";
// var username = "(23+12*18)";
// var use krne ka simple matlb hai , if u need var in future then it will always be there , means variable ki value hamesha vahi rhegi orr tuum kabhi bhi us value ko access sakte ho 

// (variable likhne k tarike )

// var a;
// var a = 12;
// let a;
// let a = 12;
// const a = 12; ( ye ek constant hai )

//declaration and inmitialization

// var a; (declare karna)
// var a = 12; (declare and initialize)

// var a = 12;
// ( jab variable (var) me banega isme kuch problems hai jese 
//    1. ye apne aap ko window mein add krta hai 
//    2. ye humesha function scoped hota hai (mtlb ye humesha function me use ho skta hai)
//    3. aap firse declare krr skte ho and error nahi aayega 
// )

// let a = 12;
// let a = 13;
// (isme error aane lag jaayega )


// var a = 12;
// var a = 13;
// (no error will be there)

// tdz - utna area jitne mein js ko paata to hai ki variable exist karta hai par wo aapko value nahi de skta (temporal dead zone)

// hoisting -> ek variable ko jab js me banate hai to wo variable 2 hisso me toot jata hai and uska declare part upr chala jata hai and uska intialization part neeche reh jata hai 

// var - hoist - undefined ( value set hoti hai )
// let - hoist - X (value set nahi hoti , reffrence error aata hai )
// cnst - hoist - X ( value set nahi hoti , reffrence error aata hai )

// console.log(a);
// var a = "harsh";

// console.log(age);
// let age = 25; (tdz banjaayega and refrence error milega , initialize nhi hoga)

// var x = 1 ;//global scope bangaya hai ye 
// {
//     var x = 2;
// }
// console.log(x);
// (reassign hogaya hai to abb iska value 2 milega 1 nahi )

// let a = 10;(global and block scope dono ban gaya hai , 2 values print hongi)
// {
//     let a = 20;
//     console.log("inside:",a);
// }
// console.log("Outside:", a);

// DATA TYPES-

// -->  (string , boolean, [] , {} , () , null , undefined , NaN , Symbol , bigInt .)
 

// primmitves - aisi saari values jinko copy karne par tumhe ek real copy mill jaayegi (string , number , bolean , null , undefined , symbol , bigint)

// refrences - inko copy krne par real copy nahi milegi prr aapko refrence milega parent ka (array , onjects and functions)

// array = [] , object = {} , function = () 

// Null -  null ka matlb hai aapne jaan boojh kar koi value nahi di. ( ye apan khuud se dete hai )
// Undifined - iska matlab ki aapne ek variable banaya aur usey value nahi di to jo value by default mili wo hai undefined.(orr ye js khuud deta hai agar apan koi value empty chhod dete ahi to.)

// symbol -> unique immutable value.

//future hum koi libraries use karenge ab is case me un libraries me kai baar kuch fields hoti hai jinse similar hum bhi bana dete hai aur galti se humari banai hui fields us library ki origional fields ko change kar dete hai.

// let u1 = symbol("uid");
// let u2 = symbol("uid");

// they both u1 u2 are different.

// Dynamic typing -> js mein static typing nahi hai and yaha par hai , dynamic typing jiska matlb hai aap data ko change kar sakte ho kynki yaha par dynamic data types hai.

// typeof quirks ( e.g., typeof null == 'object'
//                       typeof NaN == 'number')

// type coercion -> concept jisme aapka ek type automatically convert hojayegaa.

// falsy values - 0 , false , "" , null , undefined , NaN , document.all

// true values - rest all are true values.

// let length = 10;
// console.log(typeof(length))

// BigInt
// let x = 2356124512837120837n;
// let y = BigInt(7634786246532402304)
// console.log(typeof(x,y))

// string 
// let color = "yellow";
// let lastname = "harsh saini";

// boolean 
// let x = true;
// let y = false;

// undefined 
// let x;
// let y;
// console.log(typeof(x))

// Nul
// let x = null;
// let y = null;
// console.log(typeof(x))

// Symbol
// let x = symbol(Harsh);
// let y = symbol(Saini);

// Object
// const Harsh =  {Firstname:"Harsh",Lastname:"Daddy",Relation:"Is My Lovely Father.https://www.youtube.com/@sheryians"}

// Object inside the object 
// let Person = {Name:"Harsh" ,Surname:"Saini",
//     Address:{
//         State:"Rajasthan",District:"jhunjhunu"
//     }
// };

// // Array Object 
// const cars = ["Honda", "Volvo", "BMW",['a','b',['sex','sux',['karna','hai','mereko']]]];

// // Date Object  
// const date = new Date("2022-03-25")

// function Sex(){
//     let Harsh = 1;
//     let shravani = 2;
//     console.log(Harsh + shravani)
// }

// Sex() 

///-----------------------"Positive and negative numbers"----------------------
// let number = Number(prompt("Type your number:"))

// let result = (number < 0) ? "The number is negtive" : "The number is Positive"
// console.log(result)



///-----------------------"Odd and even Number"--------------------------------

// number = prompt("Type your number:")
// if (number%2 === 0){
//     console.log("The number is Even")
//    } else{
//         console.log("The Number is odd")
//     }



// -------------------------"Marks Question"----------------------------------

// let score = Number(prompt("What is your score:"))
//      if(score > 0 && score < 30){console.log(`Bhen k lund ${score} me kuch nahi hota , padhle kuch.`)}
//     else if (score >=30 && score < 50){console.log(`BSDk ${score} me kya hi ukhaad liya tune.`)}   
//     else if (score >= 50 && score < 80){console.log(`Haan bsdk ${score} me kuch nahi hota orr ache se padh.`)}
//     else{console.log(`Haan Gaand me Daal le apne ${score} marks ko.`)}



//------------------------"Marks switch method"-------------------------------

// let score = Number(prompt("What is your score:"));

// switch (true) {

//     case score > 0 && score < 30:
//         console.log(`Bhen k lund ${score} me kuch nahi hota, padh le.`);
//         break;

//     case score >= 30 && score < 50:
//         console.log(`BSDk ${score} me kya hi ukhaad liya tune.`);
//         break;

//     case score >= 50 && score < 80:
//         console.log(`Haan bsdk ${score} me kuch nahi hota aur ache se padh.`);
//         break;

//     case score >= 80:
//         console.log(`Haan gaand me daal le apne ${score} marks ko.`);
//         break;

//     default:
//         console.log("Invalid score")
// }


//-----------------------"For Loop Question"----------------------------------
// for( i = 1 ; i <= 20 ; i++){
//     console.log(`Harsh ne Varun ki ${i} baar gaand Mari`)
// }


// ---------------------- Table -----------------------
// for(i =5  ; i<=50 ; i+=5){
//     console.log(i)
// }


// ---------------------"Another Table Question"-------------------------------
// let n = Number(prompt("Which Table do you want?"))
// for(i = 1 ; i < 11 ; i++){
//     console.log(`${n} X ${i} = ${n*i}`)
// }


//---------------------------"While Loop"--------------------------------------

//------------------- 10 to 0 count -----------
// let i = 10
// while(i >= 0){
//     console.log(i)
//     i--
// }


//--------------------------"Even numbers"------------------------------------

// let i = 3
// while(i >= -10){
//     if(i !==0 && i %2 ===0){
//     console.log(i)
//     }
//     i--
// }


//---------------------------"Pallindrome"-------------------------------------

// let str = prompt("Type your name here:");
// let j = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     j = j + str[i];
// }
// if(j === str){
//     console.log(`${str} is a pallindrome`)
// }    
// else{
//       console.log(`${str} is not a pallindrome.`)
// }

 