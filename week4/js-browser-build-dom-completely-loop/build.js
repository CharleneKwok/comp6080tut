const body = document.getElementById("body");

const container = document.createElement("div");
body.appendChild(container);

const paragraphs = ["Hello there,", "I am a llama, hear my sirens roar:"];

for (const paragraph of paragraphs) {
  const p = document.createElement("p");
  p.innerText = paragraph;
  container.appendChild(p);
}

const ul = document.createElement("ul");
container.appendChild(ul);

const list = ["The", "Duck", "Lemonade", "Stand"];

list.forEach((text) => {
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
});
