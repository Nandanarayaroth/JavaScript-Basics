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

// html  input box way, 
// let username
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("mytext").value
//     document.getElementById("myH1").textContent = `Hello ${username}`
//     // console.log(username)
// }

// <-- type conversion -->
// let age = window.prompt("how old are you?")
// age = Number(age)      // it convert the given value  into number type
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

// let username = "   Brocode   " 
// console.log(username.charAt(0))  // it gives a character in the string at a specific position
// console.log(username.indexOf("B"))  // it gives index of a specific character
// console.log(username.length)       // it gives the length of the string
// console.log(username.trim())         // it trim the the whitespace at starting and ending of the string
// console.log(username.toUpperCase())
// console.log(username.toLowerCase())
// console.log(username.repeat())         // it repeat the string by you enterned number of time if you didn't enter any number it does not repeat
// console.log(username.startsWith("B"))    // check the string is starts with specific letter or not it returns a boolen value -> true or not
// console.log(username.endsWith(" "))   //  it check the string is ends with a specific character or not it also return a boolean value

// practices of string methods |\/

//const text = document.getElementById("text1").value --> X it wrong  X because it was out side of the button click that means it get the value as soon as (or when the) page is loads that means before the user even types anything that time the input probably empty at that time so that our functions are cann't proparly done
// const enter = document.getElementById("enter")
// const result = document.getElementById("result")
// enter.onclick = function() {
//     const text = document.getElementById("text1").value
//     if(text.startsWith("N")){
//         result.textContent = "Hello Nandana"
//     }else if(text.startsWith("S")){
//         result.textContent= "Hello Salina"
//     }else if(text.startsWith("V")){
//         if(text.endsWith("j")){
//             result.textContent="Hello Valsaraj"
//         }else if(text.endsWith("a")){
//             result.textContent="Hello Vandana"
//         }else{
//             result.textContent="Hi"
//         }
//     }else{
//         result.textContent = "Namasthe"
//     }
// }


//  <-- String slicing -->  creating a substring from a portion of another string  string.slice(start,end)    
// const fullName = "Nandana Rayaroth"
// let firstName = fullName.slice(0)   //  Nandana Rayaroth -> 0 to above
// let firstName = fullName.slice(0,1)    //  N ->first element   
// let firstName = fullName.slice(3)    // dana Rayaroth -> 3 rd intex and above 
// let firstName = fullName.slice(-1)      // last index 
// let firstName = fullName.slice(-2)      // second last index
// let lastName = fullName.slice(8,16)
// console.log(firstName)
// console.log(lastName)

// const fullName = "Broseph Code"

// const firstName = fullName.slice(0,fullName.indexOf(" "))
// const lastName = fullName.slice(fullName.indexOf(" ")+1)
// console.log(firstName)
// console.log(lastName)

// for practice |\/

// const enter = document.getElementById("enter")
// const result = document.getElementById("result")
// const result2 = document.getElementById("result2")

// enter.onclick = function() {
//     const text= document.getElementById("text1").value
//     const firstName = text.slice(0,text.indexOf(" "))
//         result.textContent = `Your first name is, ${firstName}`
//     const lastName = text.slice(text.indexOf(" ")+1,)
//         result2.textContent = `your last name is, ${lastName}`

//         console.log(text.slice(3,10))    // characters between 3 and 10 including 3

// }


// const email = "Bro@gmail.com"

// let username = email.slice(0,email.indexOf("@"))
// let extension =email.slice(email.indexOf("@")+1)

// console.log(username)
// console.log(extension)

// const enter = document.getElementById("enter")
// const result = document.getElementById("result")
// const result2 = document.getElementById("result2")
// enter.onclick = function() {
//     const text= document.getElementById("text1").value
//     const username = text.slice(0,text.indexOf("@"))
//     const extension = text.slice(text.indexOf("@")+1)
//     result.textContent = `${username}`
//     result2.textContent = `${extension}`
// }


// <-- Method Chaining --> calling a method  after another in a continuous line 

// no method chaining|\/
// let username = window.prompt("enter your username")

// username = username.trim()
// let letter = username.charAt(0)
// letter = letter.toUpperCase()

