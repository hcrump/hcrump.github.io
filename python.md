# Python

## Basics

## Strings

### String Functions/Methods

```py
//string casefold() method instead of lower()
```

##### replace

##### any

test_strings = ['string1', 'string2', 'string3' ]
if any(string in longer_string for string in test_strings):
do a thing...

### List Copy

```py
copy use .copy() or.deepcopy() since list copies point to each other

or

use b = a[:] to make true copy and not pointer
```

## Lists

## Dictionaries

### dict check/set

```py
a.get('b','somedefault') // get key if exist, return 'somedefault' if not

a.[key] = a.get(key,0)+1 // add keys to dict and increment (for counting)(k+1 or 0+1)

a.setdefault('color','black') // set if not exist,nothing if exists

dic.setdefault(i, []).append(movie) // sets a key and appends the list to a dict
```

### dict merging

```py
z = {\*\*x,\*\*y} // left to right overwriting
```

### dict pretty format

```py
import pprint
pprint.pprint(dict)
dict get default .get(id,default)
```

### dict sort by value

```py
sorted(adict.items(), key=lambda x: x[1])

OrderedDict(sorted(d.items(), key=lambda t: t[0])) //bykey

OrderedDict(sorted(d.items(), key=lambda t: t[1])) //byvalue

OrderedDict(sorted(d.items(), key=lambda t: len(t[0]))) //by key length

for i in dic.values: i.sort() // works if dict of lists as list are mutable in place

import operator -> sorted.(adict.items(), key=operator.itemgetter(1))
```

## Functions

## Classes

## I/O

## Other

if isinstance(obj,int)
// use to compare type instead of type(x) = int

os.makedirs has \*\*kwargs exist_ok

#test flags
x,y,z = 0,1,0
if 1 in (x,y,z):
if any((x,y,z)):
normal if x or y.. if x ==1 or y == ...
#input test
if not 'yes'.startswith(user_input.lower()):
#swap variables a, b = b, a

## Tuples

### tuples within list

```py
for line in file_reader:
parts = line.split(" ")
line_tuple = (int(parts[0]), parts[1], int(parts[2]), int(parts[3]), float(parts[4]))
results.append(line_tuple)
```

### create list of tuples from dict

```py
x = adict.items() // short
xxx = [(k,v) for k,v in z.items()] // list comp
for k,v in adict.items(): x.append( (k,v) ) // long
```

### test for type

try:
int(x)
...
except:
return False...

### filter to swap stuff in list i think

filter(...)

### count string using string.count(something)

### list[tuple] to file

def write_1301(filename,tup):
f = open(filename,"a")  
 for i in tup:
print(i[0],i[1],i[2],i[3],i[4],file = f)  
 f.close()

### get list index

lst.index("a")

# read file spaces delims

def get_grade(filename):
f = open(filename)
score = 0
for i in f:
line = i.split()
score += (int(line[2]) / int(line[3])) \* float(line[4])

# sort double list using reverse()

    for i in movies:
        i.reverse()
    movies.sort()
    movies.reverse()
    for i in movies:
        i.reverse()

# reverse sort list using sorted(list,reverse=True) or list=list.sort() #inplace

### replace punctuation

to_replace = ".,'!?"
for i in to_replace:
sentence = sentence.replace(i,"")
//print raw strings
print(r'sdfa\asdf') prints the \
//string justify use rjust/ljust/center
'hello'.rjust(5,'\*') -> **\***hello
//string copy/paste
import pyperclip ...
//dissassemble code (shows assembly instructions)
import dis -> dis.dis(somefunction)
//dict.get vs dict.setdefault
get returns a default if no key, setdefault sets the key if no key.
//class decorators, don't use getters,setters,etc. See property decorators
x = property(getx,setx,delx, "adsfasd"). or use @property or @x.setter, @x.deleter
//timeit
if **name**=='**main**':
from timeit import Timer
t = Timer(lambda: bubblesort1(lst))
print(t.timeit(number=1))

