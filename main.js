$('.register').each(function(i){
  $(this).click(function(){
  $('.registerform').addClass('registerform-active');
  $('.login').css('background-color','rgba(247, 199, 203, 0.72)');
  $('.register').css('color','#fff');
  });
});
$('.login').each(function(i){
  $(this).click(function(){
  $('.registerform').removeClass('registerform-active');
   $('.register').css('background-color','rgba(247, 199, 203, 0.72)');
  });
});
var btnVide = document.getElementById("videoBtn");

btnVide.addEventListener("click",function(){
  
  document.getElementById("video-a").pause();
  
})
