// Fixed Header
$(window).scroll(function(){
if ($(window).scrollTop() >= 1) {
$('.headerSec').addClass('fixed-header');    
}
else {
$('.headerSec').removeClass('fixed-header');
}
});