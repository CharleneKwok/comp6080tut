## Use Vanilla JS to manipulate the DOM by creating a dynamic building object

The file `building.html` contains some HTML and CSS, which we are going to use to create some interactive art. However, we will not be editing `building.html` directly - instead we will use Javascript and the DOM API in the script `building.js` to manipulate the DOM.

1. Before rendering the HTML file, what can you tell about the page? What sorts of elements does the HTML body contain? What do you notice about the CSS?

2. Using only Javascript and the DOM API, add 9 square windows to the building. The windows should be 50 x 50px, with a margin of 25px.

> Don't forget to add the class `window` so it will be styled by the CSS

3. Now, add a keyboard shortcut that will add a window when the UP (`ArrowUp`) button is pressed, and remove a window when the DOWN (`ArrowDown`) button is pressed.

4. Add another keyboard shortcut that will move the building left/right by 50px when the LEFT/RIGHT buttons are pressed.

5. Add an event handler that will toggle on/off night mode when the user clicks anywhere on the screen.
