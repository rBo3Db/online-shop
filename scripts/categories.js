// вставка в navigation bar
for (var i = 0; i< products.length;i++) {
    var categories = _.template('<li><a class="widget__link widget__link--behover"><i class="fas fa-mobile-alt"></i> <%= products[i].name %> </a></li>')(products);
    var li = document.createElement('li');
    li.innerHTML = categories;
    document.getElementsByClassName('widget__list')[0].appendChild(li);
}
