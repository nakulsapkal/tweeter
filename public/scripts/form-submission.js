$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let dataString = $(this).serialize();

    let textCount = $('#tweet-text').val().length;

    let action = $("#form").attr('action');
    let method = $("#form").attr('method');


    //form Validation for char count
    if (textCount > 140) {
      $('error').html(`<i class="fas fa-exclamation-triangle"></i> Too long, Please respect our arbitrary limit of 140 chars. <i class="fas fa-exclamation-triangle"></i>`); //populating the error with icons
      $('error').addClass("tweet-error"); //added class to style error
      return false;
    } else if (textCount === 0) {
      $('error').html(`<i class="fas fa-exclamation-triangle"></i> Opps you forgot to write what are you humming about?! <i class="fas fa-exclamation-triangle"></i>`); //populating the error with icons
      $('error').addClass("tweet-error"); //added class to style error
      return false;
    } else {
      $(".counter").html(140); //setting counter back to 140
    }

    let params = {
      type: method,
      url: action,
      data: dataString
    }

    $.ajax(params)
      .then((res) => {
        loadtweets(); //loading the tweets data again with the latest tweet in it
        $('#tweet-text').val(""); //clearing the text area in form
      })
      .catch((err) => {
        console.log(`error from ajax get: ${err}`)
      })

  });
})