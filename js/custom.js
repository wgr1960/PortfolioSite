$(window).resize(function() {
    if ($(this).width() > 580) {
          $(window).scroll( function(){
            $('.experience-block').each(function(i){            
                var objectBottom = $(this).offset().top + $(this).outerHeight();
                var windowBottom = $(window).scrollTop() + $(window).height();            
                if( objectBottom < windowBottom ){                
                    $(this).animate({'opacity':'1'}, 150);                    
                }          
            });   
        }); 
    }
    else {
        $('.experience-block').each(function(i){
            $(this).css( "opacity", "1" );
        });            
    }
});

$(document).ready(function() {
    //Function that displays hamburger menu contents
    var hamMenu = document.getElementsByClassName('.hamburger-menu#hamburger');

    hamMenu.onclick = function(hamMenu){
        var menu = document.getElementsByClassName('.dropdown');

        if(menu.style.display == 'block'){
            menu.style.display = 'none';
        }
        else {
            menu.style.display = 'block';                    
        }
    };

    // Function to make experience blocks fade in
    $(window).resize();

    //Create a clone of my menu
    $('.navbar').addClass('original').clone().insertAfter('.navbar').addClass('scrollMenu').css('position','fixed').css('top','0').removeClass('original').hide();
    scrollIntervalID = setInterval(menuStick, 10);

    //Function that sticks menu
    function menuStick() {
      var originalMenu = $('.original');
      var originalMenuPosition = originalMenu.offset();
      var originalMenuTop = originalMenuPosition.top;               
      checkMenuScroll(originalMenu, originalMenuPosition, originalMenuTop);
    };

    //Function that checks the window position after user scrolled and attaches the menu to the top
    function checkMenuScroll(originalMenu, originalMenuPosition, originalMenuTop) {
        //if scrolled past the top of the original menu
        if ($(window).scrollTop() >= (originalMenuTop)) { 
            switchMenusDisplayed(originalMenu);
          } 
          else {
            //show original menu when back to the top
            $('.scrollMenu').hide();
            $('.original').css('visibility','visible');
          }
    };

    // Changes the navbar displayed when user scrolled
    function switchMenusDisplayed(originalMenu) {
        //Grab positions and width of original Menu
        var menuPosition = originalMenu.offset();
        var leftMenuPosition = menuPosition.left;  
        var originalMenuWidth = originalMenu.css('width');
        //Show scrollMenu menu, hide original menu
        $('.scrollMenu').css('left',leftMenuPosition+'px').css('top',0).css('width',originalMenuWidth).css('box-shadow', '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)').show();
        $('.original').css('visibility','hidden');
    };
});
