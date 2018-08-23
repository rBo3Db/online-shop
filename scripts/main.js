import products from '../scripts/objects/categoriesObject.js';
import categories from '../tpl/categories.tpl.js';
import tplWithLeftBar from '../tpl/items-grid.tpl.js';
import goodsInGridTpl from '../tpl/goods-in-grid.tpl';
import goodsInListTpl from '../tpl/goods-in-list.tpl';
import Slider from '../scripts/slider.js';
import itemTpl from '../tpl/item-card.tpl.js';
import template from 'lodash/template';
var i; 
var j;
let howMuchCategories = products.length;
//создали базовую страницу с категриями
function createPageFromTemplate(insertThat, insertIn, i, j) {
    var templateForInsert = template(insertThat)({products, i, j});
    // var div = document.createElement('div');
    // div.innerHTML = templateForInsert;
    // document.getElementsByClassName(insertIn)[0].appendChild(div);
    $(insertIn).append(templateForInsert);
};

for ( i = 0; i < howMuchCategories ; i++ ) {
    createPageFromTemplate(categories,'main', i)
};
$('.category').click(function() {
    i = Number(this.id);
    $('.main').remove();
    //создали с тимлейта шаблон для следующей страницы
    var templateForInsert = template(tplWithLeftBar)();
    $(templateForInsert).insertAfter('.header');
    //создали страницу с товаром
    //  {
    for (j = 0; j < products[i].goods.length ; j++ ) {
        createPageFromTemplate(goodsInGridTpl,'main',i, j);
    };
    //создали список категорий слева

    for (var d = 0; d< howMuchCategories;d++) {
        var sideCategories = template('<li class="widget__link" id = '+ d +'><a class=" widget__link--behover"><i class="fas fa-mobile-alt"></i> '+ products[d].name +' </a></li>')({products, d});
        $('.widget__list').append(sideCategories);
    }

    //клик по панели слева
    $('.widget__link').click(function() {
        $('main').empty();
        i = Number(this.id);
        for (j = 0; j < products[i].goods.length ; j++ ) {
            createPageFromTemplate(goodsInGridTpl,'main',i, j);
        }; 
    });
    
    $('.change-view').click(function() {
        $('main').empty();
        // i = Number(this.id);
        for (j = 0; j < products[i].goods.length ; j++ ) {
            createPageFromTemplate(goodsInListTpl,'main',i, j);
        };  
    });
    $('.goods-range').on('click','.category',function() {
        $('.content').remove();
        $('.change-view').remove();//chistim vse
        j = Number(this.id);
        templateForInsert = template(itemTpl)({products, i , j});
        $(templateForInsert).insertAfter('.header');
        // createPageFromTemplate(itemTpl,'body', i , j);
        let slider = new Slider([   
            './pics/item-card/slider/1.jpg',
            './pics/item-card/slider/2.jpg',
            './pics/item-card/slider/3.jpg',
            './pics/item-card/slider/4.jpg',
            './pics/item-card/slider/5.jpg',
            './pics/item-card/slider/6.jpg', 
            './pics/item-card/slider/7.jpg']);
        slider.init();
        $('.slider__conteiner-for-small-photos').click(function(event){slider.changeByClick(event)});
    });
});
