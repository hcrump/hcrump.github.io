# Javascript

## Basics

### Output

```js
console.log("adsfas"); //output to console
console.table(); //table format
```

### Declarations

```js
let a = ""; //string
let a = 1; //int
let a = []; //array
let a = {}; //object
let [a, b, c] = [1, 2, 3]; //all at once
```

---

## Strings

### String Misc

```js
string.split("").reverse().join(""); //reverse string
string.repeat(x); //repeat string x times
string.slice(from,until); // like array slice.
```

### String to Array

```js
Array.from(str);
[...str];
str.split("");
```

### Testing String is Empty

```js
str.length > 0;
!str.length
str === "";
str  			// has any value
!str
if(!str || 0 === str.length)
if(!str || /^\s*$/.test(str))
if(!Boolean(str))
if(str.replace(/\s/g,"")== "") // slow
```

### String to Integer

```js
+str; //unary. my favorite.
Number(str);
Math.floor(str); // Good but incorrect on negative division. 3 / -2 = -2, use Math.trunc()
~~str; // new math.floor
parseInt(str); //slowest
str * 1;
```

### Integer to String

```js
String(n); // Most clear. Works with null and undef
n.toString(); // fails on null or undef
"" + n; // Simple. Just a concat
n + ""; //same as above
`${n}`; // Unclear, but template string seems fast
```

### String Methods

##### split
```js
// splits string into array
split(separator,[how many to split]);
str = "1,2,34-34";
str.split(); // ["1,2,34-34"]
str.split("-"); // ["1,2,34", "34"]
str.split(""); //["1", ",", "2", ",", "3", "4", "-", "3", "4"] 
str.split("",2); //["1", ","]
```

---

## Arrays

### Array Misc

##### create

```js
Array.from  // check
let arr = [];
let arr = new Array(); // check if length needed in ()
let ar2 = [...arr] // need brackets or it will point to same memory
let arr = Array.of();//check
let arr = [].concat(arr2);
let arr = anything that returns an array //Object.keys/values and map/reduce/filter ,etc
```

##### other

```js
arr.fill; // initialize
```

##### Array to String

```js
arr.join(""); // '123'. Can add separator >> (',') '1,2,3'
arr.toString(); // '1,2,3'
```

### Copy/Merge Arrays

```js
arr = [3, 4, 5];
arr2 = [4, 5, 6];
let merged = [0, ...ar, 2, ...ar2];
let arrcopy = [...arr]; // this is a copy, not a reference
```

### Add/Del Elements

```js
push/pop : unshift/shift // push onto/pop off of end : unshift onto/shift off of front
slice(from index, until index(not inclusive)) //(0,3) slices 0,1,2 out. doesn't alter original, return array of sliced.
splice(idx,[howmany]) // (0,2) splices 0,1 out. (0) is 0 to end. alters original, returns array of sliced.
arr.indexOf(item) then splice // remove by value
const [a,b,...arr] = [1,2,3,4,5] // arr = [3,4,5], neat way to slice.
```

### Array Methods

##### slice

```js
// copies from array
// slice(from index, until index but not including)
// Returns new array of deleted entries; Original IS NOT altered.

x=[0,1,2,3,4]
let newarr = x.slice(1,4);
//newarr = [1,2,3], x is unchanged
```
##### splice

```js
// deletes and inserts array
// splice(from index, how many to splice, insert1,insert2,...)
// Returns new array of deleted entries; Original IS altered!

// deletes
x=[0,1,2,3,4]
let newarr = x.splice(1,4);
//newarr = [1,2,3,4], x = [0]

// inserts - uses parameters 3-5
x=[0,1,2,3,4]
let newarr = x.splice(1,0,'a','b'); //start at index 0, delete 0 elements, insert a and b
//newarr = [], x = [0,'a','b',1,2,3,4] //returns only deleted elements, so an empty array
```

##### map

```js
let newarr = arr.map(x => x * 2);
//returns same length array.
```

##### filter

```js
let x = arr.filter((value, index) => {
	value >= 25;
});
//returns an array of values that pass the conditional
```

##### reduce

```js
let val = arr.reduce((a, b) => a + b);
//returns sum of array values
```

##### some

```js
if(arr.some(x => x === 0))
//returns true if at least one element is true
```

##### every

```js
if(arr.every(x => x === 0))
//returns true if all elements are true
```

##### sort

```js
let newarr = arr.sort(); //alphabetical sort
let newarr = arr.sort((a, b) => a - b); //numeric sort
```

### Array Notes

```js
foreach vs map: map returns an array,fast,chainable: foreach can mutate existing array, slow,not chainable.
```

---

## Objects

### Object Misc

