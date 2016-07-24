//Passing document into a jquery function.
//On the return value of that function, we call the .ready method.
//Once it's ready, we pass in an anonymous function to the .ready method.
$(document).ready(function(){
  //Checking for sanity by logging into console. Fruitless.
  console.log('sanity check');
  //Passing the form element into a jquery function;
  //On the return value, we call the .on method, specfically looking for the 'submit' event.
  //When this event occurs, an anonymous function is passed into the .on method.
  $('form').on('submit', function(event) {
    //The default response is prevented when the event occurs.
    event.preventDefault();

});
