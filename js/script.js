const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const restart = document.querySelector(".cta");
let score = 0;
 
const jump = () => {
  mario.classList.add("jump-mario");
  score = score + 1;
  let scoreboard = document.getElementById("score");
  scoreboard.innerHTML = "Score: " + score;

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    restart.style.display = "inline-block";

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);
