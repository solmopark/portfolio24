
var nav = $("#nav .menu li");
var cont = $("#contents > div ");

nav.click(function(e){
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  //alert(index);
  var section = cont.eq(index);
  var offset =section.offset().top;
  //alert(offset);
  $("html,body").animate({scrollTop:offset},600,"easeInOutBack");
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  if(wScroll >= cont.eq(0).offset().top){
    nav.removeClass("active");
    nav.eq(0).addClass("active");
  }
  if(wScroll >=cont.eq(1).offset().top){
    nav.removeClass("active");
    nav.eq(1).addClass("active");
  }
  if(wScroll >=cont.eq(2).offset().top){
    nav.removeClass("active");
    nav.eq(2).addClass("active");
  }
  if(wScroll >=cont.eq(3).offset().top){
    nav.removeClass("active");
    nav.eq(3).addClass("active");
  }
  if(wScroll >=cont.eq(4).offset().top){
    nav.removeClass("active");
    nav.eq(4).addClass("active");
  }
  if(wScroll >=cont.eq(5).offset().top){
    nav.removeClass("active");
    nav.eq(5).addClass("active");
  }
});


//ham메뉴//
$(".ham").click(function(){
  //메뉴보여주는 방식
  // $(".menu").css("display","block");
  // $(".menu").show();
  // $(".menu").fadeIn();
  // $(".menu").slideDown();
  // $(".menu").toggle();
  // $(".menu").fadeToggle();
  $(".menu").slideToggle();
});

$(".ham").click(function(){
  $(this).toggleClass("active")
});

$(window).resize(function(){
  var wWidth = $(window).width();
  //화면 크기가 830 이상일 때
  if(width > 830 && $(".menu").is(";hidden")){
    $(".menu").remobeAttr("style");
  }
});

// 메뉴 닫기
$(".menu > li").click(function(){
  $(".ham").removeClass("active");
  $(".menu").hide();
});
    // $(".ham.active").click(function() {
    //     $(".ham").removeClass("open");
    //     // $("#main").removeClass("overflow-hidden");
    //     $(".menu> li").removeClass("active");
    //     $(".menu").hide();
    // });

// $(window).resize(function(){
// resposiveSize();	