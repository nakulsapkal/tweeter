const timeagoCalculator = function() {
  $('.timeago').each(function() {
    $(this).html(timeago.format($(this).html()));
  });
};