// let extraChar = username.slice(1)    // by slice(1) gets all elements of username expect first element that means 0th intex
// extraChar = extraChar.toLowerCase()
// username = letter + extraChar
// console.log(username)

// with method chaining |\/
// let username = window.prompt("Enter your username")
// username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase()       // each method returns a value and next method is called on that returned value.
// console.log(username)      // cleaner and shorter code,no need extra variables
// demerit when debuging we can't inspect intermediate rsult easily 


// <-- Logical operators -->  used to combine or manipulate boolean values 
//                  AND = &&, OR = ||, NOT = ! 

// const temp = 200

// if(temp > 0 && temp <= 30){
//     console.log("The weather is GOOD")
// }else{
//     console.log("the wether is not good")
// }

// let ncc = false
// let nss = true

// if (ncc || nss){
//     console.log("YOu have greate experince")
// }else{
//     console.log("you have normal experince")
// }

// const isSunny = true

// if (! isSunny){
//     console.log("It is Sunny")
// }else{
//     console.log("it is cloudy")
// }

// let ncc = false
// if(! ncc){
//     console.log("you can participeate elaction campion")
// }else{
//     console.log("you can't")
// }


// <-- assignment operator --> 
// = assignment operator
// == camparison operator (compare [if values are equal,don't care about the datatype )
// === strict equality operator (compare if values & datattype are equall)
// != inequality operation or notequal to operation
// !== strict inequality operator

// const PI = 3.14

// if(PI == "3.14") {   // == it only consider the value not consider datatype
//     console.log("That is pi")
// }else{
//     console.log("that is not pi")
// }

// const PI = 3.14
// // if(PI === "3.14"){    // it consider data type also so it is false
// if(PI === 3.14){       // now it is true
//     console.log("it is PI")
// }else{
//     console.log("it is not PI")
// }

// const PI = 3.14
// if(PI != "3.14") {           // equal  it does not consider the datatype
//     console.log("this is not pi")
// }else{
//     console.log("this is pi")
// }

// const PI = 3.14
// // if(PI !== "3.14"){              // returns false becuase it consider the data type
// if(PI !== 3.14){
//     console.log("this is not pi")
// }else{
//     console.log("this is pi")
// }


// <-- While loop --> repeat some code when the condition is true

// without while
// let username = ""
// if(username === "") {
//     console.log("you didn't enter your name")
// }
// else{
//     console.log(`Hello ${username}`)
// }

// with while
// let username = ""
// while(username = 'hello'){
//     console.log("hi")
// }

// let loggedIn = false
// let username
// let password
// while(!loggedIn) {
//     username = window.prompt(`Enter your username`)
//     password = window.prompt(`Enter your password`)
//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true
//         console.log("you are logged in!")
//     }
//     else{
//         console.log("Invalid username or password")
//     }
// }

// <-- Do while -->
// let username
// do{
//     username = window.prompt("enter your name")
// }while(username === "" || username === null)
// console.log(`hello ${username}`)


// <-- for loop -->  repeat some code a limited amount of times

// for( let i=0; i<=20; i++){
//     if(i == 13) {
//         // continue         // jumbping statement it jum next statement
//         break             // it jump entirely from the loop
//     }
//     else{
//         console.log(i)
//     }
// }


//  NUMBER GUESSING GAME
// const minNum = 1
// const maxNum = 100
// const answer = Math.floor(Math.random() *(maxNum - minNum + 1))
// // const answer = Math.floor(Math.random() * 100)

// let attempts = 0
// let guess 
// let running = true

