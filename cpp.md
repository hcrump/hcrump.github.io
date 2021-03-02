# C++

## Basics

### Include / Define
```cpp
#include <iostream>
#include <math.h>
#define show(a) std::cout<<a<<std::endl;
#define Syswait std::system("pause");
```
### Variables

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
int num;     //unitialized int
int num = 12;   //initialized int
int values[3];   //unitialized array, must declare size,eg 3 elements
int values[] = {1,2,3}; //initialized to values, don't need size
int values[3] = {};  //auto initializes to [0,0,0],but need size
int values[] {1,2,3}; //universal initialization is new.
static int values[3];  //static arrays are always initialized to zeros if not explicity set.
int num[10][10];  //multidimensional array
int nums[][3] = {  //multidimensional array
        {1,2,3},  //declare both sizes if empty. only 2nd needed if initialized
        {4,5,6}   // use for loop to populate if empty.
    };   // must end with semicolon
string s("a;lksdjalksjflkasdfk"); //different way to assign string
bigger = a > b ? a : b; //ternary
bigger = a > b ? (smaller = b, a) : (smaller = a, b); //double assign ternary,comma operator

```

### Casting/Conversion

```cpp
double z = 33.3;
int x = somechar // some things are implicit and don't need casts
x = (int)z; // old way, z is cast to int temporarily and assigned to x
x = static_cast<int>(z); // new way
typeid(x).name(); // checks type
::x //unary scope operator, says to use the global version of variable x
```

### Integer info

```cpp
INT_MAX  //2147483647
INT_MIN  //-2147483647
UINT_MAX //4294967295
```

### Char info

```cpp
char cval = '7'; //7
(int)cval; //ascii code for character '7'
sizeof(char) //1 byte
(wchar_t)cval //cast to ascii code number 55

wchar_t wval = 'i';  //gives ascii code of 'i' of 105
(char)wval;  //recast to 'i'
```

## Strings

```cpp
s.at(i) //same as s[i] but it checks for out of bounds. safer than operator[i]
getline(cin,s) //like cin >> s, but will read up to newline. std strings. for cstrings use cin.getline
cin >> s //only gets a word, stops at whitespace
isupper(s.at(i)) // true/false
s.insert(0,1,s[i]) //insert char at pos 0;
num = static_cast<int>(s.at(i)); //get ascii of string character
string str = s.substr(8,3); //return substring from position 8 and 3 characters.
s.find("charOrString",0);returns index number where "charOrString starts. 0 is start point to searchs
strlen returns length of string not including trailing null
sizeof returns number of bytes based on type * #elements. so sizeof(['a','b','\0'])is 3.
```
## CStrings
```cpp
// old C type strings are char arrays with '\0' (null) at end

