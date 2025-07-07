// console.log('hello') 
// console.log('i like pizza') 

// window.alert('this is an alert')


// document.getElementById('myH1').textContent= 'heloo'
// document.getElementById('myP').textContent = ' i like pizza'

// let age= 12
// let price = '5k'
// let gpa = 8.9
// let email = 'bro@gmail.com'

// console.log(`You are  ${age} years old`)
// console.log(`the monthly eanings is ${price}`)
// console.log(`your grada point avage is ${gpa}`)
// console.log(typeof age)
// console.log(`your gpa is ${gpa}`)
// console.log(typeof age)
// console.log(`your email is ${email}`)

// let online = "false"
// console.log(typeof online)


// let fullName = 'Bro Code'
// let age = 25
// let student = false

// document.getElementById("p1").textContent = `your name is ${fullName}`
// document.getElementById("p2").textContent = ` you are ${age} old`
// document.getElementById("p3").textContent = student

// let student = 3

// student = student **2   // exponent

// student += 1
// student -= 1
// student *=2
// student /=2
// student **= 2
// student %= 2
// console.log(student)

// <-- operation  precedence -->
// 1. parathesis ()
// 2.exponent 
// 3.multoplication & division & modulos
// 4. addition & substraction

// let result = 1+2*3 + 16
// in first step  2*3 will operate = 6
// then 6 + 1 = 7
// then 7 + 16 =23
// console.log(result)

// let result = 12%5+8/2
// first step 12%5=2
// second step 8/2 = 4
// third step 2+4 = 6
// console.log(result)
//          

// <-- accepting input from user -->
// two way easy way -> window prompt
// professional way -> html textbox
// window prompt way 
// let username
// username= window.prompt("what is your username")
// console.log(username)

// let username
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("mytext").value
//     document.getElementById("myH1").textContent = `Hello ${username}`
//     // console.log(username)
// }

// <-- type conversion -->
// let age = window.prompt("how old are you?")
// age = Number(age)      // it convert the given function into number type
//                    // without this function the addition operation is converted into concatination operation due to the input age is in the type of string 
// age+=1
// console.log(age , typeof age)

// let x = '0'
// let y = '0'
// let z = '0'

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)


// let pi = 3.14159
// let radius
// let circumference

// radius = window.prompt('enter the radius of a circle')
// radius = Number(radius)
// circumference = 2 * pi * radius
// console.log(circumference)

// document.getElementById('mySubmit').onclick = function () {
//    radius= document.getElementById("mytext").value
//    radius = Number(radius)
//    circumference = 2 * pi * radius
//    document.getElementById("myH3").textContent = circumference + " cm"
// }
//          

// counter |\/
// const decreaseBtn = document.getElementById("decreaseBtn")
// const resetBtn = document.getElementById("resetBtn")
// const increaseBtn = document.getElementById("increaseBtn")
// const countLabel = document.getElementById("countLabel")
// let count = 0

// increaseBtn.onclick = function() {
//     count++
//     countLabel.textContent = count
// }
// decreaseBtn.onclick = function() {
//     count--
//     countLabel.textContent = count
// }
// resetBtn.onclick = function() {
//     count = 0
//     countLabel.textContent = count
// }
// end of counter

// <-- Math --> is a built-in object that provide a collection of properties and methods
// console.log(Math.PI)
// console.log(Math.PI)

// let x = -45.56
// let y = 2
// let z = 25

// z = Math.round(x)
// z = Math.floor(x)
// z = Math.ceil( x )
// z = Math.trunc(x)  // it returns the integer part of a number by removing fractional part without rounding 
// z = Math.pow(x,y)
// z= Math.sqrt(x)
// z = Math.floor(x)
// z= Math.log(x)   // for natural log
// z = Math.sin(x)
// z = Math.tan(x)
// z = Math.abs(x)
// z = Math.sign(x)   // it returning the sighn of the number

// console.log(z)

// let max = Math.max(x,y,z)
// let min = Math.min(x,y,z)
// console.log(max)
// console.log(min)

// let randomNnum = Math.random() // returning the random value between 1 & 0
// console.log(randomNnum)

// let randomNnum = Math.floor(Math.random()*6) // it return the value between 0 to 6 also without fractional part
// console.log(randomNnum)

// const min = 50
// const max = 100
// let randomNnum = Math.floor(Math.random() * max) + min
// console.log(randomNnum)

// const myButton = document.getElementById("myButton")
// const myLabel1 = document.getElementById("label1")
// const myLabel2 = document.getElementById("label2")
// const myLabel3 = document.getElementById("label3")
// const min = 1
// const max = 6
// let randomNnum1
// let randomNnum2
// let randomNnum3

// myButton.onclick = function() {
//     randomNnum1 = Math.floor(Math.random() * max) + min
//     myLabel1.textContent = randomNnum1
//     randomNnum2 = Math.floor(Math.random() *max) +min
//     myLabel2.textContent = randomNnum2
//     randomNnum3 = Math.floor(Math.random() * max) + min 
//     myLabel3.textContent = randomNnum3

// }

// <-- if statements --> 

// let age = 13
// if(age >= 18){
//     console.log("you are enough age to enter this site")
// }
// else{
//     console.log("yoou must be  18+ to enter this site")
// }
// let time = 14 

// if(time < 12){
//     console.log("Good Morning")
// }else{
//     console.log("good afternoon")
// }

// let isStudent = true

