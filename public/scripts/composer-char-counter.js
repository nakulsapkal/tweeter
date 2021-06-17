$(document).ready(function() {
  let counter = 0;
  $('#tweet-text').on('input', function(event) {
    let maxLength = 140;

    if (event.originalEvent.data === null) {
      counter--;
      $(".counter").html((maxLength - counter));

      if (counter < maxLength) {
        $(".counter").removeClass("counter-exceded");
      }
    } else if (counter > maxLength) {
      $(".counter").addClass("counter-exceded");
      counter++;
      $(".counter").html(maxLength - counter);
    } else {
      counter++;
      $(".counter").html(maxLength - counter);
    }

  })

});