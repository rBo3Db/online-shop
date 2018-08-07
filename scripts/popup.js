$(document).ready(function() {
    $('body').append('<div class="popup__blackout"></div>');
     
    var boxWidth = 400;
    var boxHeight = 200
    function centerBox() {
     
        /* определяем нужные данные */
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        // var scrollPos = $(window).scrollTop();
         
        /* Вычисляем позицию */
         
        var disWidth = (winWidth - boxWidth) / 2
        var disHeight = (winHeight - boxHeight) /2;
         
        /* Добавляем стили к блокам */
        $('#login').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
         
        return false;       
    }
    $(window).resize(centerBox);
    $(window).scroll(centerBox);
    centerBox();    


    $('.popup-link').click(function() {
        $('.popup__blackout').show();
        $('#login').show();
    });
});
