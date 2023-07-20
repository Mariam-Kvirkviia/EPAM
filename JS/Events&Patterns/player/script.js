let jukebox = document.querySelector("ul");
jukebox.addEventListener("click", function (e) {
  let player = document.querySelector("#player");
  let songName = e.target.getAttribute("data-src");
  let clickedElement = e.target;
  if (player) {
    if (player.getAttribute("src") === songName) {
      if (!player.paused) {
        player.pause();
        clickedElement.id = "paused";
      } else if (player.paused) {
        player.play();
        clickedElement.id = "playing";
      }
    } else {
      player.src = songName;
      player.play();
      if (document.getElementById("playing"))
        document.getElementById("playing").id = "";
      if (document.getElementById("paused"))
        document.getElementById("paused").id = "";
      clickedElement.id = "playing";
    }
  } else {
    let audio = document.createElement("audio");
    audio.src = clickedElement.getAttribute("data-src");
    audio.id = "player";
    document.body.appendChild(audio);
    audio.play();
    clickedElement.id = "playing";
    audio.addEventListener("ended", function () {
      clickedElement.id = "";
      audio.parentNode.removeChild(audio);
    });
  }
});

//let jukebox = document.querySelector("ul");
// jukebox.addEventListener("click", function (e) {
//   let player = document.querySelector("#player");
//   let playing = document.querySelector("#playing");
//   let paused = document.querySelector("#paused");
//   let clickedElement = e.target;

//   console.log(playing);

//   if (player && playing) {
//     console.log(1);
//     if (e.target !== playing) {
//       playing.id = "";

//       e.target = "playing";
//     } else if (!player.paused) {
//       clickedElement.id = "paused";

//       player.pause();
//     }
//   } else if (paused) {
//     clickedElement.id = "playing";

//     player.play();
//   } else {
//     console.log(2);
//     let audio = document.createElement("audio");
//     audio.id = "player";
//     audio.src = clickedElement.getAttribute("data-src");

//     document.body.appendChild(audio);

//     audio.play();
//     clickedElement.id = "playing";
//   }
//   player?.addEventListener("ended", function (e) {
//     console.log("ended");
//     clickedElement.id = "";
//     audio.parentNode.removeChild(audio);
//   });
// });
