const hoverElement=function(){
  $(".tweet").hover(function() {
    $(this).addClass("tweet-shadow");
  }, function() {
    $(this).removeClass("tweet-shadow");
    $(this).off(".tweet", function() {}, function() {});
  })

  $(".fa-flag").hover(function() {
    $(this).addClass("tweet-icons-shadow");
  }, function() {
    $(this).removeClass("tweet-icons-shadow");
    $(this).off("fa-flag");
  });

  $(".fa-retweet").hover(function() {
    $(this).addClass("tweet-icons-shadow");
  }, function() {
    $(this).removeClass("tweet-icons-shadow");
    $(this).off("fa-retweet");
  });

  $(".fa-heart").hover(function() {
    $(this).addClass("tweet-icons-shadow");
  }, function() {
    $(this).removeClass("tweet-icons-shadow");
    $(this).off("fa-heart");
  });
};