/**
 * Created by loje on 2017/6/8.
 */
function scroll() {
    if($(window).scrollTop() == 0){
        $(".backtotop").fadeOut();
    }else{
        $(".backtotop").fadeIn();
    }
}

$(document).ready(function () {
    scroll();
    $(window).scroll(function() {
        scroll();
    })

    $(".backtotop").click(function () {
        $('html,body').animate({scrollTop:0}, 500);
    })
})