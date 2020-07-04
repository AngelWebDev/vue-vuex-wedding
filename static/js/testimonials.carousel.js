jQuery(document).ready(function($) {
  "use strict";
  var owl = $('#customers-testimonials');
  owl.owlCarousel( {
      loop: true,
      center: true,
      items: 3,
      margin: 30,
      autoplay: true,
      dots:true,
      nav:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });

  owl.on('mousewheel', '.owl-stage', function (e) {
        
    if(e.originalEvent.wheelDelta > 0) {
       owl.trigger('next.owl');
    }
    else{
        owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
  
  function init(){
    $('.item').each(function(i){
      $(this).append('<img src="http://lorempixel.com/400/200/?random='+i+'" />')});
   
  } 
  
  // init();
});