## Assignment

- check out the style guide https://cgi.cse.unsw.edu.au/~cs6080/23T3/style/html
  - e.g avoid using inline style
- Try to use semantic html tags(Don't use all divs in html)
  - like section, article, h1, p
- Difference within a few pixels is acceptable

## CSS for mobile

- CSS for mobile is a way to style and layout the web content to fit into different screens and devices
- `Viewport Meta Tag`
  - Ensures that a webpage is scaled and sized correctly for the device
  - `width=device-width` -> sets the width of the page to follow the screen-width of the device
  - `initial-scale=1.0` -> the initial zoom level when the page is first loaded by the browser.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `Media Queries`
  - it allows CSS to apply styles based on the device's characteristics

```css
.sample {
  background-color: black;
  color: black;
}

/* screen width <= 700px -> white */
/* screen width > 700px -> black */
@media (max-width: 700px) {
  .sample {
    background-color: white;
    font-size: 1rem;
    /* color: black */
  }
}

/* screen width >= 700px  -> white*/
/* screen width < 700px  -> black*/
@media (min-width: 700px) {
  .sample {
    background-color: white;
  }
}
```
