const content = document.getElementById("content");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");
const balloonsBox = document.getElementById("balloons");

let step = 0;

const steps = [
  { html: "Hehe ( ˘ ³˘ )💗<br>It’s your special day Mamita g 💖", auto: true },
  { html: "So I made something special…<br>just for you ✨", auto: true },
  {
    html: "Do you wanna see what I made? 👀",
    buttons: [
      { text: "Yes 😍", next: true },
      { text: "No 🙈", action: () => alert("No escape 😼") }
    ]
  },
  {
    html: "Have a look Mamita g 💕",
    buttons: [
      {
        text: "Lights On 💡",
        action: () => {
          document.body.classList.add("lit");
          next();
        }
      }
    ]
  },
  {
    html: "Let’s play some music 🎵",
    buttons: [
      {
        text: "Play Music 🎶",
        action: () => {
          music.play();
          next();
        }
      }
    ]
  },
  {
    html: "Let’s decorate 🎀",
    buttons: [
      {
        text: "Decorate ✨",
        action: () => {
          decorate();
          next();
        }
      }
    ]
  },
  {
    html: "Fly the balloons 🎈",
    buttons: [
      {
        text: "Fly 🎈",
        action: () => {
          flyBalloons();
          next();
        }
      }
    ]
  },
  {
    html: "Let’s cut the cake 🎂<br><img src='cake.png' class='cake'>",
    buttons: [{ text: "Cut 🎂", next: true }]
  },
  {
    html: `
      <div class="letter">
        <p><strong>Nandini,</strong></p>

        <p>
        Loving you was never something I tried to understand or plan.
        It was just meant to happen. It happened naturally, like something
        that slowly found its place in my life.
        </p>

        <p>
        With you, love feels simple, calm, safe, and honest.
        I don’t need to pretend or explain myself around you,
        and that comfort means more to me than anything loud or dramatic.
        </p>

        <p>
        You don’t have to try to be special for me.
        The way you care, the way you stay, the way you exist —
        that is already enough.
        </p>

        <p>
        On your birthday, I don’t wish you perfection or fairy-tale promises.
        I just wish you peace, warmth, and moments that remind you
        how deeply you are loved — not just today.
        </p>

        <p>
        One day, I’ll propose to you for marriage.
        I want to live with you, facing happiness and sadness together,
        every day, in quiet ways that truly matter.
        </p>

        <p>
        I can’t imagine a world without you.
        You became my addiction, and even if there were a cure,
        I would gladly refuse it.
        </p>

        <p><strong>Happiest Birthday, my princess 💖</strong></p>
      </div>
    `
  }
];

function render() {
  buttons.innerHTML = "";
  content.innerHTML = steps[step].html;

  if (steps[step].buttons) {
    steps[step].buttons.forEach(b => {
      const btn = document.createElement("button");
      btn.textContent = b.text;
      btn.onclick = () => {
        if (b.next) next();
        if (b.action) b.action();
      };
      buttons.appendChild(btn);
    });
  }

  if (steps[step].auto) {
    setTimeout(next, 1500);
  }
}

function next() {
  step++;
  render();
}

/* decoration – soft hearts */
function decorate() {
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("span");
    h.textContent = "💗";
    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2000);
  }
}

/* balloons */
function flyBalloons() {
  for (let i = 0; i < 8; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = ["#ff5b9f", "#60a5fa", "#34d399"][i % 3];
    b.style.animationDuration = 6 + Math.random() * 4 + "s";
    b.style.setProperty("--drift", Math.random() * 200 - 100 + "px");
    balloonsBox.appendChild(b);
    setTimeout(() => b.remove(), 10000);
  }
}

/* background hearts */
setInterval(() => {
  const h = document.createElement("span");
  h.textContent = "♡";
  h.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 500);

render();
