/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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


// Fake data taken from initial-tweets.json
const data = [{
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1466663959088
  }
]

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (const tweetObj of tweets) {
    $('#tweets-container').append(createTweetElement(tweetObj)) // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
}

//calling to append the tweets dynamically
renderTweets(data);