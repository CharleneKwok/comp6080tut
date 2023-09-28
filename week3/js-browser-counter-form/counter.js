const counter = document.getElementById("counter");

counter.innerText = 0;
console.log(counter);

const increment = document.getElementById("increment");

increment.addEventListener("click", () => {
  const counterText = parseInt(counter.innerText);

  if (counterText >= 10) {
    alert("Cannot count pass 10");
  } else {
    counter.innerText = counterText + 1;
  }
});

const decrement = document.getElementById("decrement");
decrement.addEventListener("click", () => {
  const counterText = parseInt(counter.innerText);

  if (counterText <= 0) {
    alert("Cannot count below 0");
  } else {
    counter.innerText = counterText - 1;
  }
});
