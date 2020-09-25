$(document).ready(() => {
  $('input[type=checkbox]').click(function () {
    const amenName = $(this).attr('data-name');
    console.log(amenName);
    $('div.amenities h4').text(amenName);
  });
});
