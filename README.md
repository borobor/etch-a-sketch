# etch-a-sketch
My take on the etch-a-sketch project from The Odin Project

# Fun project overall!

## What I've learned:
1. Scope can be troublesome when using functions! If I omit using `let` or `const` when declaring a variable inside a function it then becomes a global variable and can be used from everywhere in the code! This came in handy for now but I'll have to see if this is a recommended practice.
2. I now know how to remove all children from a given node. Ofc there are many ways to do this but this one looks pretty good easy to read:
 ``` 
 while (container.firstChild) {
  container.removeChild(container.lastChild);
 }
 ```
 
 This is now a pretty basic v1! I also added optional `randomColor()` function which gives the pixels a random color instead of black:
 ```
 function randomColor() {
	let rand = () => Math.random()*256;
	event.target.style.cssText = `background-color: rgb(${rand()}, ${rand()}, ${rand()})`;	
}
```
`rand` is actually a function so in the next line we actually call it for 3 separate times which results in a different random value for a color, pretty cool!
