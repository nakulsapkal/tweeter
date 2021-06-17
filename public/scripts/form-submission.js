$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    dataString = $(this).serialize();

    //form Validation for char count
    if (dataString.length > 145) {
      $('error').html(`<i class="fas fa-exclamation-triangle"></i> Too long, Please respect our arbitrary limit of 140 chars. <i class="fas fa-exclamation-triangle"></i>`); //populating the error with icons
      $('error').addClass("tweet-error"); //added class to style error
      return false;
    } else if (dataString.length === 5) {
      $('error').html(`<i class="fas fa-exclamation-triangle"></i> Opps you forgot to write what are you humming about?! <i class="fas fa-exclamation-triangle"></i>`); //populating the error with icons
      $('error').addClass("tweet-error"); //added class to style error
      return false;
    }


    let params = {
      type: "POST",
      url: "/tweets",
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