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
// console.log(fruits)
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
// it is basically a special function used to create and initialized objects. it act like a blueprint for creating multiple objects with the same structure and behavior.


// function car (make,model, year, color){        // this is a constructor function  constructor name is usually starts with capital letter
//     this.make = make
//     this.model = model
//     this.year = year
//     this.color = color
// }
// we can also write like this 
// function car (a, b, c, d){
//     this.make = a
//     this.model = b
//     this.year = c
//     this.color = d
// }

// const car1 = new car("ford", "Mustang", 2024, "red")    // creacting object to the constrcuctor
// const car2 = new car("Chevrolet", "Camaro",2025,"blue")
// const car3 = new car("Dodge","Charger", 2026, "silver")
// console.log(car1.make)
// console.log(car1.model)
// console.log(car1.year)
// console.log(car1.color)

// console.log(car2.make)
// console.log(car2.model)
// console.log(car2.year)
// console.log(car2.color)

// console.log(car3.make)
// console.log(car3.model)
// console.log(car3.year)
// console.log(car3.color)
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

// function Car (make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year= year,
//     this.color = color
// }

// const car1 = new Car ("benzee", "musting", 2027, "black")
// console.log(car1.make)
// console.log(car1.model)
// console.log(car1.year);
// console.log(car1.color);


// <-- CLASS --> itt provide  a m0re sructure and cleaner way to work with objeccts compared to trsditional constructor functiona eg: static keyword, encapsulation, inheritance

// class Products {
//     constructor(name,price){
//         this.name= name,
//         this.price = price
//     }
//     displayProduct(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: ${this.price.toFixed(2)}`)
//     }
//     calculateTotal(saleTax){
//         return this.price + (this.price * saleTax)
//     }
// }

// const saleTax = 0.05

// const Product1 = new Products("shirt", 19.99)
// const Product2 = new Products("pants", 22.50)
// Product1.displayProduct()
// console("hello")
// console.log("hi")
// console.log("helloo")


// <--STATIC-->   static keyword that dfines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)
// static keyword used inside of a class to define methods or properties that belong to the class itself, it does not need object to access static methods we can just access classname.staticmethodname() 

// class MathNull{
//     static PI = 3.14

//     static getDiameter(radius){
//         return radius *  2
//     }
//     static  getCircuumfernce(radius){
//         return 2* this.PI * radius
//     }
// }
// console.log(MathNull.PI)
// console.log(MathNull.getDiameter(10))
// console.log(MathNull.getCircuumfernce(10).toFixed(2))
// 


// class User{
//     static userCoumt = 0

//     constructor(username){
//         this.username = username
//         User.userCoumt ++
//     }
// }
// const user1 = new User("Spongeob")
// console.log(user1.username)
// console.log(User.userCoumt)


// // <-- INHERITANCE -->  allows  a new class to inherit properties and methods from a parent class to child class 
// // it helps with code reusability

// class Animal{
//     alive = true

//     eat(){
//         console.log(`this ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`)
//     }
// }
// class Rabbit extends Animal{
//     name = "rabbit"
//     run(){
//         console.log(`this ${this.name} is running`)
//     }
// }
// class Fish extends Animal{
//     name = "rabbit"
// }
// class Hawk extends Animal{
//     name = "hawk"
// }

// const rabbit = new Rabbit()
// console.log(rabbit.alive)
// rabbit.eat()
// rabbit.sleep()
// rabbit.run()
// const fish = new Fish()
// const hawk = new Hawk()
// console.log(fish.alive)
// fish.eat()
// fish.sleep()
// // fish.run()    // here it become error becouse run method from rabit class

//    <-- Super key word--> keyword is used in classes to call the constructor or access the properties and methods of a parent(superclass)
// this = this object
// super = this parent   

// class Animal{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     move(speed){
//         console.log(`The ${this.name} move at a speed of  ${speed}mph`)
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         // this.name = name        // we must use super instead of this
//         // this.age = age

//         super(name, age)
//         this.runSpeed = runSpeed
//     }
//     run(){
//         console.log(`This  ${this.name} can run`)
//         super.move(this.runSpeed)
//     }
// }
// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name,age)
//         this.swimSpeed = swimSpeed
//     }
//     swim(){
//         console.log(`This ${this.name} can swim`)
//         super.move(this.swimSpeed)
//     }
// }
// class Hawk extends Animal{
//     constructor(name,age,flyspeed){
//         super(name,age)
//         this.flyspeed = flyspeed
//     }
//     fly(){
//         console.log(`This ${this.name} can fly`)
//         super.move(this.flyspeed)
//     }
// }

// const rabbit = new Rabbit("rabbit", 1,25)
// // console.log(rabbit.name)
// // console.log(rabbit.age)
// // console.log(rabbit.runSpeed)
// const fish = new Fish("fish", 2, 12)
// const hawk = new Hawk("hawk", 3, 50)

// rabbit.run()
// fish.swim()
// hawk.fly()


// <-- getter -->   special method that makes a property  readable   ->it used to access or read property it look like a function bbut is accessed like a variable
// <-- setter --> special method that make a property writable    ->  it used to change or write a propety. it allows to control or validate how values are set
// validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
//     set width(newwidth){
//         if(newwidth > 0){
//             this._width = newwidth  // private variable
//         }
//         else{
//             console.error("width must be a poitive number")
//         }
//     }
//     set height(newheight){
//         if(newheight > 0){
//             this._height = newheight
//         }
//         else{
//             console.error("height must be a positive number")
//         }
//     }
//     get width(){
//         return this._width
//     }
//     get height(){
//         return this._height
//     }
//     get area(){
//         return this._width * this._height
//     }
// }
// // const rectangle = new Rectangle( -10000, "pizza")
// const rectangle = new Rectangle(3,4)
// console.log(rectangle.width)
// console.log(rectangle.height)
// console.log(rectangle.area)


// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
//     set firstName(newfirstName){
//         if(typeof newfirstName === "string" && newfirstName.length > 0){
//             this._firstName = newfirstName
//         }
//         else{
//             console.error("first name must be a non empty string")
//         }
//     }
//     get firstName(){
//         return this._firstName
//     }
//     set lastName(newlastName){
//         if(typeof newlastName === "string" && newlastName.length > 0){
//             this._lastName = newlastName
//         }
//         else{
//             console.error("last name must be an non empty string ")
//         }
//     }
//     get lastName(){
//         return this._lastName
//     }
//     set age(newage){
//         if(typeof newage === "number" && newage > 0){
//             this._age = newage
//         }
//         else{
//             console.error("age must be a positive number")
//         }
//     }
//     get age(){
//         return this._age
//     }
// }
// // const person = new Person(420, 69, "pizza")
// const person = new Person("Spongebob", "Squarepants",30)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)


// <-- destructuring --> extract values from array and object then assign them to variable in a convenient way 
// [] = to perform array destructuring 
// {} = to perform object destrucuring 

