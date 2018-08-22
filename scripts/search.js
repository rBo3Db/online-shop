import products from '../scripts/objects/categoriesObject.js'
$(document).ready(function() {
    var timeoutJobId = 0;
    var partOfName;
    // var blockWithResults = document.getElementsByClassName('header__results-of-searching')[0];
    $('.search').on('input', function() {

        if (timeoutJobId && timeoutJobId !==0) {
            clearTimeout(timeoutJobId);
        } 
        partOfName = $(this).val();
        if (partOfName == "" || partOfName == " ") {
            return;
        };    
        timeoutJobId = setTimeout(viewResult, 5000);
    });
    function viewResult() {
        
        var foundCategories = _.filter(products, function(item, i) {
            var productName = products[i].name;
            //var goods = products[i].goods[i].name;
            //console.log(productName.indexOf(partOfName) != -1);
            return (productName.indexOf(partOfName) != -1);
            
        })
        // var arrayOfResults = _.map(foundCategories, function(value) {return value.id} );
        console.log('foundCategories' + foundCategories);
        $('.search__results').empty();
        _.forEach(foundCategories,function(value) {
            var categories = _.template('<li class="widget__link" id = '+ value.id +'><a class=" widget__link--behover"><i class="fas fa-mobile-alt"></i> '+ value.name +' </a></li>')();
            console.log (value);
            $('.search__results').append(categories);
            $('li').click(function() {
                $('main').empty();
                $('.search__results').empty();
                i = Number(this.id - 1);
                for (j = 0; j < products[i].goods.length ; j++ ) {
                    createPageFromTemplate('goods-in-grid','main',i, j);
                };  
                $('body').on('click','.category',function() {
                    $('.main').empty();//chistim vse
                    
                    j = Number(this.id);
                    createPageFromTemplate('item-card','main', i , j);
                    let slider = new Slider([   
                        './pics/item-card/slider/1.jpg',
                        './pics/item-card/slider/2.jpg',
                        './pics/item-card/slider/3.jpg',
                        './pics/item-card/slider/4.jpg',
                        './pics/item-card/slider/5.jpg',
                        './pics/item-card/slider/6.jpg', 
                        './pics/item-card/slider/7.jpg']);
                    slider.init();
                    $('.slider__conteiner-for-small-photos').click(function(event){
                        slider.changeByClick(event);
                    });
                });
            });
        });
    };
        // console.log('viewResult : ' + partOfName);
        
        // partOfName.match = 

});