// while(running){
//     guess = window.prompt(`Guess a number between ${minNum} ${maxNum}`)
//     guess = Number(guess)
//     if(isNaN(guess)){
//         window.alert("please enter a valid number")
//     }
//     else if(guess<minNum || guess > maxNum){
//         window.alert("please enter a valid number")
//     }
//     else{
//         attempts++
//         if(guess < answer){
//             window.alert("too low try again")
//         }
//         else if(guess > answer){
//             window.alert("too high try again")
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}.It took you ${attempts} attempts`)
//             running = false
//         }
//     }
    
// }


// <-- FUNCTIONS -->
// a section of reusable code,declare code once use it whenver you want ,call the function to execute that code.

// function happyBirthday() {
//     console.log("Happy Birthday")
//     console.log("happyy bday")
//     console.log("happy happy biday")
//     console.log("happy happy happy bday")
// }
// happyBirthday()

// function happyBirthday(age,name) {    // parameters
//     console.log("haappiee")
//     console.log("bdayyyy")
//     console.log(`happy ${age}th bithday ${name}`)
// }
// happyBirthday(20,"Nandana")        // arguments

// function add(x,y){
//     let result = x + y
//     return result
// }
// function substract(x,y){
//     return x-y
// }
// console.log(add(2,3))
// console.log(substract(8,2))

// function isValid (email){
//     if(email.includes("@")){            // it check a specific charater is present in a string and rturn true or false
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isValid("brocode@gmail.com"))

// <-- variable Scope --> where a variable is accessible (local & blobal)

// let x = 3
// function function1() {
//     let x = 1
//     console.log(x)   // 1 first local scope
// }
// function function2() {
//     let x=2
//     console.log(x)    // 2 first local scope
// }


// TEM CONVERSION

// const textBox = document.getElementById("textBox")
// const toFahrenheit = document.getElementById("toFahranheit")
// const toCelsius =document.getElementById("toCelsius")
// const result = document.getElementById("result")
// let temp

// function convert(){
//     if(toFahrenheit.checked){
//        temp = Number(textBox.value)
//        temp = temp * 9 / 5 + 32
//        result.textContent = temp.toFixed(1) + "°F"   // it is a built-in method with one precision 
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value)
//         temp = (temp - 32) * (5/9)
//         result.textContent = temp.toFixed(1) + "°C"
//     }
//     else{
//         result.textContent="select a unit"
//     }
// }
//  


// <-- ARRAY -->   a variable like structure that can hold more than 1 value

// let fruits = ["apple", "orange","banana"]

// fruits[2] = "coconut"// it replace value at index 2 (banana) into coconut
// fruits.push("coconut")   // push new value array at the end of array 
// fruits.pop()           // it pop the last value of array
// fruits.unshift("mango")   // it add mango at the starting of the array
// fruits.shift()  //  it remove the first element from array

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// let numOfFruits = fruits.length
// console.log(numOfFruits)
// let index = fruits.indexOf("apple")
// console.log(index)

// for(let i = 0; i < fruits.length; i+=1){
//     console.log(fruits[i])
// }

// for(let i = fruits.length -1; i>=0; i--){
//     console.log(fruits[i])
// }

// console.log(fruits.sort())         // by default it sort array in its order
// console.log(fruits.sort().reverse())

//<--2D ARRAY --> multidimensional array that stores a matrix of data in rows and columns. Ussseful for games, spreadsheets, or representing images
// [x, o, x]
// [o, x, o]
// [x, o, x]

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//                 ]
// matrix[0][0] = 'x'
// matrix[0][1] = 'o'
// matrix[0][2] = 'x'

// matrix[1][0] = 'O'
// matrix[1][1] = 'X'
// matrix[1][2] = 'O'

// matrix[2][0] = 'x'
// matrix[2][1] = 'o'
// matrix[2][2] = 'x'

// for(let row of matrix){
//     const rowString = row .join(' ')
//     console.log(rowString)
// }

//      <-- SPREAD OPERATOR -->  ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)
// used for copying arrays or object, combining array/object, expanding elements
// spread operator used for spread values out, it used in array,object,function calls

// let number = [1,2,3,4,5]
// let maximum = Math.max(...number)
// we can also let maxmimum = [...numbers, 6,7]  adding elements
// let minimum = Math.min(...number)
// console.log(maximum)

// let fruits= ["apple", "orange", "banana"]
// console.log(fruits)
// let vegetables = ["carrots", "celery", "potatoes"]
// console.log(vegetables)

// let foods = [...fruits, ...vegetables]   // it include both arrays 
// console.log(foods)

// let foods = [...fruits, ...vegetables, "eggs" ,"milk"] // it add two items to the end of the array
// console.log(foods)


// <-- REST PARAMETER -->  (...rest) allow a function work with a variable number of arguments by bunding them into an array 
// spread = expand an array into seperate elements 
// rest = bundles seperate elements into an array
// rest parameter used for to gather multople values into one it used in function parameter list

// function openFrige(...foods) {
//     console.log(foods)
// }
// const food1 = "pizza"
// const food2 = "hamburger"
// const food3 = "hotdog"
// const food4 = "sushi"
// const food5 = "ramen"

// const food1 = "pizza"            
// const food2 = "hamburger"
// const food3 = "hotdog"
// const food4 = "sushi"
// const food5 = "ramen"

// const food1 = "pizza"
// const food2 = "hamburger"
// const food3 = "hotdog"
// const food4 = "sushi"
// const food5 = "ramen"

// openFrige(food1, food2, food3, food3, food4, food5)

//    rest parameter uses the same syntax as the spread operator (...), but it is not the same thing.Rest is used in function parameters to collect values. Spread is used in function calls,arrays,or objects to expand values.

// function sum(...numbers){

//     let result = 0
//     for(let number of numbers ){
//         result += number
//     }
//     return result
// }

// const total = sum(1,2,3,4,5)
// console.log(`your total is ${total}`)

// function getAvg(...numbers){
//     let result = 0
//     for(let number of numbers){
//         result+= number
//     }
//     return result /numbers.length
// }
// const avgg = getAvg(75,100)
// console.log(avgg)


// function combineString(...strings){
//     return strings.join(" ")
// }

// const fulName = combineString("Mr.","Akash","k","v")
// console.log(fulName)
// const fullName = combineString("Mrs.","Nandana","Rayaroth")
// console.log(fullName)

// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value
//     const diceResult = document.getElementById("diceResult")
//     const diceImage = document.getElementById("diceImages")
//     const values = []
//     const images = []

//     for (let i=0; i<numOfDice; i++){
//         const value = (Math.random() *6) +1
//         values.push(value)
//         images.push(`<img src="dice-six-faces-one.png`,alt(`${value}`))
//     }
//     diceResult.textContent = `dice: ${values.join(`, `)}`
//     diceImage.innerHTML = images.join(``)
// }

