$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      speed: 600,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 5000
    });
    
    $('.slider-menu-projects').slick({
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      dots: true,
      arrows: false
    }); 

    $('.slider-recent-work').slick({
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      dots: true,
      arrows: true
    }); 
});