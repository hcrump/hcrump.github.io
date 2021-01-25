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
+str; //unitary
Number(str);
Math.floor(str);
~~str; // new math.floor
parseInt(str); //slowest
str * 1;
```

### Integer to String

```js
String(n); // works with null and undef
n.toString(); // fails on null or undef
"" + n; //concat
n + ""; //same as above
`${n}`; // template string seems fast
```

### String Methods

```js

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
arr.fill // initialize
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
push/pop, unshift/shift // end, front
slice(idx) // removes,no alter orig, ret sliced as arr
splice(idx,howmany) // removes, alters orig, ret sliced as arr
arr.indexOf(item) then splice // remove by value
```

### Array Methods

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
let obj = new Object;


```
### Object Manipulation
```js
Object.fromEntries //creates an object out of pairs, eg. a Map
Object.keys() //gets keys duh
Object.values() //gets values (optional index)
Object.entries()//gets key and value (optional index)
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
### Object Misc

```js
object dot notation can't be used with variables!
use Map() instead of object if speed is important
using Object.entries  etc is better than for...of except for speed.

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
      : typeof value === 'object'
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

let myClock = new Clock(50,22);
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
parseFloat(num.toFixed(1)) // number changed to 1 significant digit as string, back to float.
num.toPrecision(2) // how many places to the right of the decimal place to show, eg. 10.02
str.padStart(2,'0') // makes a 2 digit number and puts a zero if one digit, eg. 1 is 01, 9 is 09, 10 is still 10

```

### Errors

```js
throw new Error("Invalid bullshit!");
```
### Flooring
```js
let num = 3.14  // want 3
Math.floor(num) // standard but slow
~~num   		// bitwise NOT
num | 0			// bitwise OR
num << 0		// bitwise Shift
num >> 0		// bitwise Shift
num >>> 0		// triple bitwise Shift
```
---

## TOPICS to clarify

```js
optional chaining operator
```