timeit.timeit('"-".join(str(n) for n in range(100))',
number=10000)
timeit.timeit('"-".join([str(n) for n in range(100)])',
number=10000)
timeit.timeit('"-".join(map(str, range(100)))',
number=10000)
//time.clock
start = time.clock
totaltime = time.clock - start
//random shuffle -> random.shuffle(list)
//numpy
import numpy as np
lst = np.array(alist)
lst.shape get rows cols
a = lst < 1 // list a of all lst values less than 1
print(a)
print(baseball[:,1]) // print only 2nd column as [ x x x x] (horizontal)

### matplotlib

```py
import matplotlib.pyplot as plt

//Make a line plot: year on the x-axis, pop on the y-axis

plt.plot(year,pop)

plt.scatter(gdp_cap,life_exp, s = np_pop)
//scatterplt of 2 lists and population stats for size of dots.
plt.show()
plt.hist(list,bins=20)
plt.clf() #clear
plt.xscale('log')
plt.xlabel() / ylable() / title() // strings for charts labels
plt.xticks(tick_val,tick_lab) // convert axis labels. ex. [1000,2000], ['1k',...]
plt.grid() //shows grid
```

### Pandas

```py
import pandas as pd
cars = pd.read_csv('cars.csv',index_col = 0)
```

### Regular Expressions

```py
import re
re.search('^From ',x) //return True or None
x = re.find(...,x) // returns the index of the match
findall //returns list
re.match(..)
print re.sub(r'([\w\.-]+)@([\w\.-]+)', r'\1@yo-yo-dyne.com', str) // searcha and replace
// \1 is a variable that matches the last grouping
print( sum( [ int(i) for i in re.findall('[0-9]+',open('regex_sum_42.txt').read()) ] ) ) //sum all nums in file
x = re.compile(r'\d\d\d-\d\d\d-\d\d\d') // use compile to get re object
//ignore case with (r'xxx',re.I)
//re.DOTALL tells wildcard to match newlines as well. re.VERBOSE allows formatting of pattern with spaces and comments.
x.search('my number is 415-555-1212') // use search method to get 1 match.
//use findall to get list of all matches
x.group() // prints output x.group(o) is all match, x.group(1) gives first match in parens ()
if you use x.findall(...) without groups it returns tuples of the groups. otherwise it returns a list matches
^(?=._(?:jpg|png))(?!._(?:lua|camera)).\*$
//first part matches, second excludes. ?: seems optional.
```

## XML

```py
import xml.etree.ElementTree as ET
tree = ET.fromstring(data)
print('Name:', tree.find('name').text)
print('Attr:', tree.find('email').get('hide'))
stuff = ET.fromstring(input)
lst = stuff.findall('users/user')
print('User count:', len(lst))

for item in lst:
print('Name', item.find('name').text)
print('Id', item.find('id').text)
print('Attribute', item.get("x"))
counts = tree.findall('.//count') // searches from top for 'count'
```

## URL

```py
import urllib.request, urllib.parse, urllib.error
```

## MODULES

```py
random
random.randrange(10) // 0-9 range,
random.randchoice('a,b') i think.
pyperclip // copy/paste to buffer module
pprint // print pretty strings
urllib // url stuff
webbrowser // opens url in browser. simple
beautifulsoup // html parsing
xml.etree.ElementTree // xml parsing
requests // acclamied web module use it.
import requests
res=requests.get('http://...')
res.raise... // check for success download
sys // system stuff like sys.exit()
sqlite3 // db stuff
json // json parsing read write
shelve // store vars,lists.dicts in a binary file
os // file operations
shutil // move/copy files/folders
send2trash // sp? sends files to trash bin instead of deleting. Safer.
//convert secs to time
import datetime -> str(datetime.timedelta(seconds=999.9))
tenths = t % 10 // these are to convert hundreths of secs ex. 9999 is actually 999.9 secs
ones = t //10 % 10
secs = t //100 % 6
mins = t // 600
```

### logging

```py
import logging
logging.basicConfig(filename = 'buh',level=logging.DEBUG, format='%(asctime)s - %(levelname)s-%(message)s') # omit filename keyword if not needed.
logging.debug('enter msge here in your code')
logging.disable(logging.CRITICAL) # enable to stop logging CRIT and below.
```

### ERRORS

```py
assert # for programmers errors
raise # for user errors
try/except
```

## QUESTIONS

defaultdict usage?
error when set dict = {}
