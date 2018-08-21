/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var products = [{
    id: 1,
    name: 'cut-off wheels',
    photo: './pics/categories-grid/big_91a0aec1f7e49f08f81c7c25bcce9fd1_01.jpg',
    goods: [{
        name: 'cut-off wheel',
        photo: './pics/item-card/slider/1.jpg',
        price: 555,
        description: 'Good for cut',
        quantity: 100,
        category: 'cut-off wheels' }]
}, {
    id: 2,
    name: 'grinding wheels',
    photo: './pics/categories-grid/big_91a0aec1f7e49f08f81c7c25bcce9fd1_1.jpg',
    goods: [{
        name: 'grinding wheel',
        photo: './pics/item-card/slider/2.jpg',
        price: 555,
        description: 'Good for grind',
        quantity: 100,
        category: 'grinding wheel' }, {
        name: 'grinding wheel',
        photo: './pics/item-card/slider/2.jpg',
        price: 555,
        description: 'Good for grind',
        quantity: 100,
        category: 'grinding wheel' }, {
        name: 'grinding wheel',
        photo: './pics/item-card/slider/2.jpg',
        price: 555,
        description: 'Good for grind',
        quantity: 100,
        category: 'grinding wheel' }]
}, {
    id: 3,
    name: 'chisels',
    photo: './pics/categories-grid/big_91a0aec1f7e49f08f81c7c25bcce9fd1_12.jpg',
    goods: [{
        name: 'chisel',
        photo: './pics/item-card/slider/3.jpg',
        price: 555,
        description: 'Good for chisels',
        quantity: 100,
        category: 'chisels' }]
}, {
    id: 4,
    name: 'speakers',
    photo: './pics/categories-grid/big_8018582e5b743eec172a260d99602c0f_0.jpg',
    goods: [{
        name: 'speaker',
        photo: './pics/item-card/slider/4.jpg',
        price: 555,
        description: 'Good for speakering',
        quantity: 100,
        category: 'speakers' }]
}];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// $(document).ready(function(slides) {
class Slider {
    constructor(slides) {
        this.slides = slides;
        this.activSlide = Math.floor(this.slides.length / 2);
        this.oldActivSlide = this.activSlide;
    }

    init() {
        this.CreateRow();
        this.setSelector();
    }

    CreateRow() {
        let right = document.getElementsByClassName('slider__arrow-right');
        for (let i = 0; i < this.slides.length; i++) {
            let slide = document.createElement('img');
            document.getElementById('containerOfSlider').insertBefore(slide, right[0]);
            slide.setAttribute('class', 'slider__small-image');
            slide.setAttribute('src', this.slides[i]);
            slide.setAttribute('id', i);
        }
    }

    setSelector() {
        if (this.oldActivSlide != this.activSlide) {
            document.querySelector('.slider__small-image--active').classList.remove('slider__small-image--active');
        }
        document.getElementById(this.activSlide).setAttribute('class', 'slider__small-image slider__small-image--active');
        this.setMain(this.slides[this.activSlide]);
    }
    setMain(image) {
        document.getElementById("dropBigImage").style.backgroundImage = "url(" + image + ")";
    }
    //функцию ниже нужно навесить на блок, где кнопки и иконки 
    //
    //типо так - slider.changeByClick(event) slider

    changeByClick(ev) {
        if (ev.target.id == 'containerOfSlider') {//click on containerOfSlider
        } else {
            this.oldActivSlide = this.activSlide;
            if (ev.target.innerText == '<') {
                this.left();
            } else if (ev.target.innerText == '>') {
                this.right();
            } else {
                this.activSlide = ev.target.id; //click on picture
            }
            this.setSelector();
        }
    }

    left() {
        if (this.oldActivSlide === 0) {
            this.activSlide = this.slides.length;
        }
        --this.activSlide;
    }

    right() {
        if (this.oldActivSlide === this.slides.length - 1) {
            this.activSlide = -1;
        }
        ++this.activSlide;
    }
}
// setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
// 	slider.changeByClick(MouseEvent.target.className("slider__arrow-right"));
// },50);
// });

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var header = _.template(`
    <a href="categories-grid.html">
        <div class="header__logo logo"> </div>
    </a>
    <div class="header__header-elements">
        <input class="header__search search header__search--responsive-element" type="search" name="search" placeholder="Search" pattern=".{1,}">
        <a class="header__icons icons" name="card" href="cart.html">
            <i class="fas fa-shopping-cart"></i>
        </a>
        <a class="popup__link popup__link--login header__icons icons header__icons--responsive-element" name="profile">
            <i class="fas fa-user-circle"></i>
        </a>
        <div class="search__results"></div>
    </div>
    `)();

