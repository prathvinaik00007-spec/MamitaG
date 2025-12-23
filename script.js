const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const music = document.getElementById("bgMusic");

let stage = 0;

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);

function clearUI() {
  buttons.innerHTML = "";
}

function createButton(label, action) {
  const btn = document.createElement("button");
  btn.innerText = label;
  btn.onclick = action;
  buttons.appendChild(btn);
}

function nextStage() {
  stage++;
  showStage();
}

function playMusic() {
  music.volume = 0.6;
  music.play();
}

function showStage() {
  clearUI();

  if (stage === 0) {
    text.innerHTML = "Hehe 😚 it’s your special day Mamita g 💖";
    createButton("Next 👉", nextStage);

  } else if (stage === 1) {
    text.innerHTML = "I made something special for you…";
    createButton("Show me 👀", nextStage);

  } else if (stage === 2) {
    text.innerHTML = "Let’s make the mood perfect 🎶";
    createButton("Play Music 🎵", () => {
      playMusic();
      nextStage();
    });

  } else if (stage === 3) {
    text.innerHTML = `<img src="cake.png" class="cake"><p>Cut the cake Mamita g 🎂</p>`;
    createButton("Cut 🎉", nextStage);

  } else if (stage === 4) {
    text.innerHTML = `
      <div class="letter">
        <p><strong>Nandini,</strong></p>

        <p>
        Loving you was never something I planned or tried to understand.
        It just happened naturally, like something that slowly found its
        place in my life.
        </p>

        <p>
        With you, love feels calm, safe, honest. I don’t need to pretend
        or explain myself around you, and that comfort means more to me
        than anything loud or dramatic.
        </p>

        <p>
        You don’t have to try to be special for me. The way you care,
        the way you stay, the way you exist — that is already enough.
        </p>

        <p>
        On your birthday, I don’t wish you perfection or fairy-tale promises.
        I just wish you peace, warmth, and moments that remind you how deeply
        you are loved.
        </p>

        <p>
        One day I will ask you to marry me. I want to live with you,
        facing happiness and sadness together, every single day.
        </p>

        <p>
        I can’t imagine a world without you. You became my addiction —
        and even if there were a cure, I’d never accept it.
        </p>

        <p><strong>Happiest Birthday, my princess 💖</strong></p>
      </div>
    `;
  }
}

/* START */
showStage();