// eg:1 swap the value of teo variables
// let a = 1
// let b = 2;  // this ; is important it help to understand end of the variable let otherwise it all consider as a variable it couse to an error , instead of last of the ; at this line we can also write ; at the starting of the next line from right sider , it is related to  temporal dead zone from gpt 
// [a, b] = [b, a]
// console.log(a)
// console.log(b)

// eg:2 swap 2 elemtns in an array
// const color = ["red", "green", "blue", "black", "white"];
// [color[0], color[4]] = [color[4], color[0]];
// console.log(color)

//eg:3 assign array elements to variable
// const colors = ["red", "green", "blue", "black", "white"]
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors
// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extraColors)

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "star",
//     age: 34
// }
// // const {firstName, lastName, age, job} = person1
// // console.log(firstName)
// // console.log(lastName)
// // console.log(age)
// // console.log(job)

// const {firstName, lastName, age, job="Unemployed"} = person2  // destructuring here
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)

//eg:5 destruturing in function parameter

// function displayPerson({firstName, lastName, age, job="Unemployed"}){ // destruturing here
//     console.log(`name: ${firstName} ${lastName}`)
//     console.log(`age: ${age}`)
//     console.log(`job: ${job}`)
// }

// const person1 = {
//     firstName: "Spongebob",
//     lastName:"SquarePants",
//     age:30,
//     job: "fry cook"
// }
// const person2 = {
//     firstName: "Patrick",
//     lastName: "star",
//     age: 34
// }
// displayPerson(person1)
// displayPerson(person2)


// <--NESTED OBJECTS -->  objects inside of other objects.
// it allows you to represent more complex data structures
// child object is enclosed by a Parent object 

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies : ["karate", "jellyfishing","cooking"],
//     address: {
//         street: "124 Conch st.",
//         city: "Bikini Bottom",
//         country: "Int.water"
//     }
// }
// console.log(person.fullName)
// console.log(person.age)
// console.log(person.isStudent)
// // console.log(person.hobbies[0])
// for (const bal in person.hobbies){
//     console.log(person.hobbies[bal])
// }
// // console.log(person.address.street)  // instead of this three lines we can use for loop
// // console.log(person.address.city)
// // console.log(person.address.country)

// for(const property in person.address){
//     console.log(person.address[property])
// }


// class Person{
//     constructor(name, age, ...address){
//         this.name = name
//         this.age = age
//         this.address = new Address(... address)
//     }
// }
// class Address{
//     constructor(street, city, country){
//         this.street = street
//         this.city = city
//         this.country = country
//     }
// }
// const person1 = new Person("Spongebob", 30, "124 Conch st.", "Bikini Bottom", "Int.waters" )
// const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom" ,"Int. Waters")
// const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom" ,"Int. waters")
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.address)
// console.log(person3.address.street)


// <-- array of object -->

// const fruits = [{name: "apple", color: "red", calories: 95}, 
//                 {name: "orange", color: "orange", calories: 45}, 
//                 {name: "banana", color: "yellow", calories: 105}, 
//                 { name:"coconut", color:"white", calories: 159}, 
//                 {name: "pineapple", color:"yellow", calories:37}]

// fruits.push({name: "grapges", color: "purple", calories: 62})
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.splice(1,2)   // removing element at 1 and 2 index
// console.log(fruits)
// console.log(fruits[2].calories)

// fruits.forEach(fruits => console.log(fruits.name)) // foreach

// const fruitname = fruits.map(fruits => fruits.name)   // map
// console.log(fruitname)

// const yellowfruit = fruits.filter(fruit =>  fruit.color === "yellow")   // filter
// console.log(yellowfruit)

// const lowcalfruit = fruits.filter(fruit => fruit.calories < 100)
// console.log(lowcalfruit)

// const highCalfruit = fruits.filter(fruits => fruits.calories >= 100)
// console.log(highCalfruit)


// const maxFruit = fruits.reduce((max,fruit) => fruit.calories > max.calories ? fruit : max)
// console.log(maxFruit.calories)

// const minFruit = fruits.reduce( (min, fruit) => fruit.calories < min.calories ? fruit : min)
// console.log(minFruit)


// <-- sort --> method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical lexicographic = (alphabet + number + symbol) as string

// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
// fruits.sort()
// console.log(fruits)

// let number = [1,10,2,9,3,8,4,7,5,6]
// number.sort((a,b) => a - b)
// console.log(number)

// const people = [{name: "Spongebob", age: 30, gpa: 3.0},
//                 {name:"Patrick", age: 37, gpa: 1.5},
//                 {name: "Squidward", age: 51, gpa: 2.5},
//                 {name: "Sandy" , age: 27, gpa: 4.0}
// ]
// // people.sort((a,b) => a.age - b.age)  
// people.sort((a,b) => a.name.localeCompare(b.name))
// console.log(people)

// const cards = ['A', 2,3,4,5,6,7,8,9,10,'J','Q','K']
// // cards.sort(() => Math.random() - 0.5)
// // console.log(cards)

// shuffle(cards)
// console.log(cards)

// functionshuffle(Array){
//     for(let i = array -length - 1; i> 0; i--){
//         const random = Math.floor(Math.random() * (i+1))

//         [array[i], array[random]] = [array[random], array[i]]
//     }
// }


// <-- DATE OBJECT --> object that contain values that represent dates and times these date objects can be change and formatted

// const date = new Date()
// console.log(date)    // print the current date and time 

//to customize date -> Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5)
// const date = new Date("2024-01-02T12:00:00Z")
// console.log(date)

// const date = new Date(170000000000)
// console.log(date)

// const date = new Date()
// const year = date.getFullYear() // to get current  full yr
// const month = date.getMonth()  // to get  current month
// const day = date.getDate()     // to get current date of day
// const hour = date.getHours()   //  to get current hour
// const minutes = date.getMinutes() // to get current minute
// const seconds = date.getSeconds() // to get current second
// const dayOfweek = date.getDay()   // to get current day of week

// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hour)
// console.log(minutes)
// console.log(seconds)
// console.log(dayOfweek)

// const date = new Date()
// date.setFullYear(2024)
// date.setMonth(0)
// date.setDate(1)
// date.setHours(2)
// date.setMinutes(3)
// date.setSeconds(4)

// console.log(date)

// const date1 =new Date("2023-12-31")
// const date2 = new Date("2024-01-01")

// if (date2 > date1){
//     console.log("HAPPY NEW YEAR")
// }


// <-- CLOSURE --> a function defined inside of another function, the inner function has access to the variables and scope of the outer function. Allow for private variable and state maintenance used frequsntly in JS frameworks: React, Vue, Angular 
// we can sncapsulate our variables as private

// function outer(){
//     let message = "hello"
//     function inner(){
//         console.log(message)
//     }
//     inner()
// }

