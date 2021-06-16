$(document).ready(function() {
  $("#form").submit(function(event) {
    //alert("Handler for .submit() called.");
    event.preventDefault();


    dataString = $(this).serialize();

    let params = {
      type: "POST",
      url: "/tweets",
      data: dataString
    }
    console.log(params);
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