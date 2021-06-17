/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(obj) {

    const img = obj.user.avatars;
    const tweetName = obj.user.name;
    const tweetHandle = obj.user.handle;
    const tweetText = obj.content.text;
    const tweetDateTime = obj.created_at;

    const article = `<article class="tweet">
		<div class="tweet-header">
				<img src="${img}">
				<div class="tweet-names">
						<name>${tweetName}</name>
						<handle>${tweetHandle}</handle>
				</div>
		</div>
		<article class="tweet-text">${tweetText}</article>
		<div class="tweet-details">
				<output class="timeago">${tweetDateTime}</output>
				<div class="tweet-icons">
						<i class="fas fa-flag"></i>
						<i class="fas fa-retweet"></i>
						<i class="fas fa-heart"></i>
				</div>
		</div>
	</article>`;

    return article;
  }


  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (const tweetObj of tweets) {
      $('#tweets-container').append(createTweetElement(tweetObj)) // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  }


  const loadtweets = function() {
    //get call of Jquery data for provided url.
    $.get("http://localhost:8080/tweets", function(data) {
      renderTweets(data);

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


      $('.timeago').each(function() {
        $(this).html(timeago.format($(this).html()));
      });

    });

  }

  //calling to load the tweets from URL
  loadtweets();

});