// // message = "goodbye" // it doesn't work because of closure
// outer()

// function increment(){
//     let count = 0
//     count ++ 
//     console.log(`count increased to ${count}`)
// }

// increment()
// increment()

// function createCounter(){
//     let count = 0
//     function increment(){
//         count ++
//         console.log(`count increassed to ${count}`)
//     }
//     function getCount(){
//         return count
//     }
//     return {increment ,getCount}
// }

// const counter = createCounter()
// counter.increment()
// counter.increment()

// function  createGame(){

//     let score = 0
//     function increaseScore(points){
//         score += points
//         console.log(`+${points}pts`)
//     }
//     function decreaseScore(points){
//         score -= points
//         console.log(`-${points} pts`)
//     }
//     function getScore(){
//         return score
//     }
//     return {increaseScore,decreaseScore,getScore}
// }
// const game = createGame()

// game.increaseScore(5)
// game.increaseScore(6)
// game.decreaseScore(3)
// console.log(`the final score is ${game.getScore()}pts`)


// <-- setTimeout() -->  it is a function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds). times are approximate (various based on the workload of the javascript runtime enviornment) 
//                       setTimeout(callback, delay)

// function sayHello(){
//     window.alert("Hello")
// }
// setTimeout(sayHello, 3000)

// setTimeout(function(){window.alert("Hello")} , 3000)  // anonimouse function

// setTimeout(() => window.alert("Hello") , 3000)  // arrow function


// let timeoutId

// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello"), 3000)
//     console.log("STARTER")
// }
// function clearTimer(){
//     clearTimeout(timeoutId)
//     console.log("CLEARED")
// }


// <-- console.time() tool that allows you to measure the time it takes for a section of code or process to execute great for identifying performance "bottlenecks"
// console.time("label")
// console.timeEnd("label")
// basically it here to used to identify how much time take to excute the code 


// console.time("test")
// for( let i = 0; i <10; i++){
//     //do some code
//     console.log("hi")
// }
// console.timeEnd("test")

// function loadData(){
//     console.time("loadData")
//     for(let i=0; i < 100000; i++){
//         // pretend to load some data
//     }
//     console.timeEnd("loadData")
// }
// function processData(){
//     console.time("process")
//     for(let i = 0; i < 10000000; i++){

//     }
//     console.timeEnd("process")
// }
// loadData()
// processData()

// toLocaleStrng() - returns s string with a language sensitive representation of a number
// Intl.Numberformat() - international number formatt
// number.toLocaleString("locale", {options})

// 'locale' = specify the language(undefined = default set in browser)
// 'options' = object with formatting options

// let number = 123456.7789
// number = number.toLocaleString("en-US")
// number = number.toLocaleString("en-US")
// number = number.toLocaleString("de-DE")
// number = number.toLocaleString(undefined)
// number = number.toLocaleString("en-US", {style: "currency", currency: "USD" })  // unitedd state -> dollar formatt
// number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"})  //  indian rupee formatt
// number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"})   // germnay -> uro formmatt
// console.log(number)


// function calculate(){
//     const totalAmount = document.getElementById("total-amount")
//     const PrincipalInput = document.getElementById("Principal")
//     const rateInput = document.getElementById("rate")
//     const yearsInput = document.getElementById("years")

//     let Principal = Number(PrincipalInput.value)
//     let rate = Number(rateInput.value / 100)
//     let years = Number(yearsInput.value)

//     if(Principal < 0 || isNaN(Principal)){
//         Principal = 0
//         PrincipalInput.value = 0
//     }
//     if(rate < 0 || isNaN(rate)){
//         rate = 0
//         rateInput.value = 0
//     }
//     if(years < 0 || isNaN(years)){
//         years = 0
//         yearsInput.value = 0
//     }

//     const result = Principal * Math.pow((1 + rate / 1), 1 * years)
//     totalAmount.textContent = result.toLocaleString(undefined,{style: "currency",currency: "USD"})
// }


// digital clock program
// function updateClock(){
//     const now = new Date()  // it stores the current date and time 
//     const hours = now.getHours().toString().padStart(2,0)// getHours() returns hour 0-23 tostring convert number into string then padStart(2,0) it make the string always 2 digits if that doesnot have two digit then padd 0 at starting of the digit
//     const minutes = now.getMinutes().toString().padStart(2,0) //
//     const second = now.getSeconds().toString().padStart(2,0)
//     const timeString = `${hours} : ${minutes} : ${second}`
//     document.getElementById("clock").textContent = timeString

// }
// updateClock()
//  **padSart**  is only works on string  .it is a string method in javascript 
// .padStart(targetLength, padstring) it add padding like 0 to the begining of a string until it reaches the desired length

// function Timer(){
//     const now = new Date()
//     let hour = now.getHours()
//     const meridiem = hour >= 12 ? "PM" : "AM"
//     hour = hour % 12 || 12   // it convert 24 hr format into 12 hr format
//     hour = hour.toString().padStart(2,0)
//     const minute = now.getMinutes().toString().padStart(2,0)
//     const second = now.getSeconds().toString().padStart(2,0)
//     const result = `${hour}:${minute}:${second} ${meridiem}`
//     document.getElementById("crt-time").textContent = result
// }
// Timer()
// setInterval(Timer,1000)


// stopwatch
// const display =document.getElementById("display")
// let timer = null
// let startTime = 0
// let elapsedTime = 0
// let isRunning = false

// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapsedTime  // Date.now() gives the current time in millisecond
//         timer = setInterval(update, 10)
//         isRunning = true
//     }
//     // console.log(startTime)
// }

// function stop(){
//     if(isRunning){
//         clearInterval(timer)  // it stop the reapeted update
//         elapsedTime = Date.now() - startTime 
//         isRunning = false
//     }
// }

// function reset(){
//     clearInterval(timer)    //  stop  if it's running
//     startTime = 0
//     elapsedTime = 0
//     isRunning = false
//     display.textContent = "00:00:00:00"
// }

// function update(){
//     const currentTime = Date.now()
//     elapsedTime = currentTime - startTime
//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
//     let minute = Math.floor( elapsedTime / (1000 * 60 ) % 60)
//     let second = Math.floor(elapsedTime / 1000 % 60)
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10)

//     hours = String(hours).padStart(2,"0")
//     minute = String(minute).padStart(2,"0")
//     second = String(second).padStart(2,"0")
//     milliseconds = String(milliseconds).padStart(2,"0")

//     display.textContent = `${hours}:${minute}:${second}:${milliseconds}`
// }


// practice |\/
// const display = document.getElementById("display")
// let isRunning = false
// let startTime = 0
// let elapsedTime = 0
// let timer = null

// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapsedTime
//         timer = setInterval(update, 10)
//         isRunning = true
//     }
// }
// function stop(){
//     if(isRunning){
//         clearInterval(timer)
//         elapsedTime = Date.now() - startTime
//         isRunning = false
//     }
// }
// function reset(){
//     clearInterval(timer)
//     startTime = 0
//     elapsedTime = 0
//     isRunning = false
//     display.textContent = "00:00:00:00"
// }
// function update(){
//     const currentTime = Date.now()
//     elapsedTime = currentTime - startTime
//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
//     let second = Math.floor(elapsedTime / 1000 % 60)
//     let millisecond = Math.floor(elapsedTime % 1000 / 10)

//     hours = String(hours).padStart(2,"0")
//     minutes = String(minutes).padStart(2,"0")
//     second = String(second).padStart(2,"0")
//     millisecond = String(millisecond).padStart(2,"0")

//     display.textContent = `${hours}:${minutes}:${second}:${millisecond}`

// }

//  <-- ES6 Modules --> An external file that contains reusable code that can be imported into other javascript files. Write reusable code for many different apps. 
// it can contain variables,classes,functions ...  and  more introduced as part of ECMAScript 2015 update

// a module is simpley a javascript file that exports code(function , variable, classes)  and can import code from other modules
// adv: * code reusability  we can write a code and used it in multiple files
// * Encapsulation(private scope)  avriables and functions inside a module theye are not global 


// import {PI, getCircuumfernce,getArea,getVolume} from './mathUtil.js'
// console.log(PI)

// const circumference = getCircuumfernce(10)
// console.log(`${circumference.toFixed(2)}cm`)

// const area = getArea(10)
// console.log(`${area .toFixed(2)}cm^2`)

// const volume = getVolume(10)
// console.log(`${volume.toFixed(2)}cm^3`)


// <-- synchronous -->  Executes line by line consecutively in a sequential manner code that waits for an operation to complete.
// <-- asynchronous --> Allows multiple operations to be performed concurrently without waiting , does not block the exection  flow and allow the program to continue
// (I/O operations,network request, fetching data)
// Handled with: callback, promise, async/await


// setTimeout(() => console.log("Task 1"),3000)
// console.log("Task 2")
// console.log("Task 3")
// console.log("Task 4")

// function func1(callback){
//     setTimeout(() => {console.log("Task 1")
//             callback()},3000)
// }
// function func2(){
//     console.log("Task 2")
//     console.log("Task 3")
//     console.log("Task 3")
//     console.log("Task 4")
// }
// func1(func2)


// <-- Error --> An object that is created to represent a problem that occurs occur often with user input or establishing a connection
// try { }  Encloses code that might potentially cause an error 
// catch {}  Catch and handle any thrown errors from try {}
// finally {} (optional) Always executes. used mostly for clean up ex. close files, close connections, release resource

// try{
//     console.log(x)
//     // NETWORK ERROR
//     // PROMISE ERROR
//     // SECURITY ERRORS
// }
// catch(error){
//     console.error(error)
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes")
// }
// console.log("You have reached the end")

// eg:2
// try{
//     const dividend = Number(window.prompt("Enter a dividend: "))
//     const divisor = Number(window.prompt("Enter a divisor"))

//     if(divisor == 0){
//         throw new Error("You can't divide by zero! ")
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("value must be a number")
//     }

//     const result = dividend / divisor
//     console.log(result)
// }
// catch(error){
//     console.error(error)
// }
// console.log("you have reached at the end")



// calculator program
// const display = document.getElementById("display")

// function appendToDisplay(input){
//     display.value += input   // display.value = display.value + input
// }

// function clearDisplay(){
//     display.value = ""
// }

// function calculate(){
//     try{
//         display.value = eval(display.value)
//     }
//     catch(error){
//         display.value = "Error"
//     }
// }



// <-- DOM -->   Document Object Model
// object{} that represent the page you see in the web browser and provides you wtih an API to interact with it. web browser constructs the DOM when it loads an html document and structures all the elements in a tree- like representation. 
// javascript can access the DOM to dynamically change the content, structure, and style of a web page.


// document.title = "My website"
// document.body.style.backgroundColor = "hsl(0,0%,15%)"
// console.dir(document)

// const username = "Bro Code"
// const welcomeMsg = document.getElementById("welcome-msg")
// welcomeMsg.textContent += username === "" ? 'Guest' : username
// console.dir(document)

// <-- Element selectors --> method used to target and manipulate HTML elements They allow you to select on or multiple HTML elements from the DOM (Document Object Model)
// 1.document.getElementById()  // element or null
// 2.document.getElementsClassName() // HTML collection
// 3.document.getElementsByTagName() // html collection
// 4. document.querySelector()      //  first matching element or null
// 5.document.querySelectorAll()   // nodelist

// 1
// const myHeading = document.getElementById("my-heading")
// myHeading.style.backgroundColor = "yellow"
// myHeading.style.textAlign = "center"
// console.log(myHeading)

// //2
// const fruits = document.getElementsByClassName("fruits")
// console.log(fruits)
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow"
// })

//3
// const helements = document.getElementsByTagName("h4")
// const lielements = document.getElementsByTagName("li")
// helements[1].style.backgroundColor = "yellow"
// console.log(helements)

// for(let helement of helements){
//     helement.style.backgroundColor = "yellow"
// }

// for(let lielement of lielements){
//     lielement.style.backgroundColor = "lightgreen"
// }


// fruits[0].style.backgroundColor = "yellow"
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow"
// }


// const helements = document.getElementsByTagName("h4")
// const lielements = document.getElementsByTagName("li")
// Array.from(helements).forEach(helement => {
//     helement.style.backgroundColor = "yellow"
// })
// Array.from(lielements).forEach(lielement => {
//     lielement.style.backgroundColor = "lightgreen"
// })


//4
// const element = document.querySelector(".fruits") // here . means selecting an elements by its class name , same as #fruits means elements with id fruits, if only fruits tht means <fruits>
// element.style.backgroundColor = "yellow"

// const element = document.querySelector("h4")
// element.style.backgroundColor = "yellow"

//5
// const fruits = document.querySelectorAll(".fruits")
// fruits[1].style.backgroundColor = "yellow"

// const fruit = document.querySelectorAll(".fruits")
// fruit[2].style.backgroundColor = "yellow"

// const food = document.querySelectorAll("li")
// food.forEach(food => {
//     food.style.backgroundColor = "yellow"
// })


// <-- DOM NAVIGATION -->    the process of navigating through the structure of an HTMl document using javascript
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// ```` .firstElementChild ````````
// const element = document.getElementById("fruits")
// const firstchild = element.firstElementChild    // it return first child element of the fruite
// firstchild.style.backgroundColor = 'yellow'

// const element = document.getElementById("Vegetables")
// const firstchild = element.firstElementChild
// firstchild.style.backgroundColor = "yellow"

// const ulElements = document.querySelectorAll("ul")  // it select all ul 
// ulElements.forEach(ulElement => {
//     const firstchild = ulElement.firstElementChild
//     firstchild.style.backgroundColor = "yellow"
// })

