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
```
### Casting/Conversion
```cpp
double z = 33.3;
x = (int)z; // old way, z is cast to int temporarily and assigned to x
x = static_cast<int>(z); // new way

```
## Preprocessor Directives

### #include <iostream>
```cpp
standard c libraries
```
### #include <iomanip>
```cpp
setprecision(x)
ios::fixed
```
### #include <string>
 ---
## Input/Output

### Input
```cpp
<< //stream insertion operator
cin 			//console input works with all datatypes
getline(cin,str)	// gets string;
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