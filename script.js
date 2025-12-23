const textEl = document.getElementById("text");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");
const balloonsBox = document.getElementById("balloons");

let stage = 0;

const stages = [
  {
    text: "Hehe 😚 it’s your special day Mamita g 💖",
    autoNext: true
  },
  {
    text: "So I wanted to make something special for you ✨",
    autoNext: true
  },
  {
    text: "Do you wanna see what I made? 👀",
    buttons: [
      { label: "Yes 😍", action: () => nextStage() },
      { label: "No 🙈", action: () => alert("Hehe no escape 😼") }
    ]
  },
  {
    text: "Have a look at it, Mamita g 💕",
    buttons: [{
      label: "Lights On 💡",
      action: () => {
        document.body.classList.replace("dim", "lit");
        nextStage();
      }
    }]
  },
  {
    text: "Play some music first 🎵",
    buttons: [{
      label: "Play Music 🎶",
      action: () => {
        music.play();
        nextStage();
      }
    }]
  },
  {
    text: "Let’s decorate this place 🎀",
    buttons: [{
      label: "Decorate ✨",
      action: () => {
        decorateNow();
        nextStage();
      }
    }]
  },
  {
    text: "Fly the balloons 🎈",
    buttons: [{
      label: "Fly 🎈",
      action: () => {
        flyBalloons();
        nextStage();
      }
    }]
  },
  {
    html: `<img src="cake.png" class="cake">
           <p>Let’s cut the cake 🎂</p>`,
    buttons: [{
      label: "Cut 🎂",
      action: () => nextStage()
    }]
  },
  {
    html: `<div class="letter">
      <p><strong>Nandini,</strong></p>
      <p>Loving you was never something I planned — it just happened quietly and naturally.</p>
      <p>With you, love feels calm, safe, and honest.</p>
      <p>I don’t wish perfection, I just wish us — today and always.</p>
      <p><strong>Happy Birthday, my princess 💖</strong></p>
    </div>`
  }
];

function renderStage() {
  buttons.innerHTML = "";
  const s = stages[stage];

  if (s.text) {
    textEl.innerHTML = s.text;
  } else {
    textEl.innerHTML = s.html;
  }

  if (s.buttons) {
    s.buttons.forEach(b => {
      const btn = document.createElement("button");
      btn.innerText = b.label;
      btn.onclick = b.action;
      buttons.appendChild(btn);
    });
  }

  // auto-advance intro stages
  if (s.autoNext) {
    setTimeout(() => {
      nextStage();
    }, 1600);
  }
}

function nextStage() {
  stage++;
  renderStage();
}

/* Cute decoration effect */
function decorateNow() {
  document.getElementById("decorations").classList.remove("hidden");

  for (let i = 0; i < 18; i++) {
    const h = document.createElement("span");
    h.innerHTML = "💗";
    h.style.position = "fixed";
    h.style.left = "50%";
    h.style.top = "50%";
    h.style.fontSize = "22px";

    const x = Math.random() * 260 - 130;
    const y = Math.random() * 260 - 130;

    h.animate(
      [
        { transform: "translate(-50%, -50%)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
      ],
      { duration: 1800, easing: "ease-out" }
    );

    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1800);
  }
}

/* Balloons */
function flyBalloons() {
  for (let i = 0; i < 8; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = ["#ff4f8b", "#60a5fa", "#34d399"][i % 3];
    b.style.setProperty("--drift", (Math.random() * 200 - 100) + "px");
    b.style.animationDuration = (6 + Math.random() * 4) + "s";
    balloonsBox.appendChild(b);
    setTimeout(() => b.remove(), 10000);
  }
}

/* Background hearts */
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = "♡";
  h.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 500);

renderStage();
