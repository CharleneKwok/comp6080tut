const building = document.getElementById("building");

const addWindow = () => {
  const window = document.createElement("div");
  window.style.width = "50px";
  window.style.height = "50px";
  window.style.margin = "25px";
  window.style.display = "inline-block";
  window.classList.add("window");
  building.appendChild(window);
};

for (let i = 0; i < 9; i++) {
  addWindow();
}

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  const offsetLeft = building.offsetLeft;
  console.log(offsetLeft);
  if (e.key === "ArrowUp") {
    addWindow();
  } else if (e.key === "ArrowDown") {
    if (building.hasChildNodes()) {
      building.removeChild(building.lastChild);
    }
  } else if (e.key === "ArrowLeft") {
    building.style.left = `${offsetLeft - 50}px`;
  } else if (e.key === "ArrowRight") {
    building.style.left = `${offsetLeft + 50}px`;
  }
});

const body = document.body;
document.addEventListener("click", () => {
  if (body.hasAttribute("night")) {
    body.removeAttribute("night");
  } else {
    body.setAttribute("id", "building");
  }
});
