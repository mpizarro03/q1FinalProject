(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
   $('.slider').slider();
 });


 document.addEventListener("DOMContentLoaded", function () {

 let form = document.getElementById('Form')
 let submit = document.getElementById("submit-button")



   	submit.addEventListener("click", function () {
     	if(checkbox.checked && !secretInput.value) {
       	event.preventDefault();
       	alert("enter secret password");
    	 } else if (checkbox.checked && secretInput.value !== secretPassword) {
      event.preventDefault();
      alert("wrong secret password")
      }
      else if (checkbox.checked && secretInput.value == secretPassword && email.checkValidity() && password.checkValidity())
      {alert("good job!")}
   })

 });
