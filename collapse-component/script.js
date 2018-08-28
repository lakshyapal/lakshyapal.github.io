$(document).ready(()=>{

    let content = $('.content');
    // Default one div is open
    $.each(content,function(i,val){
        (i === 0)? $(this).show():$(this).hide();
    });

    $('.heading').click(function(){

        $('.content').hide();

        $(this).next().slideToggle('slow');

    });

});