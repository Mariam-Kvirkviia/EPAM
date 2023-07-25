document.querySelector(".grid").addEventListener("contextmenu", (e) => {
  let target = e.target.parentNode; //li
  e.preventDefault();
  let parent = target.parentNode; // === this will always point at ul(.grid) cause we add listener to that element

  if (target.tagName === "LI") {
    let div = document.createElement("div");
    div.className = "preview";
    target.appendChild(div);
    let img = document.createElement("img");
    div.style.left = e.offsetX + 15 + "px";
    div.style.top = e.offsetY + 15 + "px";
    img.src = `${e.target.src.slice(0, -7) + ".jpg"}`;
    div.appendChild(img);
    e.target.addEventListener("mousemove", function handler(g) {
      div.style.left = g.offsetX + 15 + "px";
      div.style.top = g.offsetY + 15 + "px";
    });
    e.target.addEventListener("mouseout", function handler() {
      target.removeChild(div);
      e.target.removeEventListener("mouseout", handler); // clear our queue
    });
  }
});

// if (parent.children.length !== 1) {
//   parent.removeChild(target); // in ul we remove li
// } else {
//   document.querySelector("p").innerHTML = `you chosed ${e.target.alt}`;
// }
