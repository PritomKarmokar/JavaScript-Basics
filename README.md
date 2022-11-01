# JavaScript-Basics

## Resources
01. Udemy : [udemy.com/course/javascript-essentials/](https://www.udemy.com/course/javascript-essentials/)
02. w3schools : [https://www.w3schools.com/js/](https://www.w3schools.com/js/)
03. The Net Ninja : [Object Oriented JavaScript](https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7)

## Day - 01
* JavaScript - Based on Scheme and Self.
* JavaScript is the programming language of the Web.
* "Java" and "JavaScript" both are completely different language having completely different syntax.
* You don't have to get or download JavaScript.
* JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.
* JavaScript has it's own console where javascript commands can be written.These commands will be run by compiling JIT(Just in time) compiler and the output's will be returend in the human readable format.

#### Primitive datatype
JavaScript basic datatypes are:
01. string : "abc", 'name', etc. (Anything inside "" or '')
02. integer : 10, 100, 2000, etc.
03. floats : 10.1, 100.34, 2000.2, etc.
04. boolean : true, false.
05. null : means that there is no value assigned, it is empty.
06. undefined : same as null.Means that it's undefined or it doesn't have anything assigned.
07. NaN : not a number. 

* JavaScript is a loosely typed data. That means we can assign any data type to any data values.
```javascript
var blank = "abc";
// now value of 'blank' is "abc" which is string value.
blank = 10;
// after reassignment value of 'blank' becomes 10 which is a integer value.
const val = 10;
// if we use 'const' type variable it's value can't be modified and always remains the same.
```

#### Operator Precedence 
B O DM AS  
where,  
B - bracket  
O - power  
DM - divison and multiplication (both have same precendence)  
AS - addition and subtraction (both have same precendence)  
         
### Adding JS file in HTML file
We can add JS file in HTML in the <head> section or in the <body> section.But it is preferred to add JS file in the bottom of the <body> section because HTML files are loaded line by line and if our javascript file is large in size it'll hold up rendering.That's why it is preferred to add js files using 'script' tag at the bottom. Example: [see here](https://github.com/PritomKarmokar/JavaScript-Basics/blob/main/day_01/index.html)

## Day - 02
* Objects : Objects are variables too. But objects can contain many values. Objects can have properties and methods.
```javascript
const person = {
    firstName : "John",
    lastName  : "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
```
Here, (firstName, "John"), (lastName,"Doe"), (age,50), (eyeColor, blue) these (key, value) pairs are called properties and fullName() is method.
 
   We can access object properties in two ways:
```javascript
objectName.propertyName 
// person.firstName
```
   or  
```javascript
objectName["propertyName"]
// person["firstName"]
```
   We can access an object method with the following syntax:
```javascript
objectName.methodName()
// var name = person.fullName();
```  
*  Array is a special type of objects that follows 0 - based indexing.  
```
fruits = ["apple", "orange", "pear"];
```
#### Embedding Objects and Arrays
   Objects can contain objects inside of an object.
```
var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        // pistons: ["pistion1", "piston2"]
        pistons: [ {maker: "BMW"}, {maker: "BMW2"} ]
    },

    drive: function() { return "drive"; }
    
};
```
   An array can also many objects.
```
var array = [
    "string",
    100, 
    ["embed", 200], 
    {car: "ford"},
    
    // We can also define a function in the array.
    // But we cannot define a name here like the aboce 'drive' method because here 'key' is a number.
    function() { return "drive"; }
];
```