// ````` .lastElementChild `````
// const element = document.getElementById("Vegetables")
// const lastChild = element.lastElementChild    // it return last element of the vegetables
// lastChild.style.backgroundColor = "yellow"

// const dessert = document.getElementById("desserts")
// const lastelement = dessert.lastElementChild
// lastelement.style.backgroundColor = "lightgreen"

// const ulElement = document.querySelectorAll("ul")  // it select all ul 

// ulElement.forEach(ulElements => {
//     const lastChild = ulElements.lastElementChild
//     lastChild.style.backgroundColor = "yellow"
// })

// ``````` .nextElementSibling `````````
// const apple = document.getElementById("apple")
// const next = apple.nextElementSibling   // returns the next sibling of apple
// next.style.backgroundColor = "yellow"

// const banana = document.getElementById("orange") // returns next sibling of orange
// const next = banana.nextElementSibling
// next.style.backgroundColor = "orange"

// const banana = document.getElementById("banana")
// const element = banana.nextElementSibling
// element.style.backgroundColor = "yellow"  // it does not returns any thing because of banana is the last element

// const banana = document.getElementById("fruits")
//  const element = banana.nextElementSibling
//  element.style.backgroundColor = "yellow"     // it returns next ul sibling of fruits

// const veg = document.getElementById("Vegetables")
// const all = veg.nextElementSibling
// all.style.backgroundColor = "yellow"      // it does not return anything because of it is the last ul element

// ``````` .previousElementSibling ````````````
// const veg = document.getElementById("onion")
// const prev = veg.previousElementSibling          // it returns the previous sibling of onion
// prev.style.backgroundColor = "yellow"

// const dessert = document.getElementById("pie")
// const element = dessert.previousElementSibling
// element.style.backgroundColor = "yellow"

// const apple = document.getElementById("apple")
// const prev = apple.previousElementSibling
// prev.style.backgroundColor = "yellow"             // it does not return any thing because apple is the first element there is no previous element  

// `````` parentElement ``````````
// const element = document.getElementById("orange")
// const parent = element.parentElement
// parent.style.backgroundColor = "yellow"    // it returns the full color on parent here yellow color visible in elements inside the parent (fruits) that means apple,oraange,banana are visible in yellow color

// const element = document.getElementById("banana")
// const result = element.parentElement
// result.style.backgroundColor = "yellow"

// const content = document.getElementById("vegetables")
// const out = content.parentElement
// out.style.backgroundColor = "orange"         // it returns the enteir window as orange because of the parent class of vegetable ul is body 

// ``````````` .children ``````````
// const element = document.getElementById("desserts")
// const child = element.children
// console.log(child)

// const wow = document.getElementById("fruits")
// const result = wow.children
// // result.style.backgroundColor = "yellow"  here we can't apply background color like this because it is a group of html elments (<li>apple</li>,<li>orange</li>,<li>banana</li>) so that is not worked but we can impplement this by using a loop
// console.log(result)
// for(let i = 0; i < result.length; i++){
//     result[i].style.backgroundColor = "yellow"
// }

// we can also give background color like this
// const element = document.getElementById("fruits")
// const child = element.children
// Array.from(child).forEach(childre => {
//     childre.style.backgroundColor = "yellow"
// })

// const ele = document.getElementById("fruits")
// const children = ele.children
// children[0].style.backgroundColor = "yellow"   // it returns the color on first child element of fruits


// ADD/CHANGE HTML USING JAVASCRIPT
// step 1. create the element
// step 2. add attributes/properties
// step 3. append element to dom
// remove html element

// step1 create the element

// const newH1 = document.createElement("h1")

// step2 add attributes/properties

// newH1.textContent = "I like pizza"
// newH1.id = "myH1"
// newH1.style.color = "tomato"
// newH1.style.textAlign ="center"

//step3 append element to dom

// document.body.append(newH1) // at the end of the screen
// document.body.prepend(newH1)   // at starting of the screen(it become first child)
// document.getElementById("box1").append(newH1) // inside of the box1
// document.getElementById("box1").prepend(newH1)
// document.getElementById("box2").append(newH1) // inside of the box2

// const box2 = document.getElementById("box2")
// document.body.insertBefore(newH1, box2)     // it insert newH1 before box2

// const box4 = document.getElementById("box4")
// document.body.insertBefore(newH1, box3)

// const boxes = document.querySelectorAll(".box")
// document.body.insertBefore(newH1, boxes[2])

//step4 remove html element

// document.getElementById("box1").removeChild(newH1)


// eg:2
// const newListItem = document.createElement("li") // 1. creating element
// newListItem.textContent = "coconut"   // 2.adding atributes and css property 
// newListItem.id = "coconut"
// newListItem.style.fontWeight = "bold"
// newListItem.style.backgroundColor = "lightgreen"


// document.body.append(newListItem)        //3. apped element to dom
// document.body.prepend(newListItem)
// document.getElementById("fruits").append(newListItem) // it make cocnut as last element of fruits ol
// document.getElementById("fruits").prepend(newListItem)

// const orange = document.getElementById("orange")
// document.getElementById("fruits").insertBefore(newListItem,orange)
// const listItems = document.querySelectorAll("#fruits li")
// document.getElementById("fruits").insertBefore(newListItem,listItems[4])


// practice |\/
// const newH1 = document.createElement("h1")
// newH1.textContent = "I like pizza"
// newH1.id = "myH1"
// newH1.style.color = "tomato"
// newH1.style.textAlign = "center"
// // document.body.append(newH1)
// // document.body.prepend(newH1)
// document.getElementById("box1").append(newH1)


//eg2
// const newListItem = document.createElement("li")
// newListItem.textContent = "coconut"
// newListItem.id = "cocnut"
// newListItem.style.fontWeight = "bold"
// newListItem.style.backgroundColor = "lightgreen"
// // document.body.append(newListItem)
// // document.body.prepend(newListItem)
// const orange = document.getElementById("orange")
// document.getElementById("fruits").insertBefore(newListItem, orange)


// <-- eventListener --> listen for specific events to create interactive web pages 
//             events: click, mouseover, mouseout
//             .addEventListener(event, callback or anonimous function or arrow function)

// const myBox = document.getElementById("myBox");

// function changeColor(event){
//     // console.log(event);
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "OUCH! 🤕"

// }
// myBox.addEventListener("click",changeColor);  // here we passes callback but we can pass it has anonimous function or arrow function also

// by using anonimus function

// const myBox = document.getElementById("myBox")
// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "OUCH! 🤕"
// } )

// by using arrow function

// const myBox = document.getElementById("myBox")
// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "OUCH! 🤕"
// })


