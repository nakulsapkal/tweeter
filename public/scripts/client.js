/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(obj) {

  const img = obj.user.avatars;
  const tweetName = obj.user.name;
  const tweetHandle = obj.user.handle;
  const tweetText = escape(obj.content.text); //escapes the special chars
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

//Function appends newly created tweet to the HTML
const renderTweets = function(tweets) {
  for (const tweetObj of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweetObj))
  }
}


const loadtweets = function() {
  //call of Jquery data for provided url.
  $.get("http://localhost:8080/tweets", function(data) {
    renderTweets(data);

    hoverElement(); //Hover effect to elements

    timeagoCalculator(); //assigns timeago script to every tweet 

  });

}


//Cross-Site Scripting function
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


//calling to load the tweets from URL
loadtweets();