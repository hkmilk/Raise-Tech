jQuery( function( $ ) {
    $( ".js-hamburger" ).on("click",function(){
    $(this).toggleClass("is-open");
    $("#nav").slideToggle(300);
    $("body").toggleClass("is-open");
} );
} );
$(function(){
    $('.menu-item').hover(
        function(e){
            $(this).closest('li').addClass('is-open');
        },
        function(e){
            $(this).closest('li').removeClass('is-open');
        }
    );
});
$(window).on('resize', function() {
    if ($(window).width() > 1200) {
        $("#nav").removeAttr("style"); 
        $("#nav").removeClass("is-open");
    } else {
        $(".js-hamburger").removeClass("is-open");
        $("body").removeClass("is-open");
        $("#nav").stop(true,true).hide();
    }
});
