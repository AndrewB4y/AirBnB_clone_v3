const amenName = [];
$(document).ready(() => {
  $('input[type=checkbox]').click(function () {
    if ($(this).prop('checked') === true) {
      amenName.push($(this).attr('data-name'));
      $('div.amenities h4').text(amenName.join());
    } else {
      const index = amenName.indexOf($(this).attr('data-name'));
      amenName.splice(index, 1);
      $('div.amenities h4').text(amenName.join());
    }
  });

  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'Ok') {
      if (!$('DIV#api_status').hasClass()) {
	$('DIV#api_status').addClass('available');
      }
    } else {
      if ($('DIV#api_status').hasClass()) {
	$('DIV#api_status').removeClass('available');
      }
    }
  });
});
