### HTML

- Hypertext Markup Language
- define the `structure and layout of content` on a webpage by using tags and elements
- frequently used `tags`
  - div, p, h1-h6, a, button, img, ul, ol, li, span
- Some tags have `attributes`

```html
<img alt="dog" src="./dog.png"></img>
```

- other tags https://www.w3schools.com/tags/tag_comment.asp

### CSS

- css is used to `style and format the content`
- can apply colors, margin, font size/family and position etc to `HTML elements`
- `Order of priority` when determining which styles should be applied to an element

  - `inline styles > id selectors > class selectors > tag selectors`

```css
/* inline styles */
<div style="background-color: red;" id="sample" class="sample" />

/* id selector */
/* id is unique */
#sample {
  background-color: black;
}

/* class selector */
.sample {
  background-color: green;
}

/* tag selector */
div {
  background-color: white;
}
```

- `Pseudo-classes`
  - define a special state of an element
  - single colon `:`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/:active

```css
button:hover {
  background-color: black;
}
```

- `Pseudo-Element`
  - style parts of the element
  - double colons `::`

```css
p::first-letter {
  font-size: 40px;
}
```

- `Flexbox`
  - layout system
  - check out https://css-tricks.com/snippets/css/a-guide-to-flexbox/
