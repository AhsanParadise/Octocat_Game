var character = document.getElementById("character");
var block = document.getElementById("block");
const start = document.getElementById("start");
const game = document.getElementById("game");
const footer = document.getElementById("foot");
const scoreDiv = document.getElementById("scoreContainer");
let count = 0;
const d = 10000;
start.addEventListener("click", startGame);
function startGame() {
  start.style.display = "none";
  game.style.display = "block";
  footer.style.display = "block";
}

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
    var music = new Audio();
    music.src = "sound/pop.mp3";
    music.play();
    if (count < d) {
      count++;
    }
  }

  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(() => {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockleft < 70 && blockleft > 0 && characterTop >= 340) {
    block.style.animation = "none";
    block.style.display = "none";
    scoreDiv.style.display = "block";
    const scorePer = Math.round(100 * count);
    var music = new Audio();
    music.src = "sound/damage.mp3";
    music.play();
    // choose the image based on the scorePerCent
    let img =
      scorePer >= 5000
        ? "img/5.png"
        : scorePer >= 1000
        ? "img/4.png"
        : scorePer >= 300
        ? "img/3.png"
        : scorePer >= 100
        ? "img/2.png"
        : "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + "Score:" + scorePer + "</p>";
  }
}, 10);
// GOOD LUCK+
