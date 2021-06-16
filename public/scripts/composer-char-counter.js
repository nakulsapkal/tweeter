$(document).ready(function() {
  let counter = 0;
  $('#tweet-text').on('input', function(event) {
    let child = $("output").filter(".counter");

    if (event.originalEvent.data === null) {
      console.log(event);
      counter--;
      $(child).html((140 - counter));
    } else if (counter > 140) {
      $(child).addClass("counter-exceded");
      $(child).html(140 - counter);
      counter++;
    } else {
      counter++;
      $(child).html(140 - counter);
    }
  })

});