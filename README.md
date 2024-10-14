# p5.js multi sketch template

thoughts: got a seconds counter, minutes counter technically works but how to get it with just digits left of the decimal? round() doesnt really work because as soon as the seconds goes over half, it switches to the next minute

i tried out .toFixed and that did not work since it still rounds, and then Math.trunc() worked. but now i need to fix the problem of the seconds counter showing 60, when really the second it hits 60 it should reset to 0. 

i think i fixed this just by changing the seconds counter from using round() to using the Math.trunc() and then I made the hour counter but since I'm not using a day counter, it doesn't need to be able to flip over after 24 hours.

then i turned it into the proper reset text counter i wanted, since i was just using the seperated out counters as a test to keep track of each function

now i need to figure out how to make it so every time the page is clicked it resets the counter, because right now the function mouseClicked () { setup();} is not resetting it... will it if i move all the variables to be global variables? no it will not. so far still not seeing a way to reset the counter

then i tried to figure out if there was a function that would just reload the entire webpage but i couldnt seem to find that either..


for the grapefruit drawing I did painting to enlarge and see, inserting a painting and every click would enlarge the image. took me a second to remember how to implement this, but i ended up on setting up the height/width as a global variable.
then i changed the image to be a square painting

then it took some fiddling and remembering but i managed to get it so every time the image fills the screen, a click resets it.


By putting different sketch.js and index.html files in directories we can more easily switch between multiple experiments.

---

This is a README file that can be used to describe and document your assignment.

Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---
---

# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

**bold text**

*italicized text*

~~strikethrough text~~

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- First item
- Second item
- Third item

`short code block`

```
extended code block
fun() {
  return 0
}
```

Link:  
[linked text](https://www.example.com)


Image with url:  
![image description](https://dm-gy-6063-2024f-b.github.io/assets/homework/02/clark-espaco-modulado-00.jpg)


Image on repo:  
![image description](./file-name.jpg)


To start a new line, add two spaces at the end of a line, like this:  
this is a new line.


To start a new paragraph, leave an empty line between two lines of text.

This is a new paragraph.
