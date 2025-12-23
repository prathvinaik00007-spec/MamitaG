const textEl = document.getElementById("text");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");
const card = document.getElementById("card");

let stage = 0;

const stages = [
  { text: "Hehe (⁠〃ﾟ⁠3ﾟ⁠〃⁠) it’s your special day Mamita g 💖" },
  { text: "So I wanted to make something special for you ✨" },
  {
    text: "Do you wanna see what I made? ",
    buttons: [
      { label: "Yes 🤭", action: () => nextStage() },
      { label: "No 👹", action: () => alert("Hehe no escape my darling 👁️👅👁️") }
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
    text: "Let’s decorate this place ",
    buttons: [{
      label: "Decorate ✨",
      action: () => {
        document.getElementById("decorations").classList.remove("hidden");
        decorateEffects();
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
           <p>Let’s cut the cake, Mamita g 🎂</p>`,
    buttons: [{
      label: "Cut the cake 🎂",
      action: () => nextStage()
    }]
  },
  {
    html: `<div class="letter">
      <p><strong>Nandini,</strong></p>
      <p>Loving you was never something I tried to understand or plan — it was just meant to happen.</p>
      <p>With you, love feels calm, safe, and honest.</p>
      <p><strong>Happiest Birthday, my princess 💖</strong></p>
    </div>`
  }
];

function typeText(text, callback) {
  textEl.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    textEl.innerHTML = text.slice(0, i + 1);
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, 30);
}

function renderStage() {
  buttons.innerHTML = "";
  const s = stages[stage];
  if (s.text) {
    typeText(s.text, () => renderButtons(s.buttons));
  } else {
    textEl.innerHTML = s.html;
    renderButtons(s.buttons);
  }
}

function renderButtons(btns = []) {
  btns.forEach(b => {
    const btn = document.createElement("button");
    btn.innerText = b.label;
    btn.onclick = b.action;
    buttons.appendChild(btn);
  });
}

function nextStage() {
  stage++;
  renderStage();
}

card.addEventListener("click", () => {
  if (stage < 2) nextStage();
});

function decorateEffects() {
  const sparkles = document.querySelector(".sparkles");
  for (let i = 0; i < 20; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = 80 + Math.random() * 100 + "px";
    sparkles.appendChild(s);
    setTimeout(() => s.remove(), 4000);
  }
}

function createHearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.innerHTML = "♡";
    h.style.left = Math.random() * 100 + "vw";
    document.getElementById("hearts").appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 300);
}

function flyBalloons() {
  for (let i = 0; i < 10; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = ["#ff4f8b","#60a5fa","#34d399"][i % 3];
    document.body.appendChild(b);
  }
}

createHearts();
renderStage();
