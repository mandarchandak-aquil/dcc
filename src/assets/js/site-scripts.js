// Fixed Header
$(window).scroll(function(){
if ($(window).scrollTop() >= 200) {
$('.headerSec').addClass('fixed-header');    
}
else {
$('.headerSec').removeClass('fixed-header');
}
});