// same
// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value
//     const diceResult = document.getElementById("diceResult")
//     const diceImage = document.getElementById("diceImages")
//     const values = []
//     const images = []

//     for (let i=0; i<numOfDice; i++){
//         const value = (Math.random() *6) +1
//         values.push(value)
//         images.push(`<img src="dice-six-faces-one.png`,alt(`${value}`))
//     }
//     diceResult.textContent = `dice: ${values.join(`, `)}`
//     diceImage.innerHTML = images.join(``)
// }


// Random password generator
// function generatePassword(length,includeLowercase, includeUppercase, includeSymbols){
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
//     const UppercaseChars = "ABCDEFHIJKLMNOPQRSTUVWXYZ"
//     const numberChars = "0123456789"
//     const symbolChars = "!@#$%^&*()_+-="
//     let allowedChars = ""
//     let password = ""
//     allowedChars += includeLowercase ? lowercaseChars : ""
//     allowedChars += includeUppercase ? UppercaseChars : ""
//     allowedChars += includeNumber ? numberChars : ""
//     allowedChars += includeSymbols ? symbolChars : ""

//     if (length <=0){
//         return `(password length must be at least 1)`
//     }
//     if(allowedChars.length === 0){
//         return `(At least 1 set of character needs to be selected)`
//     }

//     for(let i=0; i<length; i++){
//         const randomIndex = Math.random()*allowedChars.length
//         password += allowedChars[randomIndex]
//     }
//     return password;
// }
// const passwordLength =12
// const includeLowercase = true
// const includeUppercase = true
// const includeNumber = true
// const includeSymbols = true
// generatePassword(passwordLength, 
//                 includeLowercase, 
//                 includeUppercase, 
//                 includeNumber, 
//                 includeSymbols)
// console.log(`generated pass: ${password}`)


// <-- CALLBACK -->  a function that is passed as an argument to another function
//    used to handle asynchronous operations:
//      1. Reading a file
///     2. Network requessts
///     3. Interacting with databases

// hello()

// function hello(callback) {
//     // setTimeout(function() {
//         console.log("Hello")
//     // }, 3000)
//     callback()
// }
// function wait(){
//     console.log("wait")
// }

// function goodbye(){
//     console.log("Goodbye!")
// }
// sum(displayConsole, 1,2)
// function sum(callback, x, y){
//     let result = x + y
//     callback(result)
// }

