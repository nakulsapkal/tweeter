$(document).ready(function() {


  let child = $(this).children();
  console.log(child);



  let counter = 0;
  $('#tweet-text').on('keydown', function() {
    let child = $(this).filter(".counter");

    counter++;
    if (counter > 140) {
      $(child).addClass("counter-exceded");
      $(child).html(140 - counter);

    } else {
      $(child).html(140 - counter);
    }
  })

});