# C++

## Variables

```cpp
| short (also called a short int) |  2 |  -32,767 to 32,767                                         |  N/A |
|---------------------------------|----|------------------------------------------------------------|------|
|  int                            |  4 |   -2,147,483,647 to 2,147,483,647                          |      |
|  long (also called long int)    |  4 |  -2,147,483,647 to 2,147,483,647                           |      |
|  float                          |  4 |  +/- 3.4e +/- 38                                           |  ~7  |
|  double                         |  8 |  1.7E +/- 308                                              |  15  |
|  long double                    |  8 |  1.7E +/- 308                                              |  15  |
|  char                           |  1 |  All ASCII characters. Can also be used as an integer type |      |
|  bool                           |  1 |  true, false                                               |      |

// use sizeof(var) or sizeof(int/short int/float/etc) to get size in bytes
```
### Variable Declaration
```cpp
int num;				//unitialized int
int num = 12;			//initialized int
int values[3];			//unitialized array, must declare size,eg 3 elements
int values[] = {1,2,3};	//initialized to values, don't need size
int values[3] = {};		//auto initializes to [0,0,0],but need size
int values[] {1,2,3};	//universal initialization is new. 
static int values[3]; 	//static arrays are always initialized to zeros if not explicity set.
int nums[][3] = {		//multidimensional array
        {1,2,3},		//declare both sizes if empty. only 2nd needed if initialized
        {4,5,6}			// use for loop to populate if empty.
    };					
```
### Casting/Conversion

```cpp
double z = 33.3;
x = (int)z; // old way, z is cast to int temporarily and assigned to x
x = static_cast<int>(z); // new way

```
### Integer info

```cpp
INT_MAX		//2147483647
INT_MIN		//-2147483647
UINT_MAX	//4294967295
```
### Char info

```cpp
char cval = '7'; //7
(int)cval;	//ascii code for character '7'
sizeof(char) //1 byte
(wchar_t)cval	//cast to ascii code number 55

wchar_t wval = 'i'; 	//gives ascii code of 'i' of 105
(char)wval;		//recast to 'i'
```

## Loops

### For Loop Misc
```cpp
//to get length of 1-D array get sizeof(array) / sizeof(array type)
for(int i=0; i < sizeof(arr) / sizeof(int); i++){
	cout << arr[i] << " " << flush;
}

// length of 2-D array
for(int i=0; i < sizeof(arr) / sizeof(arr[0]); i++){
	for int j=0; j < sizeof(arr[0]) / sizeof(int); j++){
		cout << arr[i][j] << " " << flush;
	}
}

```

## Functions

### Function info
```cpp
//functions must be declared prior to use. 
//Can declare prototype at top or put function before called.

```


## Common Preprocessor Directives

### \<iostream\>

```cpp
// Standard I/O libraries
// may include <ios><streambuf><istream><ostream><iosfwd><string>

cin //Standard input stream
cout //Standard output stream
cerr //Standard output stream for errors
clog //Standard output stream for logging
```

### \<iomanip\>

```cpp
// Manipulate i/o

setprecision(5) //set decimal precision,use ios::fixed with this
setfill('0') //set fill character
setw(10) //set width - for setfill()
```

### \<ios\>

```cpp
// i/o base classes

fixed,scientific //notation, fixed is normal
showbase //0x14 etc
noshowpoint //1.0 is 1
dec,hex,oct // base to display
uppercase,lowercase //duh
left,right,internal //12..,..12,-..12
skipws //skip whitepaces
```

### \<ostream\>

```cpp
// Standard output
// probably included in <iostream>

endl //insert newline and flush
ends //insert null character
flush //flush stream buffer
```

### \<string\>

```cpp
// Strings classes
// Could already be included in <iostream>

add stuff as i learn
```

---

## I/O

### Input

```cpp
<< //stream insertion operator
cin //console input works with all datatypes
getline(cin,str) // gets string;
scanf

```

### Output

```cpp
>> //stream extraction operator

cout //console output
printf

cout << hex << 16 << endl; //changes output to hex
cout << oct << 8 << endl; //changes output to octal

cout << fixed << setprecision(2); //fixed just means normal numbers eg. 123.333; setprecision of 2 decimal places
cout << dollars << endl;  // fixed length with 2 decimal places
cout << scientific << setprecision(2); //uses scientific notation

```

### Error

```cpp
cerror
```

---

## Precedences Stuff

```cpp
int val = x>=y>=x ? 1:0  // same as (x>=y)>=x ; left to right
z += x < y ? x++ : y++; // x<y first, then z += (x|y), then ++; z not affected by ++;
z += -x++ + ++y; // prefix happens before work and postfix happens after, so z += -x + (y+1), x++ doesn't affect anything here.
x || y && z // && goes first. && takes precedence over ||. so x || (y&&z)
```

### Switch

```cpp
switch(val)
{
case 1:
case 2:
	cout << "case 1 will fallthrough without a break statement" << endl;
case 3:
	doSomething();
	break;
default:
	cout << "if nothing matches" << endl;
}
```

## Misc

### Float Comparison

```cpp
float1 == float2  // fails, not accurate
float1 < float2 //works if precision isn't too many digits
```