// const myBox = document.getElementById("myBox")
// const myButton = document.getElementById("myButton")
// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "OUCH! 🤕"
// })

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow"
//     event.target.textContent = "Don't do it 😮"
// })

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen"
//     event.target.textContent = "Click Me 😀"
// })
// myButton.addEventListener("click",event => {
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "OUCH! 🤕"
// })
// myButton.addEventListener("mouseover",event => {
//     event.target.style.backgroundColor = "yellow"
//     event.target.textContent = "Don't do it 😮"
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen"
//     event.target.textContent = "Click Me 😀"
// })

// <-- eventListener --> = Listen for specific events to create interactive web pages
//           events: keydown, keyup
//           document.addEventListener(event, callback)

// document.addEventListener("keydown", event => {   // event for pressing key from keybord
//     // console.log(event)
//     console.log(`key down = ${event.key}`)
// })

// document.addEventListener("keyup", event => {  // event for releasing key from keybord
//     console.log(`key up = ${event.key}`)
// })

// const myBox = document.getElementById("myBox")

// document.addEventListener("keydown", event => {
//     myBox.textContent = "😮"
//     myBox.style.backgroundColor = "tomato"
// })
// document.addEventListener("keyup", event => {
//     myBox.textContent = "😀"
//     myBox.style.backgroundColor = "lightblue"
// })

// const myBox = document.getElementById("myBox")
// const moveAmount = 10;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown",event => {
//     // console.log(event.key);
//     if(event.key.startsWith("Arrow")){

//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount
//                 break
//             case "ArrowRight":
//                 x += moveAmount
//                 break
//         }
//         myBox.style.top = `${y}px`
//         myBox.style.left = `${x}px`
//     }
// })


// const myButton = document.getElementById("myButton")
// const myImg = document.getElementById("myImg")

// myButton.addEventListener("click", event => {

//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible"
//         myButton.textContent = "Hide"
//     }
//     else{
//         myImg.style.visibility = "hidden"
//         myButton.textContent = "show"
//     }
// } )


// <-- NodeList --> static collection of HTML elements by (id, class, element)
// can be created by using querySelectorAll()
// similar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes

// let buttons = document.querySelectorAll(".myButton")
// console.log(button)

// // ADD HTML/CSS PROPERTIES
// buttons.forEach(button => {
//     button.style.backgroundColor = "green"
//     button.textContent += "😀"
// })

// // CLICK event listener
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato"
//     } )
// })

// // MOUSEOVER + MOUSEOUT event listener
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "rgba(130, 130, 211, 1)"
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "rgba(140, 140, 234, 1)"
//     })
// })


// // ADD AN ELEMENT
// let buttons = document.querySelectorAll(".myButton")
// const newButton = document.createElement("button")  // STEP 1
// newButton.textContent = "Button 5"  // STEP2
// newButton.classList = "myButton"
// document.body.appendChild(newButton) // STEP 3

// // console.log(buttons);
// buttons = document.querySelectorAll(".myButtons")
// console.log(buttons)

// // REMOVE AN ELEMENT
// let buttons = document.querySelectorAll(".myButton")
// buttons.forEach(button => {
//     button.addEventListener("click", event =>{
//         event.target.remove()
//         // console.log(buttons)
//         buttons = document.querySelectorAll(".myButtons")
//         console.log(buttons)

//     })
// })

// <== CLASSLIST ==>  it is a element property in javascript used to interact with an element's list of classes(css classes), allow you to make reusable classes for many elements across your webpage.
// it is a special javascript tool used for (dynamically) add,remove or check css classes on an html element
// add() to add a class
// remove() to remove a class
//toggle() to reove class if it is present there if it is not present add that class
// replace(oldClass,newClass) it replace oldclass to newclass
// contains("class")  it check a class is exists or not

// const myButton = document.getElementById("myButton")
// myButton.classList.add("enabled")   // to add the class enabled(dynamically)
// myButton.classList.remove("enabled") // to remove 
// myButton.classList.add("hover")
// myButton.addEventListener("mouseover", event => {  // triger the class hover when the mouseover the button
//     event.target.classList.add("hover")
// })
// myButton.addEventListener("mouseout", event => {  // it remove the class hover when the mouse out from the button
//     event.target.classList.remove("hover")
// })

// toggle() is first check if the class is present or not if it is not present the class is add otherwise it remove the class like add() and remove()
// myButton.classList.toggle("hover")
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover")
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover")
// })

// myButton.classList.add("enabled")

// myButton.addEventListener("click", event => {
//     event.target.classList.replace("enabled","disabled")
// })

// const myH1 = document.getElementById("myH1")
// const myButton = document.getElementById("myButton")

// myH1.classList.add("enabled")
// myH1.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😵‍💫"
//     }else{
//         event.target.classList.replace("enabled", "disabled")
//     }
// })

// myButton.classList.add("enabled")

// myButton.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😵‍💫"
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled")
//         // event.target.textContent = "Hello Button"
//     }
// })

let buttons = document.querySelectorAll("#myButton")

