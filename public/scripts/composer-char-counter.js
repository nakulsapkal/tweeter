$(document).ready(function() {
  let counter = 0;
  $('#tweet-text').on('input', function(event) {
    let child = $("output").filter(".counter");

    //    console.log(counter, event.key);
    console.log(counter, event.originalEvent.data);


    //console.log(); //130  counter 10  1bs   131 counter-9 asdf

    if (event.originalEvent.data === null) {
      console.log(event); //130  counter 10  1bs   131 counter-9 asdf
      $(child).html((140 - counter) + 1);
      counter--;
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