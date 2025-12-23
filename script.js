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
      { label: "No 👹", action: () => alert("Hehe u can't escape my darling 👁️👅👁️") }
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
      action: () => {
        confettiBlast();
        nextStage();
      }
    }]
  },
  {
    html: `<div class="letter">
      <p><strong>Nandini,</strong></p>
      <p>Loving you was never something I tried to understand or plan — it was just meant to happen. It came naturally, like something that slowly found its place in my life. With you, love feels simple, calm, safe, and honest. I don’t need to pretend or explain myself around you, and that comfort means more to me than anything loud or dramatic. You don’t have to try to be special for me — the way you care, the way you stay, the way you exist is already enough.</p>
      <p>On your birthday, I don’t wish you perfection or fairy-tale promises. I just wish you peace, warmth, and moments that remind you how deeply you are loved — not just today. One day, I want to propose to you and choose you for a lifetime, living together while facing both happiness and sadness, side by side, every day. I can’t imagine a world without you. You’ve become such a part of me that even if there were a cure for this love, I would never accept it.</p>
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

function createHearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.innerHTML = "♡";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 4 + Math.random() * 4 + "s";
    document.getElementById("hearts").appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }, 250);
}

function flyBalloons() {
  for (let i = 0; i < 12; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = ["#ff4f8b","#60a5fa","#34d399"][i % 3];
    b.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(b);
  }
}

function confettiBlast() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.width = "8px";
    c.style.height = "8px";
    c.style.background = ["#ff4f8b","#60a5fa","#34d399","#facc15"][i % 4];
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    c.style.zIndex = 9999;
    c.style.animation = `confettiFall ${2 + Math.random() * 3}s linear`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

createHearts();
renderStage();