buttons.forEach(button => {
    button.classList.add("enabled")
})

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.add("hover")
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseout",event => {
//         event.target.classList.remove("hover")
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseover",event => {
//         event.target.classList.toggle("hover")
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseout" ,event => {
//         event.target.classList.toggle("hover")
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("click",event => {
//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "😵‍💫"
//         }
//         else{
//             event.target.classList.replace("enabled","disabled")
//         }
        
//     })
// })

//                    

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover")
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "😵‍💫"
//         }
//         else{
//             event.target.classList.replace("enabled", "disabled")
//         }
//     })
// })

//                  

 
// <-- classList --> element property in javascript used to interact with an element's list of classes (css classes). allow you to make reusable classes for many elements across your webpage.
// it is a special javascript tool used to add,remove, or check css classes on an HTML element.
// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass,newClass)
// contains()check the element has that class

// const myButton = document.getElementById("myButton")
// // myButton.classList.add("enabled")
// // myButton.classList.remove("enabled")
// // myButton.classList.add("hover")
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover")
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover")
// })

// const myH1 = document.getElementById("myH1")
// const myButton = document.getElementById("myButton")

// myH1.classList.add("enabled")
// myButton.classList.add("enabled")

// myH1.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😵‍💫"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }
// })

// myButton.addEventListener("click",event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😵‍💫"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }

    
// })

// let buttons = document.querySelectorAll(".myButtons")
// buttons.forEach(button => {
//     button.classList.add("enabled")
// })
// // buttons.forEach(button => {
// //     button.classList.remove("enabled")
// // })
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover")
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover")
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "😵‍💫"
//         }
//         else{
//             event.target.classList.replace("enabled", "disabled")
//         }
//         // event.target.classList.replace("enabled", "disabled")
//     })
// })

// ROCK AND PAPER SCISSOR
// const choices = ["rock","paper","scissors"]
// const playerDisplay = document.getElementById("playerDisplay")
// const computerDisplay = document.getElementById("computerDisplay")
// const resultDisplay = document.getElementById("resultDisplay")
// const playerScoreDisplay = document.getElementById("playerScoreDisplay")
// const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay")
// playerScore = 0
// computerScore = 0

// function playGame(playerChoice){
//     const computerChoices = choices[Math.floor(Math.random() *3)]
//     let result = ""

//     // console.log(computerChoices)
//     if(playerChoice === computerChoices){
//         result = "IT'S A TIE"
//     }
//     else{
//         switch(playerChoice){
//             case "rock":
//                 result = (computerChoices === "scissors") ? "YOU WIN!" : "YOU LOSE!"
//                 break;
//             case "paper":
//                 result = (computerChoices === "rock") ? "YOU WIN!" : "YOU LOSE!"
//                 break
//             case "scissors":
//                 result = (computerChoices === "paper") ? "YOU WIN!" : "YOU LOSE!"
//                 break
//         }
//     }

//     playerDisplay.textContent = `PLAYER: ${playerChoice}`
//     computerDisplay.textContent = `Computer: ${computerChoices}`
//     resultDisplay.textContent = result

//     resultDisplay.classList.remove("greenText", "redText")

//     switch(result){
//         case "YOU WIN!":
//             resultDisplay.classList.add("greenText")
//             playerScore++
//             playerScoreDisplay.textContent = playerScore
//             break
//         case "YOU LOSE!":
//             resultDisplay.classList.add("redText")
//             computerScore++
//             ComputerScoreDisplay.textContent = computerScore
//             break
//         // case "IT'S A TIE":
//         //     resultDisplay.classList.remove("greenText","redText")
//         //     break
//     }
// }


// IMAGE SLIDER

// const slides = document.querySelectorAll(".slides img")
// let slideIndex = 0
// let intervalId = null

// // initializeSlider()
// document.addEventListener("DOMContentLoaded", initializeSlider) // when the page finishes loading then run initializeslider() function

// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide")
//         intervalId = setInterval(nextSlide, 5000)
//     }
    
//     // console.log(intervalId)

// }
// function showSlide(index){

//     if( index >= slides.length){
//         slideIndex = 0
//     }
//     else if( index < 0){
//         slideIndex = slides.length - 1
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide")
//     })
//     slides[slideIndex].classList.add("displaySlide")

// }
// function prevSlide(){

//     slideIndex--
//     showSlide(slideIndex)
// }
// function nextSlide(){
//     slideIndex++
//     showSlide(slideIndex)
// }


// <-- CALLBACK HELL --> it is a situation in javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
//  old (old solution) pattern to handle asynchronous functions. Use (solution) promise + async/await to avoid callback hell

// this is asynchronous function (it make waiting) that make callback hell here
// synchronous function(it doesn't make waiting ) it doesn't make callback becoouse ther is no waiting

// synchronous function ->  no waitiing
// function task1(){
//     setTimeout(() => {
//         console.log("task 1 complete")
//     },1000)
// }
// function task2(){
//     setTimeout(() => {
//         console.log("task 2 complete")
//     })
// }
// function task3(){
//     setTimeout(() => {
//         console.log("task 3 complete")
//     })
// }
// task1()
// task2()
// task3()
// console.log("All tasks are completed")

//asynchronous function -> waiting
// function task1(callback){
//     setTimeout(() => {
//         console.log("task 1 complete")
//         callback()
//     }, 1000)
    
// }
// function task2(callback){
//     setTimeout(()=> {
//         console.log("task 2 complete")
//         callback()
//     }, 2000)
    
// }
// function task3(callback){
//     setTimeout(() => {
//         console.log("task 3 complete")
//         callback()
//     }, 3000)
    
// }
// function task4(callback){
//     setTimeout(() => {
//         console.log("task 4 complete")
//         callback()
//     },1500)
    
// }
// function task5(callback){
//     setTimeout(() => {
//         console.log("task 5 complete")
//         callback()
//     },2000)
// }

// task1(() => {
//     task2(() =>{
//         task3(() =>{
//             task4(() => {
//                 task5 ( () => console.log("All tasks complete"))
//             })
//         })
//     })
// })


// <-- PROMISE --> An object that manages asynchronous operations.
// wrap a promise object around {asynchronous code}
// "I promise to return a value" that value -> resolved or rejected
// new promise (resolve,reject) => {asynchronous code}

// function walkDog(callback){
//     setTimeout(() =>{
//         console.log("You walk the dog 🐕")
//         callback()
//     },1500)
// }
// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("You clean the kitchen 🧹")
//         callback()
//     },2500)
// }
// function takeoutTrash(callback){
//     setTimeout(() => {
//         console.log("You take out the trash 🗑️")
//         callback()
//     },500)
// }

// walkDog(() => {    // it is a callback  to avoid that we use promise
//     cleanKitchen(() => {
//         takeoutTrash(() => console.log("You finished all the chores!"))  
//     })
// })

// with promise()
// function walkDog(){
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You walk the dog 🐕")
            
//          },1500)
//     })
// }
// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("you clean the kitchen 🧹")
//         }, 2500)
//     })
// }
// function takeoutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You take out the trash 🗑️ ")
//         },500)
//     })
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeoutTrash()})
//         .then(value => {console.log(value); console.log("you finished all the works")})


// // with reject
// function walkDog(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = true

//             if(dogwalked){
//                 resolve("You walk the dog 🐕")
//             }
//             else{
//                 reject("You didn't walk the dog")
//             }
//         },1500)
//     })
// }
// function cleanKitchen(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const clean = true

//             if(clean){
//                 resolve("you clean the kitchen 🧹")
//             }
//             else{
//                 reject("you didn't clean the kitchen")
//             }
//         },2500)
//     })
// }
// function takeoutTrash(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const trash = false
//             if(trash){
//                 resolve("you take out the trash 🗑️")
//             }
//             else{
//                 reject("you didn't take out the trash")
//             }
//         },500)
//     })
// }

// walkDog().then(value => {console.log(value); return cleanKitchen() })
//         .then(value => {console.log(value); return takeoutTrash()})
//         .then(value => {console.log(value); console.log("You finished all works")})
//         .catch(error => console.error(error))

// practices |\/ 

// function  walkDog(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const done = true

//             if(done){
//                 resolve("You walk the dog 🐕")
//             }
//             else{
//                 reject("You didn't walk the dog")
//             }
//         },1500)
//     })
// }
// function cleanKitchen(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const done = true
//             if(done){
//                 resolve("you clean the kitchen 🧹")
//             }
//             else{
//                 reject("you didn't clean the kitchen")
//             }
//         }, 2000)
//     } )
// }
// function takeoutTrash(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const done = false  
//             if(done){
//                 resolve("you take out the trash 🗑️")
//             }
//             else{
//                 reject("you didn't take out the trash")
//             }
//         },500)
//     })
// }
// function cookedFood(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const done = true
//             if(done){
//                 resolve("you cooked food")
//             }
//             else{
//                 reject("you didn't cooked food")
//             }
//         },3000)
//     })
// }
// walkDog().then(value => {console.log(value); return cleanKitchen()})
// .then(value => {console.log(value);return takeoutTrash()})
// .then(value => {console.log(value);return cookedFood()} )
// .then(value => {console.log(value);console.log("you finished all works")})
// .catch(error => console.error(error))


