/* Function that will display menu when user scrolls up */

//Validation variable for user scrolling
var userScrolled;
var navHeight = $(‘nav’).outerHeight();

//Function checks if user scrolled, sets validation variable to true
$(window).scroll(function(event){
	userScrolled = true;
});

//Runs function to bring nav bar and resets validation variable
setInterval(function() {
  if (userScrolled) {
    scrollAction();
    userScrolled = false;
  }
}, 250);

//Need to complete
//https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.mt9tdbuqc
//http://jsfiddle.net/mariusc23/s6mLJ/31/
function scrollAct() {
	
};