// if(isStudent){
//     console.log("yr a student")
// }else{
//     console.log("yr not a student")
// }

// let age = 105
// let hasLicence = true

// if (age >= 18){
//     console.log("yr enough of drive")
//     if(hasLicence){
//         console.log("you have your license")
//     }else{
//         console.log("you do not have your license")
//     }
// }else{
//     console.log("age is not enough")
// }

// const mytext = document.getElementById("mytext")
// const mySubmit = document.getElementById("submit")
// const resultElement = document.getElementById("resultElement")
// let age 
// mySubmit.onclick = function() {
//      age = mytext.value
//      age = Number(age) // javascript defaulty any value form user is consider as string due to that the string is converted into number
//     if (age >= 100){
//         resultElement.textContent = `you are too old to enter`
//     }
//     else if(age === 0){
//         resultElement.textContent = `you are not able to enter`
//     }
//     else if(age >= 18){
//         resultElement.textContent = `you are enough to enter`
//     }
//     else{
//         resultElement.textContent = `you are not eligible`
//     }
// }

// const fname = document.getElementById("ftext")
// const mname = document.getElementById("mtext")
// const lname = document.getElementById("ltext")
// let submitbtn = document.getElementById("submitbtn")
// const final =document.getElementById("final")
// submitbtn.onclick = function(e) {
//     e.preventDefault()
//     final.textContent = (`${fname.value} ${mname.value} ${lname.value}`)
// }


// const myCheckBox = document.getElementById("myCheckBox")
// const visaBtn = document.getElementById("visaBtn")
// const masterCardsBtn = document.getElementById("masterCardsBtn")
// const payPalBtn = document.getElementById("payPalBtn")
// const mySubmit = document.getElementById("mySubmit")
// const subResult = document.getElementById("subResult")
// const paymentResult = document.getElementById("paymentResult")

// mySubmit.onclick = function() {
//     if(myCheckBox.checked){
//         subResult.textContent = `you are subscribed!`
//     }
//     else {
//         subResult.textContent = `you are not Subscribed!`
//     }

//     if(visaBtn.checked) {
//         paymentResult.textContent = `you are paying with Visa`
//     }
//     else if(masterCardsBtn.checked) {
//         paymentResult.textContent = ` you are paying with MasterCards`
//     }
//     else if(payPalBtn.checked) {
//         paymentResult.textContent = `you are paying with Paypal`
//     }
//     else{
//         paymentResult.textContent = `you must select a payment type`
//     }
// }


// <-- ternary operator --> conditional operator . A operator with three operand it optimize the code  more simple , it can replace if statements 
// let age = 2

// age>= 18 ? console.log( "you are eligible") : console.log("you are not eligible")

// let time = 9
// let greeting = time<12 ? "good morning" : "good afternoon"
// console.log(greeting)

// const myCheckBox =document.getElementById("myCheckBox")
// const visaBtn = document.getElementById("visaBtn")
// const masterCardsBtn =document.getElementById("masterCardsBtn")
// const payPalBtn = document.getElementById("payPalBtn")
// const mySubmit = document.getElementById("mySubmit")
// const subResult = document.getElementById("subResult")
// const paymentResult = document.getElementById("paymentResult")

// mySubmit.onclick = function() {
//     myCheckBox.checked ? subResult.textContent = `you are subscribed` : subResult.textContent = `you are not subscribed`
//     visaBtn.checked ? paymentResult.textContent = `you are paying through Visa` : (masterCardsBtn.checked ? paymentResult.textContent = ` you are paying through master card` : (payPalBtn.checked ? paymentResult.textContent = `you are paying through Paypal` : paymentResult.textContent= `you must select a payment option`))
    
// }

// const text1 = document.getElementById("text1")
// const enter = document.getElementById("enter")
// const result = document.getElementById("result")

// enter.onclick = function() {
//     Number(text1.value) >= 100 ? result.textContent = "You have 5% discount" : result.textContent = "You have 2% discount"
// }

// let day = 1

// switch(day) {
//     case 1: console.log("It is Monday")
//         break
//     case 2: console.log("It is Tuesday")
//         break
//     case 3: console.log("It is Wendnesday")
//         break
//     case 4: console.log("it is thursday")
//         break
//     case 5: console.log("It is Friday")
//         break
//     case 6: console.log("it is Saturday")
//         break
//     case 7: console.log("It is SUNDAY..!")
//         break
//     default: console.log("Invalid")
// }

// const text1 = document.getElementById("text1")
// const enter = document.getElementById("enter")
// const result = document.getElementById("result") 

// enter.onclick = function() {
//     switch(Number(text1.value)){
//         case 1: result.textContent = "Monday"
//             break
//         case 2: result.textContent = "tuesday"
//             break
//         case 3: result.textContent = "Wenesday"
//             break
//         case 4: result.textContent = "Thursday"
//             break
//         case 5: result.textContent = "Fridday"
//             break
//         case 6: result.textContent = "Saturday"
//             break
//         case 7: result.textContent = "Sunday"
//             break
//         default: result.textContent = "Invalid"
//     }    
// }

// <-- string methods -->

let username = "Brocode   "
// console.log(username.charAt(0))  // it gives a character in the string at a specific position
// console.log(username.indexOf("B"))  // it gives index of a specific character
// console.log(username.length)       // it gives the length of the string
console.log(username.trim())         // it trim the the whitespace at end of the string


//             