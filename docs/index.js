console.clear();

// 메뉴
function ToggleNav__init() {
  var nav = document.getElementById("nav");
  var navlinks = nav.getElementsByTagName("a");

  function toggleNav() {
    nav.classList.contains("active")
      ? nav.classList.remove("active")
      : nav.classList.add("active");
  }

  document.getElementById("nav-icon").addEventListener("click", function (e) {
    e.preventDefault();
    toggleNav();
  });

  for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
      toggleNav();
    });
  }
}
ToggleNav__init();

// 스크롤
ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: '.heading' });

// 버블효과
function BubbleEffect1__init(canvasWidth, canvasHeight) {
  const canvas = document.getElementsByClassName("bubble-effect-1__canvas")[0];
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const ctx = canvas.getContext("2d");

  /*Modify options here*/

  //possible characters that will appear
  const characterList = ["o", ".", "。", "˙"];

  //stocks possible character attributes
  const layers = {
    n: 5, //number of layers
    letters: [100, 40, 30, 20, 10], //letters per layer (starting from the deepest layer)
    coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
    size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
    color: ["#fff", "#eee", "#ccc", "#bbb", "#aaa"], //color of the letters (starting from the deepest layer)
    font: "Courier" //font family (of every layer)
  };

  /*End of options*/

  const characters = [];
  let mouseX = document.body.clientWidth / 2;
  let mouseY = document.body.clientHeight / 2;

  const rnd = {
    btwn: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function (list) {
      return list[rnd.btwn(0, list.length)];
    }
  };

  /*LETTER DRAWING*/

  function drawLetter(char) {
    ctx.font = char.size + "px " + char.font;
    ctx.fillStyle = char.color;

    const x = char.posX + (mouseX - canvas.width / 2) * char.coef;
    const y = char.posY + (mouseY - canvas.height / 2) * char.coef;

    ctx.fillText(char.char, x, y);
  }

  /*ANIMATION*/

  document.onmousemove = function (ev) {
    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;

    if (window.requestAnimationFrame) {
      requestAnimationFrame(update);
    } else {
      update();
    }
  };

  function update() {
    clear();
    render();
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function render() {
    for (var i = 0; i < characters.length; i++) {
      drawLetter(characters[i]);
    }
  }

  /*INITIALIZE*/
  function createLetters() {
    for (let i = 0; i < layers.n; i++) {
      for (let j = 0; j < layers.letters[i]; j++) {
        const character = rnd.choose(characterList);
        const x = rnd.btwn(0, canvas.width);
        const y = rnd.btwn(0, canvas.height);

        characters.push({
          char: character,
          font: layers.font,
          size: layers.size[i],
          color: layers.color[i],
          layer: i,
          coef: layers.coef[i],
          posX: x,
          posY: y
        });
      }
    }
  }

  createLetters();
  update();
}
BubbleEffect1__init(2560, 1080);


// Aos효과
AOS.init({
  easing: "linear",
  once: false,
  mirror: false
});