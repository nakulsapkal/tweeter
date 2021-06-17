$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    dataString = $(this).serialize();
    //dataString = jQuery.param($(this));

    console.log(dataString);

    if (dataString.length > 145) {
      alert('Tweet content is too long shoudl be 140 chars or less!');
      return false;
    } else if (dataString.length === 5) {
      alert('Tweet content is empty!');
      return false;
    }


    let params = {
      type: "POST",
      url: "/tweets",
      data: dataString
    }

    $.ajax(params)
      .then((res) => {
        loadtweets();
        $('#tweet-text').val("");
      })
      .catch((err) => {
        console.log(`error from ajax get: ${err}`)
      })

  });
})