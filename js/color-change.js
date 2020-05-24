$(document).ready(function() {
    $("button").on("click", "#white", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#ffffff");
    });
  
    $("button").on("click", "#darkturquoise", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#00CED1");
    });
  
    $("button").on("click", "#brown", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#A52A2A");
    });
  
    $("button").on("click", "#limegreen", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#32CD32");
    });
  
    $("button").on("click", "#royalblue", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#4169E1");
    });
  
    $("button").on("click", "#goldenrod", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#DAA520");
    });
  
    $("button").on("click", "#tomato", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#FF6347");
    });
  
    $("button").on("click", "#cornsilk", function() {
      $('.box-inside, .select-css, .select-css-1').css("background-color", "#FFF8DC");
    });

    $(".moving-colors button").on('click', function() {
      $(this).addClass('active')
  	    .siblings('.moving-colors button').removeClass('active');
    });
    
});