//In this file character calculation is done
$(document).ready(function() {
  $('#tweet-text').on('input', function(event) {
    let maxLength = 140;

    let counter = $('#tweet-text').val().length; //current char count

    let currentCharCount = maxLength - counter; //remaining char count

    if (currentCharCount < 0) { //adding new css rule for indicating char count exceeding
      $(".counter").addClass("counter-exceded");
    } else { //removing classes when char count is less than max char count accepted
      $(".counter").removeClass("counter-exceded");
      $('error').removeClass("tweet-error");
      $('error').html("");
    }

    $(".counter").html(maxLength - counter);
  })

});