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
String(n);
n.toString();
"" + n;
n + "";
```

### String Methods

```js

```

---

## Arrays

### Array Misc

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

---

## Objects

### Object Misc

```js
object dot notation can't be used with variables!

```

---

## Functions

### Function Misc

```js

```

### Function Defaults

```js
function eatFruit (fruit) {
    fruit = fruit || "strawberry";
    ...
}

or

function eatFruit (fruit='strawberry') {
    ...
}
```

---

## Classes

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

---

## Other

### Type Checking

```
typeOf x === 'number'
isFinite(n)
Number.isInteger(n)
isNaN // fails on "number" ex. "90". thinks it's a number
```

### Conversion

```
parseFloat(num.toFixed(1)) // number changed to 1 significant digit as string, back to float.
```

### Errors

```js
throw new Error("Invalid bullshit!");
```

---

## TOPICS to clarify

```
optional chaining operator
```