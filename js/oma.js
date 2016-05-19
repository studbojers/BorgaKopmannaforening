
/*
function writeYears() {
    var yr = new Date().getFullYear();
    document.write('1945 - ' + yr.toString());
}
*/

$(document).ready(function () {
    $('.navigate-back-to-top').on('click', function () {
        $('html,body').animate({scrollTop:0}, 'slow');
    });
});