document.getElementsByClassName('header')[0].innerHTML = header;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

$(document).ready(function () {
    var timeoutJobId = 0;
    var partOfName;
    // var blockWithResults = document.getElementsByClassName('header__results-of-searching')[0];
    $('.search').on('input', function () {

        if (timeoutJobId && timeoutJobId !== 0) {
            clearTimeout(timeoutJobId);
        }
        partOfName = $(this).val();
        if (partOfName == "" || partOfName == " ") {
            return;
        };
        timeoutJobId = setTimeout(viewResult, 5000);
    });
    function viewResult() {

        var foundCategories = _.filter(products, function (item, i) {
            var productName = products[i].name;
            //var goods = products[i].goods[i].name;
            //console.log(productName.indexOf(partOfName) != -1);
            return productName.indexOf(partOfName) != -1;
        });
        // var arrayOfResults = _.map(foundCategories, function(value) {return value.id} );
        console.log('foundCategories' + foundCategories);
        $('.search__results').empty();
        _.forEach(foundCategories, function (value) {
            var categories = _.template('<li class="widget__link" id = ' + value.id + '><a class=" widget__link--behover"><i class="fas fa-mobile-alt"></i> ' + value.name + ' </a></li>')();
            console.log(value);
            $('.search__results').append(categories);
            $('li').click(function () {
                $('main').empty();
                $('.search__results').empty();
                i = Number(this.id - 1);
                for (j = 0; j < products[i].goods.length; j++) {
                    createPageFromTemplate('goods-in-grid', 'main', i, j);
                };
                $('body').on('click', '.category', function () {
                    $('.main').empty(); //chistim vse

                    j = Number(this.id);
                    createPageFromTemplate('item-card', 'main', i, j);
                    let slider = new Slider(['./pics/item-card/slider/1.jpg', './pics/item-card/slider/2.jpg', './pics/item-card/slider/3.jpg', './pics/item-card/slider/4.jpg', './pics/item-card/slider/5.jpg', './pics/item-card/slider/6.jpg', './pics/item-card/slider/7.jpg']);
                    slider.init();
                    $('.slider__conteiner-for-small-photos').click(function (event) {
                        slider.changeByClick(event);
                    });
                });
            });
        });
    };
    // console.log('viewResult : ' + partOfName);

    // partOfName.match = 
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function loadPopup() {
    var popup = _.template(`
    <div id="login" class="popup__form popup__form--show-popup">
        <a class="popup__x popup__x--responsive-element">x</a>
        Please Sign In
        <form>
            <input id="userName" type="email" class="popup__form-element popup__form-element--responsive-element" name="email" placeholder="email" autofocus required pattern=".{3,}"> <br>
            <input id="userPw" type="password" class="popup__form-element popup__form-element--responsive-element" name="password" placeholder="password" required pattern=".{1,}"> <br>
            <p>
                <input type="checkbox" class="popup__form-element popup__form-element--responsive-element" name="Remember me"><br>
                Remember me
            </p>
            <button id="login_btn" type="submit" class="popup__form-element popup__form-element--responsive-element">Sign In</button>
        </form>
        <a class="popup__link popup__link--register popup__link--responsive-element">Register</a>
    </div>
    <div id="register" class="popup__form popup__form--show-popup">
        <a class="popup__x popup__x--responsive-element" href="">x</a>
        <form>
            <input id='name' type="email" class="popup__form-element popup__form-element--responsive-element" name="email" placeholder="email" autofocus required pattern=".{3,}"> <br>
            <input id='pw' type="password" class="popup__form-element popup__form-element--responsive-element" name="password" placeholder="password" required pattern=".{1,}"> <br>
            <button id="rgstr_btn" type="submit" class="popup__form-element popup__form-element--responsive-element">Registration</button>
        </form>
        <a class="popup__link popup__link--login popup__link--responsive-element">Sign In</a>
    </div>
`)();

    document.getElementsByClassName('popup')[0].innerHTML = popup;
}
loadPopup();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./scripts/objects/categoriesObject.js
var categoriesObject = __webpack_require__(0);

// EXTERNAL MODULE: ./scripts/slider.js
var slider = __webpack_require__(1);

// EXTERNAL MODULE: ./tpl/header.tpl.js
var header_tpl = __webpack_require__(2);

// EXTERNAL MODULE: ./scripts/search.js
var search = __webpack_require__(3);

// EXTERNAL MODULE: ./tpl/popup.tpl.js
var popup_tpl = __webpack_require__(4);

// CONCATENATED MODULE: ./scripts/popup.js

$(document).ready(function () {
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

    $('a[href="#login"]').click(function () {
        $('.popup__blackout').show();
        $('#login').css('display', 'flex');
    });
    $('.popup__link--login').click(function () {
        $('#register').hide();
        $('.popup__blackout').show();
        $('#login').css('display', 'flex');
    });
    $('.popup__blackout').click(function () {
        $('.popup__form').hide();
        $('.popup__blackout').hide();
    });
    $('.popup__x').click(function () {
        $('.popup__form').hide();
        $('.popup__blackout').hide();
    });
    $('.popup__link--register').click(function () {
        $('#login').hide();
        $('#register').css('display', 'flex');
    });

    // Name and Password from the register-form

    // var name = $('#name');
    // var pw = $('#pw');

    // // storing input from register-form
    // function store() {
    //     localStorage.setItem('name', name.value);
    //     localStorage.setItem('pw', pw.value);
    // }

    // // check if stored data from register-form is equal to entered data in the   login-form
    // function check() {

    //     // stored data from the register-form
    //     var storedName = localStorage.getItem('name');
    //     var storedPw = localStorage.getItem('pw');

    //     // entered data from the login-form
    //     var userName = $('#userName');
    //     var userPw = $('#userPw');

    //     // check if stored data from register-form is equal to data from login form
    //     if(userName.value !== storedName || userPw.value !== storedPw) {
    //         alert('ERROR');
    //     }else {
    //         alert('You are loged in.');
    //     }
    // }
    // $('#login_btn').click( check() );
    // $('#rgstr_btn').click( store() );
});
// CONCATENATED MODULE: ./scripts/index.js






// import '../scripts/main.js';
// import categories from '../tpl/categories.tpl.js';
var i;
var j;
let howMuchCategories = products.length;
//создали базовую страницу с категриями
function createPageFromTemplate(insertThat, insertIn, i, j) {
    var categories = _.template(document.getElementById(insertThat).innerHTML)(products);
    var div = document.createElement('div');
    div.innerHTML = categories;
    document.getElementsByClassName(insertIn)[0].appendChild(div);
};
for (i = 0; i < howMuchCategories; i++) {
    // createPageFromTemplate('categories','main', i)
    var cat = _.template(`<div class="category category--category-size" id="<%- i %>">
    <img alt="photo of category" class="category__pic-of-category" src="<%= products[i].photo %>">
    <span><%= products[i].name%> (<%=products[i].goods.length%>) </span>
</div>`)();
    var div = document.createElement('div');
    div.innerHTML = cat;
    document.getElementsByClassName('main')[0].appendChild(div);
};
// _.forEach(products, function(value, kay) {
//     createPageFromTemplate('categories','main', kay)
// })
// отловили клик по категории
$('.category').click(function () {
    i = +this.id;
    $(".main").remove();
    //создали страницу с товаром
    //  {
    createPageFromTemplate('items-grid', 'global-conteiner');
    for (j = 0; j < products[i].goods.length; j++) {
        createPageFromTemplate('goods-in-grid', 'main', i, j);
    };
    // $('.category#' + idOfCategory)
    //создали список категорий слева

    for (d = 0; d < howMuchCategories; d++) {
        var categories = _.template('<li class="widget__link" id = ' + d + '><a class=" widget__link--behover"><i class="fas fa-mobile-alt"></i> ' + products[d].name + ' </a></li>')(products);
        // var li = document.createElement('li');
        // li.innerHTML = categories;
        $('ul').append(categories);
        // document.getElementsByClassName('widget__list')[0].appendChild(li);
    }
    //клик по панели слева
    $('li').click(function () {

        $('main').empty();
        i = Number(this.id);
        for (j = 0; j < products[i].goods.length; j++) {
            createPageFromTemplate('goods-in-grid', 'main', i, j);
        };
    });
    $('.change-view').click(function () {
        $('main').empty();
        // i = Number(this.id);
        for (j = 0; j < products[i].goods.length; j++) {
            createPageFromTemplate('goods-in-list', 'main', i, j);
        };
    });
    $('body').on('click', '.category', function () {
        $('.global-conteiner').remove(); //chistim vse

        j = Number(this.id);
        createPageFromTemplate('item-card', 'body', i, j);
        let slider = new Slider(['./pics/item-card/slider/1.jpg', './pics/item-card/slider/2.jpg', './pics/item-card/slider/3.jpg', './pics/item-card/slider/4.jpg', './pics/item-card/slider/5.jpg', './pics/item-card/slider/6.jpg', './pics/item-card/slider/7.jpg']);
        slider.init();
        $('.slider__conteiner-for-small-photos').click(function (event) {
            slider.changeByClick(event);
        });
    });
});

/***/ })
/******/ ]);