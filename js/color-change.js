$(document).ready(function() {
    $("button").on("click", "#white", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#ffffff");
    });
  
    $("button").on("click", "#darkturquoise", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#00CED1");
    });
  
    $("button").on("click", "#brown", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#A52A2A");
    });
  
    $("button").on("click", "#limegreen", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#32CD32");
    });
  
    $("button").on("click", "#royalblue", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#4169E1");
    });
  
    $("button").on("click", "#goldenrod", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#DAA520");
    });
  
    $("button").on("click", "#tomato", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#FF6347");
    });
  
    $("button").on("click", "#cornsilk", function() {
      $('.follow-me-box, .follow-me-box i').css("color", "#FFF8DC");
    });

    $(".moving-colors button").on('click', function() {
      $(this).addClass('active')
  	    .siblings('.moving-colors button').removeClass('active');
    });
    
});