// <-- ASYNC/AWAIT --> => Async = make a function return a promise
//                     => Await = makes an async function wait for a promise
// Allow you write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters Everything after Await is placed in an event queue
// async/await make the code simpler , it used instead of .then that make the code messy asyn/await used to avoid that 
// adv -> * cleaner syntax, * Easier to read , *works great with try/catch for error handling, * Avoids callback hell

// function walkDog() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const dogwalked = true
//             if(dogwalked){
//                 resolve("You walk the dog 🐕")
//             }
//             else{
//                 reject("You DIDN'T walk the dog")
//             }
//         },1000)
//     })
// }
// function cleanKitchen() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const cleaned = true
//             if(cleaned){
//                 resolve("you cleaned the kitchen")
//             }
//             else{
//                 reject("You didn't clean the kitchen")
//             }
//         },1500)
//     })
// }
// function cookedFood(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const cooked = true
//             if(cooked){
//                 resolve("You cooked the food")
//             }
//             else{
//                 reject("You didn't cook the food")
//             }
//         },2000)
//     })
// }

// async function doChores() {
//     try{
//         const walkDogResult = await walkDog()
//         console.log(walkDogResult)

//         const claning = await cleanKitchen()
//         console.log(claning)

//         const cooking = await cookedFood()
//         console.log(cooking)

//         console.log("You finished all the chores!")
//     }
//     catch(error){
//         console.error(error)
//     }
    
// }
// doChores()

// <-- JSON --> (JavaScript Objecct Notation) data-interchange format used for exchanging data between a server and a web application JSON files {key:value} OR [value1, value2, value3]
// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = convert a JSON string to a JS object
// json is a light weight format for storing and exchanging data  json is not for javascript it supported in almost all programming languages python,java,c# ,php,etc

// by using  .stringify()
// const names = ["Spongebob", "Patrick", "Squidward","Sandy"]
// const person = {
//     "name" : "Spongebob",
//     "age" : 30,
//     "isEmployed" : true,
//     "hobbies" : ["Jellyfishing", "Karate", "Cooking"]
// }
// const people = [{
//     "name" : "Spongebob",
//     "age" : 30,
//     "isEmployed" : true
// },
// {
//     "name" : "Patrick",
//     "age" : 34,
//     "isEmployed" : false
// },
// {
//     "name" : "Squidward",
//     "age" : 50,
//     "isEmployed" : true
// },
// {
//     "name" : "Sandy" ,
//     "age" : 27,
//     "isEmployed" : false
// }]
// const jsonString = JSON.stringify(names)    // it convert the names array into string -> it convert js object into json string
// console.log(jsonString)

// const jsonString2 = JSON.stringify(person)
// console.log(jsonString2)

// const jsonString3 = JSON.stringify(people)
// console.log(jsonString3)


// by using  .parse()

// const jsonName = `["Spongebob", "Patrick", "Squidward" ,"Sandy"]`           // all are in the form of json string 
// const jsonPerson = `{"name": "Spongebob", "age" : 30, "isEmployed" : true, "hobbies" : ["Jellyfishing","Karate", "Cookking"]}`
// const people = `[{"name" : "Spongebob", "age" : 30, "isEmployed" : true},
//                 {"name" : "Patrick", "age" : 34, "isEmployed" : false},
//                 {"name" : "Squidward", "age" : 50, "isEmployed" : true},
//                 {"name" : "Sandy", "age" : 27, "isEmployeed" : false}]`

// const parsedData = JSON.parse(jsonName)        // it cnvert json string into js object
// console.log(parsedData)

// const parsedData2 = JSON.parse(jsonPerson)
// console.log(parsedData2)

// const parsedData3 = JSON.parse(people)
// console.log(parsedData3)

// fetching of json file

// fetch("people.json")    // this uses Fetch API to make an HTTP request to the file person.json the fetch returns a promise
//     .then(response => response.json())  //.then() waits for the fetch promise to reslove , response.json() is a method that reads the body of the response and tries to parse it as JSON
//     // .then(value => console.log(value))
//     .then(values => values.forEach(vaiue => console.log(vaiue.isEmployed)))
//     .catch(error => console.error(error))


// <-- COOKIE -->  a small text file stored on your computer used to remember information about the user saved in name = value pairs

// console.log(navigator.cookieEnabled)
// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie)

// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Star; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie)

// setCookie("email", "Sponge@gmail.com", 365)
// deleteCookie("firstName")
// deleteCookie("lastName")
// deleteCookie("email")
// console.log(document.cookie)


// setCookie("firstName", "SpongeBob", 365)
// setCookie("lastName", "SquarePants", 365)

// console.log(getCookie("firstName"))
// console.log(getCookie("lastName"))

// const firstText = document.querySelector("#firstText")
// const lastText = document.querySelector("#lastText")
// const submitBtn = document.querySelector("#submitbtn")
// const cookieBtn = document.querySelector("#cookiesBtn")

// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365)
//     setCookie("lastName", lastText.value, 365)
// })
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName")
//     lastText.value = getCookie("lastName")
// })

// // deleteCookie("firstName")
// // deleteCookie("lastName")

// function setCookie(name, value, daysToLive){
//     const date = new Date()
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
//     let expires = "expires=" + date.toUTCString()
//     document.cookie = `${name}=${value}; ${expires}; path=/`
// }
// function deleteCookie(name){
//     setCookie(name, null,null)
// }
// function getCookie(name){
//     const cDecoded = decodeURIComponent(document.cookie)
//     const cArray = cDecoded.split(";")
//     let result

//     cArray.forEach(element => {
//         if(element.indexOf(name)===0){
//             result = element.substring(name.length + 1);
//         }
//     })
//     return result
//     // console.log(cArray)
//     // console.log(cDecoded)
// }


// <-- FETCH --> function used for making HTTP request to fetch resources.(JSON style data, images, files)
// Simplifies asynchronous data fetching in javascript and used for interacting with API's to retrieve and send data asynchronously over the web. 
// fetch(url, {options})  => options are method properties like GET by default to get some data, POST  to assin some data, PUT to replace some data, DELETE to delete some data

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => console.log(response))
//     .then(data => console.log(data.id))
//     .catch(error => console.log(error))

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error))

// by using async await
// fetchData()          Charizard,Mewtwo,Typhlosion
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json() // used for the
        console.log(data)

        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    }
    catch (error){
        console.log(error)
    }
}
//         
