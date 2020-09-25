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
});
