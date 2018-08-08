$(document).ready(function() {
    $('body').append('<div class="popup__blackout"></div>');
     

    // function centerBox() {
        
    //     /* определяем нужные данные */
    //     var winWidth = $(window).width();
    //     var winHeight = $(window).height();
    //     // var scrollPos = $(window).scrollTop();
    //     if (winWidth < 769) {
    //     $('.popup').css({'width' : 100 +'%', 'min-height' : 100 + '%', 'top' : 0 + 'px', 'left' : 0 + 'px'});
    //     }
    //     if (winWidth > 768) {
    //         var boxWidth = 400;
    //         var boxHeight = 200;
    //     /* Вычисляем позицию */
          
    //     var disWidth = (winWidth - boxWidth) / 2
    //     var disHeight = (winHeight - boxHeight) /2;
         
    //     /* Добавляем стили к блокам */
    //     $('.popup').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
    //     }  
    //     return false;
             
    // }
    // $(window).resize(centerBox);
    // $(window).scroll(centerBox);
    // centerBox();    

    $('a[href="#login"]').click(function() {
        $('.popup__blackout').show();
        $('#login').css('display','flex');
    })
    $('.popup__link--login').click(function() {
        $('#register').hide();
        $('.popup__blackout').show();
        $('#login').css('display','flex');
        
    });
    $('.popup__blackout').click(function() {
        $('.popup__form').hide();
        $('.popup__blackout').hide();
    });
    $('.popup__x').click(function() {
        $('.popup__form').hide();
        $('.popup__blackout').hide();
    });
    $('.popup__link--register').click( function () {
        $('#login').hide();
        $('#register').css('display','flex');
    });
});
