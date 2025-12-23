const textEl = document.getElementById("text");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");

let stage = 0;

const stages = [
  {
    text: "Hehe 😚 it’s your special day Mamita g 💖",
    next: true
  },
  {
    text: "So I wanted to make something special for you ✨",
    next: true
  },
  {
    text: "Do you wanna see what I made? 👀",
    buttons: [
      { label: "Yes 👁️👅👁️", action: () => next() },
      { label: "No 😿", action: () => alert("Hehe no option allowed 😼") }
    ]
  },
  {
    text: "Have a look at it, Mamita g 💕",
    buttons: [{ label: "Lights On 💡", action: () => next() }]
  },
  {
    text: "Play some music first 🎵",
    buttons: [{ label: "Play Music 🎶", action: () => { music.play(); next(); } }]
  },
  {
    text: "Let's decorate this place 🎀",
    buttons: [{ label: "Decorate ✨", action: () => next() }]
  },
  {
    text: "Fly the balloons 🎈",
    buttons: [{ label: "Fly 🎈", action: () => { flyBalloons(); next(); } }]
  },
  {
    html: `<img src="cake.png" class="cake"><p>Let’s cut the cake, my cute Mamita g 🎂</p>`,
    buttons: [{ label: "Cut the cake 🎂", action: () => next() }]
  },
  {
    html: `<div class="letter">
      <p>Well… I have a message for you 💌</p>
      <p>You are my comfort, my happiness, my safe place.</p>
      <p>Happy Birthday Mamita g 🎉💖</p>
    </div>`
  }
];

function typeText(text, cb) {
  textEl.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    textEl.innerHTML += text[i++];
    if (i === text.length) {
      clearInterval(interval);
      cb && cb();
    }
  }, 40);
}

function next() {
  buttons.innerHTML = "";
  const s = stages[++stage];
  if (!s) return;

  if (s.text) {
    typeText(s.text, () => renderButtons(s.buttons));
  } else if (s.html) {
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

function flyBalloons() {
  for (let i = 0; i < 12; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = ["#ff4f8b","#60a5fa","#34d399"][i%3];
    b.style.animationDuration = 5 + Math.random()*5 + "s";
    document.body.appendChild(b);
  }
}

function createHearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.innerHTML = "♡";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 4 + Math.random()*4 + "s";
    document.getElementById("hearts").appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }, 300);
}

createHearts();
typeText(stages[0].text, () => {});
