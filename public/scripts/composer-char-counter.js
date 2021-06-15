$(document).ready(function() {
  let counter = 0;
  $('#tweet-text').on('keypress', function() {
    let child = $("output").filter(".counter");

    counter++;
    if (counter > 140) {
      $(child).addClass("counter-exceded");
      $(child).html(140 - counter);

    } else {
      $(child).html(140 - counter);
    }
  })

});