```js
let obj = {};
let obj = new Object();
Object.assign(obj1, ...objects); //copies or overwrites
```

### Object Manipulation

```js
Object.fromEntries; //creates an object out of pairs, eg. a Map
Object.keys(); //gets keys duh
Object.values(); //gets values (optional index)
Object.entries(); //gets key and value (optional index)
Object.freeze(obj); //make obj immutable.
```

### Object Loops

##### Object.values

```js
// gives the index (not the same as a numbered key!!)
Object.values(obj).forEach((val, i) => {
	console.log(i, val, typeof val);
});
```

##### Object.entries

```js
//can use index,key,value
Object.entries(obj).forEach(([key, val], i) => {
	console.log(i, key, val);
});

//for ...of version
for (let [i, [key, val]] of Object.entries(Object.entries(obj))) {
	console.log(i, key, val);
}

// object of arrays
Object.entries(obj).forEach(([key, val]) => {
	val.forEach(x => {
		console.log(key, x);
		anotherObj[x.toLowerCase()] = +key;
	});
});

// map version
Object.entries(obj).map(([key, val]) => {
	val.map(x => (expected[x.toLowerCase()] = +key));
});
```
### Object Destructuring
```js
const user = {
	bob: {
		age: 22,
		haircolor: "brown"
	}
};
const {bob: { age,haircolor}} = user; //copies object vars to new vars of the same name
const {bob: { age : newAge, haircolor:newHairColor }} = user; //copies to different variable names



```
### Object Misc

```js
object dot notation can't be used with variables!
use Map() instead of object if speed is important
using Object.entries  etc is better than for...of except for speed.

```

---

## Map Object

### Map Usage

```js
// a better map than using regular object
let myMap = new Map()
myMap.set('string',value);
myMap.set(object,value);
myMap.set(function,value);
myMap.get('string');
myMap.keys();
myMap.values();
myMap.entries();

//simple for..of loop
for(let [key,value] of myMap.entries()){
	console.log(key,value);
}

```

---

## Functions

### Function Misc

### Random Interesting Snippets

```js
export const iterate = (object, func) => {
	const entries = Object.entries(object).map(([key, value]) =>
		Array.isArray(value)
			? [key, value.map(e => iterate(e, func))]
			: typeof value === "object"
			? [key, iterate(value, func)]
			: [key, func(value)]
	);
	return Object.fromEntries(entries);
};
```

```js

```

### Function Defaults Parameters

```js
//see this a lot
function eatFruit (fruit) {
    fruit = fruit || "strawberry";
    ...
}

//better way probably
function eatFruit (fruit='strawberry') {
    ...
}
```

---
### Recursion

```js
//basic function to create array large to small
function countdown(n) {
	let arr = [];
	for (var i = 1; i <= n; i++) {
		arr = arr.unshift(i);
	}
	return arr;
}

// recursive options

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}
```

---

## Classes

```js
// basic example
class Clock {
	constructor(hours = 0, minutes = 0) {
		this.minutes = (60 + (minutes % 60)) % 60;
		this.hours = (24 + ((hours + Math.floor(minutes / 60)) % 24)) % 24;
	}

	toString() {
		return (
			this.hours.toString().padStart(2, "0") + ":" + this.minutes.toString().padStart(2, "0")
		);
	}

	plus(mins) {
		this.hours = (24 + ((this.hours + Math.floor((this.minutes + mins) / 60)) % 24)) % 24;
		this.minutes = (60 + ((this.minutes + mins) % 60)) % 60;
		return this.toString();
	}

	minus(mins) {
		return this.plus(-mins);
	}

	equals(clock2) {
		return this.toString() === clock2.toString();
	}
}

let myClock = new Clock(50, 22);
```
---
## Async Stuff

### Promise
```js
// 3 states: pending,fulfilled, rejected

const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer represents a response from a server
	let responseFromServer;
    
	if(responseFromServer) {
		resolve("We got the data");
	} else {  
		reject("Data not received");
	}
});

//then comes from result of the resolve method.
makeServerRequest.then(result => {
  console.log(result);
})

makeServerRequest.catch(error => {
  console.log(error);
});
```
---
## Regular Expressions (Regex)

### Regex Methods

