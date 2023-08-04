let dragndrop = (function () {
  let myX = "";
  let myY = "";
  let whichArt = "";

  function resetZ() {
    let allImg = document.querySelectorAll("img");
    for (let i of allImg) {
      i.style.zIndex = 5;
    }
  }

  function moveStart(e) {
    whichArt = e.target;
    myX = e.offsetX;
    myY = e.offsetY;
    resetZ();
    whichArt.style.zIndex = 10;
  }
  function drop(e) {
    e.preventDefault();
    whichArt.style.left = e.pageX - myX + "px";
    whichArt.style.top = e.pageY - myY + "px";
  }
  function moveOver(e) {
    e.preventDefault();
  }
  function touchstart(e) {
    let whichArt = e.target;

    let touch = e.touches[0];
    let moveOffsetX = whichArt.offsetLeft - touch.pageX;
    let moveOffsetY = whichArt.offsetTop - touch.pageY;
    resetZ();
    whichArt.style.zIndex = 10;
    whichArt.addEventListener("touchmove", function () {
      let positionX = touch.pageX + moveOffsetX;
      let positionY = touch.pageY + moveOffsetY;
      whichArt.style.left = positionX + "px";
      whichArt.style.top = positionY + "px";
    });
  }
  document.querySelector("body").addEventListener("touchstart", touchstart);
  document.querySelector("body").addEventListener("dragstart", moveStart);
  document.querySelector("body").addEventListener("dragover", moveOver);
  document.querySelector("body").addEventListener("drop", drop);
})();
