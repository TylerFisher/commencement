$(document).ready(function() {
    $('.mask-text').on('mouseover',function(){
        $(this).parent().find('.mask').css('opacity','0.4');
    }).on('mouseout',function(){
        $(this).parent().find('.mask').css('opacity','0.6');
    });

    // $('.idea3 .mask-text').on('mouseover',function(){
    //  $(this).parent().find('.mask').show();
    // }).on('mouseout',function(){
    //  $(this).parent().find('.mask').hide();
    // });


});