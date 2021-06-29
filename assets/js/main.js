$(document).ready(function(){
  $(".slider").owlCarousel({
  	'items':1,
  	'loop':true,
  	'autoplay':true,
      });


/*testimonial active*/
$(".testimonial").owlCarousel({
  	'items':3,
  	'loop':true,
  	'autoplay':true,
  	'margin': 30,
  	'center': true,
  });

  /* counterup active*/

  $('.counter').counterUp();
});

// init Isotope
var $grid = $('.portfolio-items').isotope();
// filter items on menu click
$('.portfolio-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


// filter items menu active 
$('.portfolio-menu').on( 'click', 'li', function() {
   $(this).addClass('active').siblings().removeClass('active'); 
 });



$(window).load(function(){
    $(this).on('scroll', function(){
        if($(this).scrollTop() > 50){
            $('.header-area').addClass('sticky');
        }
        else{
            $('.header-area').removeClass('sticky');
        }
    })
});


$(window).scroll(function(){
  if($(this).scrollTop() > 200){
    $('scroll').addClass('scroll-show');
  } else{
    $('#scroll').removeClass('scroll-show');
  }

})

  $('#scroll').click(function(){

    $('html, body').animate({
      scrollTop: 0
    }, 500)
  });


  

