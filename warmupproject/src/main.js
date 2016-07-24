
$(document).ready(function() {
    console.log( "jQuery ready" );

$(document).on('submit', function(event) {
  event.preventDefault();
  console.log('preventDefault up and running');
    var formFields = $(this).serialize();
    console.log(formFields);
  });
});
console.log('This shit works')