// function displayConsole(result){
//     console.log(result)
//     document.getElementById("myH1").textContent = result
// }

// // function displayPage(result){
// //     document.getElementById("myH1").textContent = result
// // }

// <-- FOR EACH --> method used to iterate over the elements of an an array and apply a specified function (callback) to each element 
// array.forEach(callback)

// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach(double)
// numbers.forEach(triple)
// numbers.forEach(square)
// numbers.forEach(cube)
// numbers.forEach(display)
// function display(element){
//     console.log(element)
// }

// function double(element, index, array){
//     array[index] = element * 2
// }
// function triple(element,index, array){
//     array[index] = element * 3
// }
// function square(element,index,array){
//     array[index] = Math.pow(element,2)
// }
// function cube(element,index,array){
//     array[index] = Math.pow(element,3)
// }

// let fruits = ["apple", "orange", "banana", "coconut"]
// let vegetables = ["TOMATO", "CUCUMBER","CARROT", "POTATO"]
// // vegetables.forEach(lowerCase)
// vegetables.forEach(Captitalize)
// // fruits.forEach(upperCase)

// fruits.forEach(Captitalize)
// fruits.forEach(display)
// vegetables.forEach(display)

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase()
// }
// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase()
// }
// function display(element){
//     console.log(element)
// }
// function Captitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
// }


// <-- MAP METHOD -->        it accepts a callback and applies that fuction to each element of an array , then return a new array , map and foreach methods are very similar but the main difference is map returns a new array


// const numbers = [1, 2, 3, 4, 5]
// const squares = numbers.map(square)
// const cubes = numbers.map(cube)

// console.log(cubes)
// console.log(squares)
// function square(element){
//     return Math.pow(element, 2)
// }

// function cube(element){
//     return Math.pow(element, 3)
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"]
// const studentsUpper = students.map(upperCase)

// const studentsLower = students.map(lowerCase)
// const stdcrt = students.map(first)
// console.log(stdcrt)
// console.log(studentsUpper)
// console.log(studentsLower)
// function upperCase(element){
//     return element.toUpperCase()
// }
// function lowerCase(element){
//     return element.toLowerCase()
// }
// function first(element){
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
// }

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]
// const formattedDates = dates.map(formatDates)
// console.log(formattedDates)

// function formatDates(element){
//     const parts = element.split("-")  // it uses to break the string into an array eg: "2024-1-10" become ["2024", "1", "10"]
//     return `${parts[1]}/${parts[2]}/${parts[0]}`
// }


//  <-- FILTER METHOD -->  it creates a new array by filtering out elements                                                                          

// let number = [1,2,3,4,5,6,7]
// let evenNums = number.filter(isEven)
// let oddNums = number.filter(isOdd)
// console.log(oddNums)
// console.log(evenNums)

// function isEven(element){
//     return element % 2 === 0
// }
// function isOdd(element){
//     return element % 2 !== 0
// }

// const age = [16,17,18,18, 19,20, 60]
// const adult = age.filter(isAdult)

// console.log(adult)

// function isAdult(element){
//     return element >= 18
// }

// practice |\/

// const age = [16,17,18,19,20,60]
// console.log(age.map(isAdult))
// function isAdult(Element){        // bye using map it does not filter the already existing array but it create new array with same number of elements based on old array and condition  here the result is boolean array
//     return Element >= 18
// }

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]
// console.log(words.filter(wordlength))
// console.log(words.filter(wordlengthmin))
// function wordlength(element){
//     return element.length >= 6
// }

// function wordlengthmin(element){
//     return element.length < 6
// }

// <-- REDUCE -->   reduce the elments of an array to a single value

// const price = [5,30,10,25,15,20]

// const total = price.reduce(sum)
// console.log(`$${total.toFixed(2)}`)

// function sum(accumulator, element){
//     return accumulator + element
// }


// differnet types of function usages
// <-- FUNCTION DECLARATION -->  define a reusable block of code that perform a specific task
// function hello(){
//     console.log("Hello")
// }

// <-- FUNCTION EXPRESSIONS -->  a way to define function as values or variables
// const hello = function(){
//     console.log("Hello")
// }
// setTimeout(function(){
//     console.log("Hello")
// },3000)

