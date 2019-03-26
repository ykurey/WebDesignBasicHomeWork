$(".btn1").click(function(){
  $(".page1").show();
  $(".page2").hide();
  $(".page3").hide();
  $(".page4").hide();
});

$(".btn2").click(function(){
  $(".page2").show();
  $(".page1").hide();
  $(".page3").hide();
  $(".page4").hide();
});

$(".btn3").click(function(){
  $(".page3").show();
  $(".page1").hide();
  $(".page2").hide();
  $(".page4").hide();
});

$(".btn4").click(function(){
  $(".page4").show();
  $(".page1").hide();
  $(".page2").hide();
  $(".page3").hide();
});
