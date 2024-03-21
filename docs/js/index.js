console.log();

//Cursor Custom
function cursor__Event(){
  const $cursor = $('.cursor');

  $(window).mousemove(function(e) {
    $cursor.css({
      top:e.clientY - 15,
      left:e.clientX - 15
    });
  });
}
cursor__Event();

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

// 메뉴 백그라운드
$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ( scrollTop == 0 ) {
    $('#nav .headflex').removeClass('hover');
  }
  else {
    $('#nav .headflex').addClass('hover');
  }
});


// 스크롤
ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: ".heading" });

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

// fade in #back-top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();

    }
  });


  // scroll body to 0px on click
  $('a#back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return true;
  });
});

// 3d swiper
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  // mousewheel: {
  //   thresholdDelta: 70
  // },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
});

// Accordion
(function($) {
  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

  $('.accordion .title').click(function(j) {
      var dropDown = $(this).closest('li').find('p');

      $(this).closest('.accordion').find('p').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
      } else {
          $(this).closest('.accordion').find('.title.active').removeClass('active');
          $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
  });
})(jQuery);

// textMove
function Textmove__(){

  const pTag3 = document.querySelector('.first-parallel')
  const pTag4 = document.querySelector('.second-parallel')

  const textArr3 = "Thank you for looking at my portfolio(´▽`ʃ♡ƪ)".split(' ')
  const textArr4 = "I look forward to hearing from you(●'◡'●) ".split(' ')

  let count3 = 0
  let count4 = 0

  initTexts(pTag3, textArr3)
  initTexts(pTag4, textArr4)

  function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
  }

  function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
      element.style.transform = `translate3d(0, 0, 0)`
      count = 0
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`

    return count
  }

  function animate() {
    count3++
    count4++

    count3 = marqueeText(count3, pTag3, -1)
    count4 = marqueeText(count4, pTag4, 1)

    window.requestAnimationFrame(animate)
  }

  function scrollHandler() {
    count3 += 15
    count4 += 15
  }

  window.addEventListener('scroll', scrollHandler)
  animate()
}  
Textmove__();

 // email copy
function E_mail__Copy() {
  // naver mail url 
  document.getElementById("nmailImg").addEventListener("click", function () {
      var email = "haesol_97@naver.com";
      copyToClipboard(email);
      showPopupMessage("이메일 주소가 복사되었습니다🤗");
  });

  // google mail url 
  document.getElementById("gmailImg").addEventListener("click", function () {
      var email = "haegol.p@gmail.com";
      copyToClipboard(email);
      showPopupMessage("이메일 주소가 복사되었습니다🤗");
  });

  function copyToClipboard(text) {
      var input = document.createElement("input");
      input.style.position = "fixed";
      input.style.opacity = 0;
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
  }

  function showPopupMessage(message) {
      var popup = document.getElementById("popupMsg");
      var popupText = document.getElementById("popupText");
      popupText.innerHTML = message;
      popup.classList.add("show");
      setTimeout(function () {
          popup.classList.remove("show");
      }, 2000);
  }
}
E_mail__Copy();
