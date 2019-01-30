

var imgList = document.querySelectorAll(".img-item");
var lightBox = document.querySelector(".lightbox-container");
var close = document.getElementById("close");
var lightBoxImg = document.querySelector(".lightbox-img");
var imgs = [];
var imgIndex = 0;


 for (var i = 0; i < imgList.length; i++ ){
    imgs.push(imgList[i]);
    imgList[i].addEventListener("click", function(e){
        lightBox.style.display = "block";
        var imgSrc = e.target.src;
        imgIndex = imgs.indexOf(e.target);
        lightBoxImg.style.backgroundImage = "url("+imgSrc+")";
       
    });
}

close.addEventListener("click", function(){
    lightBox.style.display = "none";
});

document.addEventListener("keydown", function(e){
    if (e.keyCode == 27){
        lightBox.style.display = "none";
    }
});

// Design page
var buttons  = $(".options-box div button");


buttons.eq(0).css("backgroundColor"," #e6ffff")
buttons.eq(0).css("backgroundColor"," #e6ffff")
buttons.eq(1).css("backgroundColor","#ffccdd")
buttons.eq(2).css("backgroundColor"," #ff9999")
buttons .eq(3).css("backgroundColor","#ffe6cc")
buttons.eq(4).css("backgroundColor","#e6e6e6")
buttons.eq(5).css("backgroundColor"," #17202A")
buttons.eq(6).css("backgroundColor","#2E86C1")
buttons.eq(7).css("backgroundColor"," #21618C")
buttons.eq(8).css("backgroundColor","#E74C3C")
buttons.eq(9).css("backgroundColor","#512E5F")
buttons.eq(10).css("backgroundColor","#F1C40F")
buttons.eq(11).css("backgroundColor","#F0B27A ")
buttons.eq(12).css("backgroundColor","#85929E")
buttons.eq(13).css("backgroundColor"," #145A32")
buttons.eq(14).css("backgroundColor","#D7BDE2")
buttons.eq(15).css("backgroundColor","#7FB3D5")


buttons.click(function(){


    var bgColor = $(this).css("backgroundColor");
    $("#home").css("color", bgColor)
})

 buttons.click(function(){


    var bgColor = $(this).css("backgroundColor");
    $("#home").css("backgroundColor", bgColor)
})
 

$("button").click(function(){
    $(this).addClass("active")
        $(this).siblings().removeClass("active")


});



$(".p-item").click(function(){
    console.log("sa")
    var imgSrc = $(this).attr("src");
    
    $("#home").css("backgroundImage","url("+imgSrc+")")
    
});



$(".your-size-1").click(function(){
    if($("#home").css("width",) < '600px' )
        {
    $("#home").css("width","600px")
            
        }
            


});
$(".your-size-2").click(function(){
    if($("#home").css("height",) < '600px' )
        {
    $("#home").css("height","600px")
            
        }

});

$(".your-size-3").click(function(){
    if($("#home").css("width",) < '500px' )
        {
    $("#home").css("width","500px")
            
        }

});


$(".options-box").click(function(){
    $(".options-colors").slideToggle(1000),
    function(){
        $(".options-colors").fadeTo(1000 , 0.5)
    }
    
});
$(".option").click(function(){
    $(".options-background").slideToggle(1000),
    function(){
        $(".options-background").fadeTo(1000 , 0.5)
    }
    
});
$(".size_1").click(function(){
    $(".options-size").slideToggle(1000),
    function(){
        $(".options-size").fadeTo(1000 , 0.5)
    }
    
});
 
 $(".text-1").click(function(){
    $(".options-text").slideToggle(1000,0.5),
    function(){
        $(".options-text").fadeIn(1000 ,0.5)
    }
    
});



 $(".stickers").click(function(){
    $(".drag").slideToggle(1000),
    function(){
        $(".drag").fadeTo(1000 , 0.5)
    }
    
});

$(function() {

  var $list, $newItemForm;
  $list = $('p');
  $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<p>' + text + '</p>');
    $('input:text').val('');
  });

  $list.on('click', 'p', function() {
    var $this = $(this);
    $this.remove();
  });

});

//Drag & drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
//Log in page

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
  
});