##### test method
```js
// returns true or false
// form: regex(string)
let myString = "Hello, World!";
let myRegex = /Hello/;
myRegex.test(myString); // returns true/false
/dog|cat|bird|fish/ // OR match
/something/i // caseless
```
##### match method
```js
// match and returns the match
// form: string(regex)  
'string'.match(/regex/); // use variable string as well.

```
##### replace
```js
// regex can be a variable, replaceval can be a string "$2 $1"
'string'.replace(regex,replaceval)
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); //swaps

```
### Flags/Symbols
```js
/asdfdas/i 	//case insentive
/asdfasd/g 	//global. multiple matches.
/.un/		//dot wildcard matches anything (sun,bun,tun,wun,etc)
/[aeiou]/	//brackets, match any separate letter of a,e,i,o,u.
/[a-zA-Z]/g 	//match a-z and A-Z
/[a-z]/ig	//same i think
/[^a-z0-9]/ig 	//anything but letters and numbers.
/a+/g		//one or more a's match
/Aa*/g		//matchs any A or Aa or Aaaa,etc
/<.*?>/		//lazy match, finds the smallest <h1>asdf</h1> would be <h1>,not entire thing
/^Cal/		//matches beginning of string starting with Cal
/asdf$/		//matches asdf at end of line
/\w+/		//closest to matching alphabet same as /[A-Za-z0-9_]+/
/\W/		//opposite of \w. 
/\d/		// 0-9 digits\
/\D/		// non digits
/\s/		// white space
/\S/		// nonwhite space
/a{3,5}/	// matches any 3-5 a's. aaa,aaaa,aaaaa
/a{3,}/		// matches 3 or more a's*$/
/a{,3}/		// matches 0 to 3 a's
/a{3}/		// matches exactly 3 a's
/favou?rite/ 	//? matches 0 or 1
(?=\w{3,5})(?=\D*\d) //positive look ahead 3-5characters and ends with digit
(?!\w{3,5}) 	//negative look ahead not 3-5 characters
/(\w+)\s\1/	//capture group 1 is \1, same as in parenthesis.
```

---

## Dates

### Date Misc

```js

```

### Adding Milliseconds to Date Object

```js
const gigasecond = date => {
	return new Date(date.getTime() + 1e12);
};
```

## Time

```js
this.minutes = (60 + (minutes % 60)) % 60; // calc the minute hand. pos/neg values work. ex. -90mins would be on 30.
this.hours = (24 + ((hours + Math.floor(minutes / 60)) % 24)) % 24; // calc the hour hand +- vals work
```

---

## Other

### Type Checking

```js
typeOf x === 'number'
isFinite(n)
Number.isInteger(n)
isNaN // fails on "number" ex. "90". thinks it's a number
```

### Formatting

```js
parseFloat(num.toFixed(1)); // number changed to 1 significant digit as string, back to float.
num.toPrecision(2); // how many places to the right of the decimal place to show, eg. 10.02
str.padStart(2, "0"); // makes a 2 digit number and puts a zero if one digit, eg. 1 is 01, 9 is 09, 10 is still 10
```

### Errors

```js
throw new Error("Invalid bullshit!");
```

### Flooring

```js
let num = 3.14; // want 3
Math.floor(num); // standard but slow
~~num; // bitwise NOT
num | 0; // bitwise OR
num << 0; // bitwise Shift
num >> 0; // bitwise Shift
num >>> 0; // triple bitwise Shift
```

---
## Modules

### Script
```js
// may need to enable type module, not sure
<script type="module" src="aasdf.js">
```
### Export
```js
// do this at end of script with functions

//named export
export {function1, function2 }; // allows importing of functions.

//default export - can only be one. can't use with let,var,const
export default function sum(x,y){ return x + y;} //named function
export default function(x,y) { return x + y;}  //anonymous function
```
### Import
```js
// do this at start of document

//name imports
import {function1, function2 } from "./blah_functions.js" ; // allows importing of functions.
import * as myFunctions from "./my_functions.js";

//default imports
import blah from "./blah_functions.js"; //blah is a variable that gets the default.can be named anything.
```
---

## TOPICS to clarify

```js
optional chaining operator
```

## CODE SNIPPETS

### Count occurances in array

```js
let letters = ["a", "b", "c", "c", "d", "d", "a"];
//simple reduce
let occ = letters.reduce((result, value) => {
	if (!result[value]) {
		result[value] = 0;
	}
	result[value]++;
	return result;
}, {});

// new Map and ??(null coalesce operator)
let occ = letters.reduce(
	(result, value) => result.set(value, (result.get(value) ?? 0) + 1),
	new Map()
);

// foreach approach
const result = {};
letters.forEach(letter => {
	if (!(letter in result)) result[letter] = 0;
	result[letter] = result[letter] + 1;
});

//comma operator, tries to increment and if fail, then assign 1,return prev
let occ = arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

// wut? need to test this
letters.forEach(function(a) { this[a] ? this[a]++ : this[a] = 1 }.bind(result = {}))
```

## TOOLS

### Online tools

```js
repl.it; //running code snippets
jsperf; // performance testing
```