// const number = [1,2,3,4,5,6]
// const square = number.map(function(element){
//     return Math.pow(element,2)
// })
// const cubes = number.map(function(element){
//     return Math.pow(element, 3)
// })
// const evenNums = number.filter(function(element){
//     return element % 2 === 0
// })
// const oddNums = number.filter(function(element){
//     return element % 2 !== 0
// })
// const total = number.reduce(function(accumulator,element){
//     return accumulator+element
// })
// console.log(square)
// console.log(cubes)
// console.log(evenNums)
// console.log(oddNums)
// console.log(total)


// <-- ARROW FUNCTIONS --> a way to write function expression good for simple functions that you use only once
// (parameter) => some code

// const hello = (name,age) => {
    
//     console.log(`Hello ${name}`);
//     console.log(`you are ${age} years old`);
    

    
// }
// hello("Bro" , 25)

// setTimeout(hello, 3000)
// function hello(){
//     console.log("Hello")
// }

// const numbers = [1,2,3,4,5,6]
// const square = numbers.map((Element) => Math.pow(Element,2))
// const cubes = numbers.map((Element) => Math.pow(Element,3))
// const evenNums = numbers.filter((Element) => Element % 2 === 0)
// const oddNums = numbers.filter((Element) => Element % 2 !== 0)
// const total = numbers.reduce((accumulator,Element) => accumulator+Element)

// console.log(square)
// console.log(cubes)
// console.log(evenNums)
// console.log(oddNums)
// console.log(total)


// <-- OBJECT --> A colleection of related properties and/or methods can represent real world objeccts like (people, products, places)
//  object = {key:value,
//              function()}

    // const person ={                   // object
    //     firstName: "Spongebob",
    //     lastName: "Squarepants",
    //     age: 30,
    //     isEmployed: false,
    //     sayHello: function(){console.log("Hi! I am Spongebob!")},
    //     eat: function(){console.log("I am eating a Krabby Patty")}
    // }
    // const person2= {
    //     firstName: "Partrick",
    //     lastName: "Star",
    //     age: 42,
    //     isEmployed: true,
    //     sayHello: () => console.log("Hi! I am Parrick"),
    //     eat: ()=>console.log("I am eating roasted beef")
    // }

    // console.log(person.firstName)          // accssing object elements by dot(.)
    // console.log(person.lastName)
    // console.log(person.age)
    // console.log(person.isEmployed)
    // person.sayHello()  
    // person2.sayHello()  
    // person.eat()
    // person2.eat()
    // console.log(person2.firstName)
    // console.log(person2.lastName)
    // console.log(person2.age)
    // console.log(person2.isEmployed)


// <-- THIS -->    refernce to the object where THIS is used (the object depends on the immediate context)
// person.name = this.name
// this keyword doesn't work with arrow function

// const person1 ={
//     name: "Spongebob",
//     favfood: "hamburgers",
//     sayHello: function(){console.log(`Hi! I am ${this.favfood}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favfood}`)}
// }
// const person2 = {
//     name: "Patrick",
//     favfood: "pizza",
//     sayHello: function(){console.log(`Hi! I am ${this.favfood}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favfood}`)}
//     // eat: () => {console.log(`${this.name} is eating ${this.favfood}`)}   // here this is doesn't work
// }

// person1.eat()
// person2.eat()


// <-- CONSTRUCTOR -->  a special method for defining the properties and methods of objects


// function car (make,model, year, color){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.color = color
// }
// we can also write like this 
function car (a, b, c, d){
    this.make = a
    this.model = b
    this.year = c
    this.color = d
}

const car1 = new car("ford", "Mustang", 2024, "red")
const car2 = new car("Chevrolet", "Camaro",2025,"blue")
const car3 = new car("Dodge","Charger", 2026, "silver")
console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color)
// const car1 ={
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     color:"red",
//     drive: function(){console.log(`You drive the ${this.model}`)}
// }
// const car2 ={
//     make: "Chevrolet",
//     model: "Camaro",
//     year: 2025,
//     color:"blue",
//     drive: function(){console.log(`you drive the ${this.model}`)}
// }
// const car3 ={
//     make: "Dodge",
//     model: "Charger",
//     year: 2026,
//     color: "silver",
//     drive: function(){console.log(`you drive the ${this.model}`)}
// }
//            