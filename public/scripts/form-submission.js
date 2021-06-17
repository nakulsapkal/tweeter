$(document).ready(function() {
  $("#form").submit(function(event) {
    //dataString = $(this).serialize();
    dataString = jQuery.param($(this));

    console.log(dataString);

    if (dataString.length > 145) {
      alert('Tweet content is too long shoudl be 140 chars or less!');
      event.preventDefault();
      return false;
    } else if (dataString.length === 5) {
      alert('Tweet content is empty!');
      event.preventDefault();
      return false;
    }


    let params = {
      type: "POS",
      url: "/tweets",
      data: dataString
    }

    $.ajax(params)
      .then((res) => {
        //handle the response
        console.log(`response: ${res}`)
      })
      .catch((err) => {
        //handle the erros
        console.log(`error from ajax get: ${err}`)
      })
  });
})