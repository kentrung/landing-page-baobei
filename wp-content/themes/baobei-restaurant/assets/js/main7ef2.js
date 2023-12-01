

jQuery(document).ready(function ($) {
      AOS.init();
      $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    
      $('.space-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.space-slider-nav'
      });
      $('.space-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.space-slider',
        // dots: true,
        // centerMode: true,
        focusOnSelect: true
      });
    
    
      $('.center').slick({
          centerMode: true,
          centerPadding: '200px',
          slidesToShow: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      });


    var getLinkType, getElType, getElNotType;
    
    $( ".btn-player" ).click(function(){
      
      // Feature-detect for dataset support
      if( !this.dataset ) {
        getLinkType = this.getAttribute( "data-team" );
       } else { // For other browsers
         getLinkType = this.dataset.team;
       }
      
      getElType = $( "div[data-players-team*="+getLinkType+"]" );
    
      getElNotType = $( "div[data-players-team!="+getLinkType+"]" );
      
    
       $( ".player" ).filter( getElNotType ).css( "display", "none" );
       $( ".player" ).filter( getElType ).css( "display", "block" );
      
    });
    
    $( "#btn-show-all" ).click(function() {
      $( ".player" ).css( "display", "block" );
    });

   
	
	$(".mobile-toggle").click(function(){
        $(".header-left-container").toggleClass("show-mobile-navigation");
    });
    
    


});

