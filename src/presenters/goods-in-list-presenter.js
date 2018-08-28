import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import goodsInListView from '../views/goods-in-list-view';

function goodsInListPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new goodsInListView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('goods-range')[0];
    this.SearchName = 'categoryID';
}

goodsInListPresenter.prototype = Object.create(Presenter.prototype);
goodsInListPresenter.prototype.constructor = goodsInListPresenter;
goodsInListPresenter.prototype.init = function() {
    var i = this.getQueryVariable(this.SearchName);
    var j;
    console.log(this.model);
    // this.model.getData[i].forEach(i => {
    //     this.render(this.view.getTemplate(this.model.getData(products, i)));
    // });
    
    for ( j = 0; j < this.model.getData(products[i].goods).length ; j++ ) {
    
        this.renderPlus(this.view.getTemplate(this.model.getData(products), i, j));

    };
    this.getButtons();
    this.bindEvents();
}

goodsInListPresenter.prototype.getButtons = function() {
    // this.category = document.getElementsByClassName('category')[0];
    // console.log('get buttons')
    var classNameOfCategory = '.good';
    this.category = $(classNameOfCategory);
}

goodsInListPresenter.prototype.bindEvents = function() {
    this.category.on('click', this.handleButtonClick.bind(this));
}

goodsInListPresenter.prototype.handleButtonClick = function(event) {
    console.log( event );
    this.history.push('/good' +location.search + '&goodID=' + event.currentTarget.id);
    console.log('Click to button #' + event.currentTarget.id);
    this.clean();
}

// goodsInListPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default goodsInListPresenter;
