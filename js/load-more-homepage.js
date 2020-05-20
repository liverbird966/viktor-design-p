$(document).ready(function(){
  $(".content").slice(0, 0).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 1).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No content").addClass("noContent");
    }
  });
  
});