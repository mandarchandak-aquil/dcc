


// Fixed Header
$(window).scroll(function(){
if ($(window).scrollTop() >= 1) {
$('.headerSec').addClass('fixed-header');    
}
else {
$('.headerSec').removeClass('fixed-header');
}
});

//Testimonial Slider//
$('.testimonials').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: false,      
speed: 1000,
autoplaySpeed: 8000,
dots:true,
centerMode: true,    
responsive: [  {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,       
      }
    }]


});
//End Testimonial Slider//

$(".getDirection").click(function(){
  $(".directionList").toggleClass("directionShow");
});


//Loader
  $(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(150).fadeOut('fast'); 
    $('body').delay(50).css({'overflow':'visible'});
  })


  