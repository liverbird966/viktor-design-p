$( function() {
    var heartCount = sessionStorage.getItem('heartCount');
    heartCount = heartCount ? parseInt(heartCount) : 0;
    var $numHeart = $('.num-heart');
    $numHeart.text(heartCount);
    $('.add-heart').click( function() {
        $numHeart.text(++heartCount);
        sessionStorage.setItem('heartCount', heartCount);
    });
  
    var likeCount = sessionStorage.getItem('likeCount');
    likeCount = likeCount ? parseInt(likeCount) : 0;
    var $numLike = $('.num-like');
    $numLike.text(likeCount);
    $('.add-like').click( function() {
        $numLike.text(++likeCount);
        sessionStorage.setItem('likeCount', likeCount);
    });
  });