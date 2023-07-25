let img = document.querySelector(".preview");
let ourImg = document.createElement("img");
let div = document.querySelector(".overlay");
let spinner = document.createElement("img");
spinner.className = "spinner";
spinner.src = "images/spinner.gif";
img.addEventListener("click", (e) => {
  div.style.display = "block";
  ourImg.className = "bgImg";
  div.appendChild(spinner);
  ourImg.src = `${e.target.src.slice(0, -7) + ".jpg"}`;
  div.appendChild(ourImg).addEventListener("load", () => {
    div.removeChild(spinner);
  });
});
