!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){var i,n;let r=products.length;function o(e,t,i,n){var r=_.template(document.getElementById(e).innerHTML)(products),o=document.createElement("div");o.innerHTML=r,document.getElementsByClassName(t)[0].appendChild(o)}for(i=0;i<r;i++)o("categories","main");$(".category").click(function(){for(i=+this.id,$(".main").remove(),o("items-grid","global-conteiner"),n=0;n<products[i].goods.length;n++)o("goods-in-grid","main");for(d=0;d<r;d++){var e=_.template('<li class="widget__link" id = '+d+'><a class=" widget__link--behover"><i class="fas fa-mobile-alt"></i> '+products[d].name+" </a></li>")(products);$("ul").append(e)}$("li").click(function(){for($("main").empty(),i=Number(this.id),n=0;n<products[i].goods.length;n++)o("goods-in-grid","main")}),$(".change-view").click(function(){for($("main").empty(),n=0;n<products[i].goods.length;n++)o("goods-in-list","main")}),$("body").on("click",".category",function(){$(".global-conteiner").remove(),n=Number(this.id),o("item-card","body");let e=new Slider(["./pics/item-card/slider/1.jpg","./pics/item-card/slider/2.jpg","./pics/item-card/slider/3.jpg","./pics/item-card/slider/4.jpg","./pics/item-card/slider/5.jpg","./pics/item-card/slider/6.jpg","./pics/item-card/slider/7.jpg"]);e.init(),$(".slider__conteiner-for-small-photos").click(function(t){e.changeByClick(t)})})})}]);