char str[24]; // only holds 24 characters including '\0', 23chars + null
char aString[] = "hello"; // compiler adds '\0', so "hello\0";
char aString[] = {'h','e','l','l','o',\0'} // equivalent
cin >> aString; // no. will end at space
cin.getline(str,maxchars)  // yes, reads spaces, reads until newline, strips newline
cin.get(str,maxchars) // leaves terminating character in stream (eg. \n);
//maxchars includes null. So, make it the same as array size.

// can't copy using '='
// use strcpy_s the _s is thread safe. old was strcpy
strcpy_s(dest,src);

// passing to functions
someFunc(ar); //same as normal arrays

// string length
int length = strlen(ar); //returns length - null

// common string functions
strcpy_s(destStr, srcStr); // copies srcStr to destStr
strcpy_s(destStr, size, srcStr); // copies size number of characters
strlen(str) // returns length not including null
strcat(str1,str2) //concats both strings
strcmp(str1, str2) // str1=str2 is 0, str1<str2 is -1, str1>str2 is 1
```

## Vectors
### Vector Declaration
```cpp
// array that handles changing size
#include <vector>  //needs
vector <type> v; //has no size
v[1] = 10; //error, must reserve space

vector <int> v(100) // reserve space using constructor
v[1] = 10; // works now

v.resize(25); // create space for 25 items 
v.resize(v.size() + 25) // resizes to another 50

v.size(); //gives number of elements (unsigned int)
v.push_back(32); // adds int value of 32 to end of v
```
### Vector Functions
```cpp
Function              Description
at(size_type index)   // Returns a reference to the element at the location specified.
back()                // Returns a reference to the element at the end of the vector.
begin()               // Returns an iterator to the start of the vector.
clear()               // Erases the vector.
empty()               // Returns true if the vector is empty.
end()                 // Returns an iterator one past the end of the vector.
erase(iterator where)
erase(iterator first, iterator last)  // Removes a single element or range of elements.
front()               // Returns a reference to the first element of the vector.
insert(iterator where, const type &val)
insert(iterator where, size_type number, const type &val)
insert(iterator where, iterator input_begin, iterator input_end) // Inserts a value or values into a vector at the specified position(s).
pop_back()            // Deletes the element at the end of the vector. (Compare with back)
push_back(const type &val)  // Adds an element to the end of the vector.
size()                // Returns the number of elements in the vector.
==, !=                // Returns true or false.
<, <=, >, >=          // Returns true or false
=                     // Assigns one vector to another
```
### Iterators
```cpp
vector::iterator p;  // create iterator

vector <int> v;      // example
vector <int>::iterator p;

p = v.begin();  // set to begin()
p = v.end();    // also can set to end()

for(p = v.begin(); p < v.end(); p++) //loop example

cout << *p << endl; // get output this way
```
## Loops

### For Loop Misc

```cpp
//reverse loop
for(int i=str.length()-1;i >= 0; i--)...

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

//loop through string
string s = "a09A!";
char c;
int i = 0;
while (( c = s.at(i++)) != '!')
{
 cout << c << ":"<< (int)c << endl;
}

// Range Based for loop
for(int i : someVector)
```

## Pointers

### Pointer Basics
```cpp
int *ptr;  // declare pointer of type int called ptr
int num = 0;
ptr = &num; // assign address of num
ptr // address
*ptr // value at num's address, 0


int arr[] = {1,2,3};
int *ptr = arr; // no need for & since arrays are referenced
int *ptr = &arr[0]; // can point to any part of array
ptr // address of arr and arr[0];
*ptr // value at arr[0] -> 1
ptr++ // same as arr[1]
*ptr++ // incrementing value at arr[0], 1 is now 2
```

### Pointer to Pointer 
```cpp
const char* c[] = {	"first", "second", "third"};
const char** cp[] = { c, c+1, c+2 };
c 008FF8E8
c + 1 008FF8EC
*c first
*c + 1 irst
*(c + 1) second
c[0] first
c[1] second
*c[0] f
*c[1] s

cp 008FF8D4
*cp 008FF8E8
**cp first
cp[0] 008FF8E8
cp[1] 008FF8EC
*cp[0] first
*cp[1] second
**cp[0] f
**cp[1] s
```

### Pointer to strings 
```cpp
// behaves differently?
int ar[] = { 1,2 };
int* p = ar;
cout << p << endl; // prints address

char str[] = "Hello";
char* s = str;
cout << s << endl; // prints Hello , wut?
	
// apparently strings are handled differently
// the << operator is overloaded for const char* which prints the string
// int array for example is overloaded to const void* and prints the address
// just cast to const void* to get address
// eg. cout << static_cast<const void*>(s) << endl;  parens around s needed.
// same address as the array, &str;

```
### Pointer Incrementing 
```cpp
// voodoo
while(*s){
	cout << *s++ << endl; 
}
// why does this work? ++ increments s, not *s.
// ++ has higher precedence than *,so
// ++ will increment s, but only after the expression is done
// *s, the dereferenced value is printed first, then
// s, the address is finally incremented
```

### Pointers to functions
```cpp
// void function pointer can point to other functions.
void foo();
int main()
{
    void (*func)();
    func = foo;
    func();

    return 0;
}
void foo()
{
    cout << "buh" << endl;
}

int main()
	void (*func[4])();

	func[0] = one;
	func[1] = two;
	func[2] = three;
	func[3] = four;

	for (int i = 0; i < 4; i++)
	{
		func[i]();
	}
...


//calling pointer to function with address, i think
void *ptr;
ptr = ...some address;
((void (*)(void)) ptr)();
// or
typedef void (*func_type)(void);
((func_type) ptr)();
// or
reinterpret_cast<void(*)() > ptr)()
// or assign to a function 
typedef void(*HelloWorldFunction)();
HelloWorldFunction function = HelloWorld;
function(); //calls HelloWorld():
```
## Functions

### Function info

```cpp

void someFunction(int, double); //functions prototype must be declared prior to use. param name optional
int someFunction(string s, int &num); // pass by reference num.
int fillArray(ar[],ar1[][5]); // 2d array must include 2nd constant
int func(int x, int y=0); // default arg should go in prototype, not function.

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

endl //insert newline and flushes buffer
ends //insert null character, does not flush
flush //flush stream buffer
```

### \<string\>

```cpp
// Strings classes
// Could already be included in <iostream>
insert
at(index) //gets character at index
stoi(str) //string to int
stod(str)  // string to whole number
stof(str) // string to float
add stuff as i learn
```

### \<algorithm\>

So many cool things here

```cpp
all_of, any_of, none_of //bool check
for_each
count_if
generate //like js map?
shuffle // also make sure to use mersenne twister random generator
merge // merge collections
minmax // min and max of 2 numbers
minmax_element // min max of collections
accumulate // similar to js reduce?
sort
reverse //in place reverse,not returning collection
//lots more
```

### \<ctime\>

```cpp
time(unsigned int)
```

### \<sstream\>

```cpp
// allowes concat of string and int?
```

### \<ctype\>

```cpp
isdigit(ch) //is character 0-9
isalpha(ch) //is character alphabet
isalnum(ch) //is character alphanumeric
islower()
isupper()
tolower()
toupper()
isblank()
isspace()
etc
```

---

## I/O

### Input

```cpp
<< //stream insertion operator
cin //stream input, clears cout buffer before use
cin.clear() // if cin.fail state, cin won't take input, may cause endless loops
cin.ignore() // after clear, read up on this
getline(cin,str) // gets string;
scanf

```

### Output

```cpp
>> //stream extraction operator
cout //stream output buffer,use endl or fflush or cin to flush
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

## Classes

```cpp



```

## Misc

### Float Comparison

```cpp
float1 == float2  // fails, not accurate
float1 < float2 //works if precision isn't too many digits
```

### Random

```cpp
srand(static_cast<unsigned int>(time(0)));  //seed rand with time. requires ctime
int r = rand(); //16 bit 0-32767
int rRange = rand() % 101; //0-100
int rRange2 = rand() % 100 + 1; //1-100 ((0-99)+1)
int someNumber = rand() % ((max - min) + 1) + min; //(25,10) is 0-15 + min. so, 10-25
'A' + rand() % 26 // random uppercase letter
```
