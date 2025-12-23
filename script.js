const textEl = document.getElementById("text");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");
const card = document.getElementById("card");

let stage = 0;

const stages = [
  { text: "Hehe 😚 it’s your special day Mamita g 💖" },
  { text: "So I wanted to make something special for you ✨" },
  {
    text: "Do you wanna see what I made? 👀",
    buttons: [
      { label: "Yes 🤭", action: () => nextStage() },
      { label: "No 👹", action: () => alert("Hehe no escape my darling 👁️👅👁️") }
    ]
  },
  {
    text: "Have a look at it, Mamita g 💕",
    buttons: [
      {
        label: "Lights On 💡",
        action: () => {
          document.body.classList.remove("dim");
          document.body.classList.add("lit");
          nextStage();
        }
      }
    ]
  },
  {
    text: "Play some music first 🎵",
    buttons: [
      {
        label: "Play Music 🎶",
        action: () => {
          music.play();
          nextStage();
        }
      }
    ]
  },
  {
    text: "Let’s decorate this place 🎀",
    buttons: [
      {
        label: "Decorate ✨",
        action: () => {
          document.getElementById("decorations").classList.remove("hidden");
          nextStage();
        }
      }
    ]
  },
  {
    text: "Fly the balloons 🎈",
    buttons: [
      {
        label: "Fly 🎈",
        action: () => {
          flyBalloons();
          nextStage();
        }
      }
    ]
  },
  {
    html: `<img src="cake.png" class="cake">
           <p>Let’s cut the cake, Mamita g 🎂</p>`,
    buttons: [
      {
        label: "Cut the cake 🎂",
        action: () => {
          confettiBlast();
          nextStage();
        }
      }
    ]
  },
  {
    html: `<div class="letter">
      <p>Well… I have a little message for you 💌</p>
      <p>Mamita g, you are not just special today — you are special to me every single day.</p>
      <p>Your smile, your voice, your presence make my world softer and brighter.</p>
      <p>Happy Birthday my cute Mamita g 🎉💖</p>
    </div>`
  }
];

function highlightWords(text) {
  return text.replace(/Mamita g/g, "<span class='highlight'>Mamita g</span>");
}

function typeText(text, callback) {
  textEl.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    textEl.innerHTML = highlightWords(text.slice(0, i + 1));
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
    b.style.background = ["#ff4f8b", "#60a5fa", "#34d399"][i % 3];
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
