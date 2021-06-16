$(document).ready(function() {

  $('.timeago').each(function() {
    $(this).html(timeago.format($(this).html()));
  });

});