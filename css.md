# CSS

Just some random CSS notes for myself

## Basics



## Selectors

### Basic Selectors
```css
*    - wild card for everything
root,html    - same, but root has higher priority
body,h1,etc    - any dom element
#id1    - element with id tag of id1
.class1    - element with class name of class1
```

### Combo Selectors
```css
dom1 dom2    - Descendant, any dom2 element or class within dom1 element or class
class1.class2    - AND, element that has both class1 and class2
class1,class2    - OR, element that has either class1 or class2
class1.class2 *    - all child elements of elements with both class1 and class2
a1 > a2    - Difference, only a2 elements that are direct descendents of a1
a1 ~ a2    - Sibling, all a2 elements that follow a1 (not descendant)
a1 + a2    - Adjacent, a2 element that follows a1 (not descendant)
```

### Pseudo Selectors
```css
:first-child
:last-child
:nth-child(x)    - x can be integer,even,odd,formula(An+b)
:nth-of-type(x) - more flexible than nth-child
:not(class)    - element that is not part of specific class
::before    - inserts element before
::after    - inserts element after 
:hover    - mouse hover
:focus    - keyboard or program focus
:active    - being clicked
:link    - not clicked links
:visited    - already clicked links
```
### Other
```css
.someclass button#open    - button with id 'open'
```
### Misc
```css
.class::before{
 content: "";     /* must add content when using ::before */
}
```
### Position Layout
```css
fixed: based on screen, must give top/bottom,left/right. stays on screen even if scroll.
relative: position based on self. use this so children can be set to absolute based on this container.
absolute: position based on last relative parent. defaults to html i think
sticky: like fixed, but will move until it hits a scroll position. eg. top 0, sticks at top.
static: default, follows normal flow.


```
## Basic Starter Template

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");


/* customer variables */
:root {
	--color-one: #e0e0e0;  
	--color-two: #a4a4a4;
}

* {
	box-sizing: border-box; /* includes padding and border in total width/height calculation */
}

body {
	font-family: "Roboto", sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	overflow: hidden;        /* hides scrollbars */
	margin: 0;
}

.container {
}
```