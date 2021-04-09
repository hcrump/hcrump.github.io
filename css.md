# CSS

Just some random CSS notes for myself

## Basics

### Basic Starter Template

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

### Misc
```css
.class::before{
 content: "";     /* must add content when using ::before */
}
```