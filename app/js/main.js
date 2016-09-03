'use strict';

var header = document.getElementsByTagName("header")[0];

$(window).scroll(function(e) {
  Scroll();
  ShowHeader();
  e.preventDefault();
});

//mostra header
function ShowHeader() {
  var scrollY = 90;
  
  if (window.pageYOffset >= scrollY) {      
      header.className = "slideDown";    
      console.log(header);     
  } else {
    header.className = "none";
  }  
}

//testar window.scroll
function Scroll() {
    window.scrollBy(0, 0);
    console.log("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset);
}    

$(function() {
  
    //scroll anchor
    $('a.page-scroll').click(function(event) {
      var $anchor = $(this);
      
      $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 135
        }, 1500, 'easeInOutExpo');       
        event.preventDefault();
    });    

    //menu mobile
    $('#nav-icon2').on('click', function(event){
        event.preventDefault();       
        $(this).toggleClass('open');
        $('nav').toggle();        
      });

});