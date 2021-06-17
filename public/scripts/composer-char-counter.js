$(document).ready(function() {
  let counter = 0;
  $('#tweet-text').on('input', function(event) {
    let maxLength = 140;

    if (event.originalEvent.data === null) {
      counter--;
      $(".counter").html((maxLength - counter));

      if (counter < maxLength) { //removing classes when char count is less than max char count accepted
        $(".counter").removeClass("counter-exceded");
        $('error').removeClass("tweet-error");
        $('error').html("");
      }
    } else if (counter > maxLength) {
      $(".counter").addClass("counter-exceded"); //adding new css rule for indicating char count exceeding
      counter++;
      $(".counter").html(maxLength - counter);
    } else {
      counter++;
      $(".counter").html(maxLength - counter);
      if (counter > 0) { //removing class when char count is less than 0
        $('error').removeClass("tweet-error");
        $('error').html("");
      }
    }

  })

});