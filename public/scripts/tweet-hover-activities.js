$(document).ready(function() {
  $(".tweet-container").hover(function() {
    $(this).addClass("tweet-container-shadow");
  }, function() {
    $(this).removeClass("tweet-container-shadow");
    $(this).off(".tweet-container", function() {}, function() {});
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


});