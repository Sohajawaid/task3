                 ////////START//////////
//chapter 31-34
var currentDate = new Date()
console.log(currentDate)

var dStr = new Date();
console.log(dStr)

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
console.log(now)

var date = currentDate.getDate();
console.log(currentDate.getDate());
var year = currentDate.getFullYear();
 console.log(currentDate.getFullYear());
 var day = currentDate.getDay();
 console.log(currentDate.getDay());
 var month = currentDate.getMonth()
 console.log(currentDate.getMonth());
 var hours = currentDate.getHours();
 console.log(currentDate.getHours());
 var minutes = currentDate.getMinutes();
 console.log(currentDate.getMinutes());
 var seconds = currentDate.getSeconds();
 console.log(currentDate.getSeconds());
 var milliseconds = currentDate.getMilliseconds();
 console.log(currentDate.getMilliseconds());

 var currentDate = new Date ("January 1, 1980");
 console.log(currentDate.getTime()); 

 var currentDate = new Date ("2024-11-02")
 console.log(currentDate.getDate())

 var currentDate = new Date ();

 currentDate . setDate(15);
console.log(currentDate.getDate());

 currentDate . setFullYear(2024);
 console.log(currentDate.getFullYear());

 currentDate . setMonth(2);
 console.log(currentDate.getMonth());

 currentDate . setHours(4);
 console.log(currentDate.getHours());

 currentDate . setMinutes(30);
 console.log(currentDate.getMinutes());

 currentDate . setSeconds(30);
 console.log(currentDate.getSeconds());

 currentDate . setMilliseconds(500);
 console.log(currentDate.getMilliseconds());

 function calculateAge(userAge){
     var currentDate = new Date()
     var changeDate = new Date(userAge);
     var inMilli = currentDate - changeDate;
     var inYear = inMilli / (1000*60*60*24*365.25);
      var age = Math.floor(inYear);
     console.log(age);
}
     calculateAge("01-01-2001")
    calculateAge("02-14-2008")
      calculateAge("06-15-1990")
    

//chapter 35-37
function abc(){
    console.log(abc)
}
abc()

function askName() {
    var userName = prompt("Enter name");
    if (userName !== null) {
        console.log("Entered name: " + userName);
    } else {
        console.log("User canceled the input.");
}
return userName;
}
var enteredName = askName();


function callTwoFunctions() {
    var result1 = firstFunction();
    var result2 = secondFunction();
    console.log("Result from first function:", result1);
    console.log("Result from second function:", result2);
}
function firstFunction() {
    return "Result from the first function";
}
function secondFunction() {
    return "Result from the second function";
}
callTwoFunctions();


function enterAndDisplayName() {
    var userName = prompt("Enter name");
    if (userName !== null) {
        alert("Entered name: " + userName);
    } else { console.log("User canceled the input.");
}
}

function concat(a, b, c){
    return "result"
}
variable_value = 42
string_value = "Hello, "
number_value = 7
result = concat(variable_value, string_value, number_value)
console.log(concat)

function concatenateAndAssign(param1, param2) {
    let concatenatedResult = param1 + param2;
    console.log(concatenatedResult);
    return concatenatedResult;
}
 concatenateAndAssign("Hello", " World!");

 function isWordInArray(word, array) {
    array = array.map(function(element) {
        return element.toLowerCase();
    });
    return array.includes(word.toLowerCase());
}

var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
var result1 = isWordInArray('haris', namesArray);
var result2 = isWordInArray('ali', namesArray);

console.log(result1); 
console.log(result2);
function numReverce(x){
     return x.toString().split("").reverse().join("");
   
 }
 var a = numReverce(32243)
console.log(a)


//     function name (z){
//     return z.split("").reverse().join("");
//  }
//  var check = word ("madam");
//  if (check === "wow"){
//     console.log ("it is palindrom")
//  }else{
//      console.log("it not palindrom ")
//  }

  
//  function abc(text){
//     var a = text.split("");
//     console.log(a);
//   for(var i = 0; i < a.length; i++) {
// a[i]= a[i].slice(0,1).toUpperCase()+a[i].slice(1).toLowerCase();
//  console.log(b[x])
//  }
//  a= a.join("");
// return a;
//  }

//  var b = abc("the quick brown fox");
//  console.log(b);

function findMinMax(numbers) {
    if (numbers.length === 0) {
        return "Array is empty";
    }
    numbers.sort(function(a, b) {
        return a - b;
    });
    var lowest = numbers[0];
    var greatest = numbers[numbers.length - 1];
    return lowest + "," + greatest;
}
var sampleArray = [1, 2, 3, 4, 5];
var result = findMinMax(sampleArray);
console.log(result);

// chapter 38

function demonstrateLocalVariable() {
    var localVar = "I am a local variable";
    console.log(localVar);
}
demonstrateLocalVariable();

var globalVar = "I am a global variable";
function accessGlobalVariable() {
    console.log(globalVar);
}
accessGlobalVariable();

//chapter 39-40
var dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Tuesday":
    case "Wednesday":
        console.log("It's a weekday, not quite the weekend yet.");
        break;
    case "Thursday":
        console.log("One more day until Friday!");
        break;
    case "Friday":
        console.log("TGIF! It's Friday!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend, time to relax.");
        break;
    default:
        console.log("Invalid day of the week.");
}
var cityName = prompt("Enter a city name:");


switch (cityName.toLowerCase()) {
    case "paris":
        alert("You entered Paris! The city of love.");
        break;
    case "new york":
        alert("You entered New York! The city that never sleeps.");
        break;
    case "tokyo":
        alert("You entered Tokyo! The bustling metropolis.");
        break;
    default:
        alert("City not recognized. Please enter a valid city name.");
}

                      //////////THE END//////////////