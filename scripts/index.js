// import template from 'lodash.template'

import '../styles/main.scss';
import '../scripts/slider.js';

import '../tpl/header.tpl.js';
import '../scripts/search.js';
import '../scripts/popup.js';

import '../scripts/main.js';
// import categories from '../tpl/categories.tpl.js';
// var i; 
// var j;
// let howMuchCategories = products.length;
// //создали базовую страницу с категриями
// function createPageFromTemplate(insertThat, insertIn, i, j) {
//     var categories = _.template(document.getElementById(insertThat).innerHTML)(products);
//     var div = document.createElement('div');
//     div.innerHTML = categories;
//     document.getElementsByClassName(insertIn)[0].appendChild(div);
// };
// console.log('за циклом ' + i);
// for ( i = 0; i < howMuchCategories ; i++ ) {
//     console.log('в цикле ' +i);
//     // createPageFromTemplate('categories','main', i)
//     var cat = _.template (`<div class="category category--category-size" id="<%= 0 %>">
//     <img alt="photo of category" class="category__pic-of-category" src="<%= products[0].photo %>">
//     <span><%= products[0].name%> (<%=products[0].goods.length%>) </span>
//     /div>`)();
//     console.log(i);
//     var div = document.createElement('div');
//     div.innerHTML = cat;
//     document.getElementsByClassName('main')[0].appendChild(div);
// };
// // _.forEach(products, function(value, kay) {
// //     createPageFromTemplate('categories','main', kay)
// // })
// // отловили клик по категории
// $('.category').click(function() {
//     i = +this.id;
//     $(".main").remove();
//     //создали страницу с товаром
//     //  {
//         createPageFromTemplate('items-grid','global-conteiner');
//         for (j = 0; j < products[i].goods.length ; j++ ) {
//             createPageFromTemplate('goods-in-grid','main',i, j);
//         };
//     // $('.category#' + idOfCategory)
//     //создали список категорий слева

//     for (d = 0; d< howMuchCategories;d++) {
//         var categories = _.template('<li class="widget__link" id = '+ d +'><a class=" widget__link--behover"><i class="fas fa-mobile-alt"></i> '+ products[d].name +' </a></li>')(products);
//         // var li = document.createElement('li');
//         // li.innerHTML = categories;
//         $('ul').append(categories);
//         // document.getElementsByClassName('widget__list')[0].appendChild(li);
//     }
//     //клик по панели слева
//     $('li').click(function() {
        
//         $('main').empty();
//         i = Number(this.id);
//         for (j = 0; j < products[i].goods.length ; j++ ) {
//             createPageFromTemplate('goods-in-grid','main',i, j);
//         };  
//     });
//     $('.change-view').click(function() {
//         $('main').empty();
//         // i = Number(this.id);
//         for (j = 0; j < products[i].goods.length ; j++ ) {
//             createPageFromTemplate('goods-in-list','main',i, j);
//         };  
//     });
//     $('body').on('click','.category',function() {
//         $('.global-conteiner').remove();//chistim vse
        
//         j = Number(this.id);
//         createPageFromTemplate('item-card','body', i , j);
//         let slider = new Slider([   
//             './pics/item-card/slider/1.jpg',
//             './pics/item-card/slider/2.jpg',
//             './pics/item-card/slider/3.jpg',
//             './pics/item-card/slider/4.jpg',
//             './pics/item-card/slider/5.jpg',
//             './pics/item-card/slider/6.jpg', 
//             './pics/item-card/slider/7.jpg']);
//         slider.init();
//         $('.slider__conteiner-for-small-photos').click(function(event){slider.changeByClick(event)});
//     });
// });
