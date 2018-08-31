import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import goodsInListView from '../views/goods-in-list-view';

function goodsInListPresenter(history, cart) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new goodsInListView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('goods-range')[0];
    this.i = this.getQueryVariable('categoryID');
    this.cart = cart;
}

goodsInListPresenter.prototype = Object.create(Presenter.prototype);
goodsInListPresenter.prototype.constructor = goodsInListPresenter;
goodsInListPresenter.prototype.init = function() {
    var j;
    console.log(this.model);
    // this.model.getData[i].forEach(i => {
    //     this.render(this.view.getTemplate(this.model.getData(products, i)));
    // });
    
    for ( j = 0; j < this.model.getData(products[this.i].goods).length ; j++ ) {
    
        this.renderPlus(this.view.getTemplate(this.model.getData(products), this.i, j));

    };
    this.getButtons();
    this.bindEvents();
}

goodsInListPresenter.prototype.getButtons = function() {
    // this.category = document.getElementsByClassName('category')[0];
    // console.log('get buttons')
    var classNameOfCategory = '.good';
    this.category = $(classNameOfCategory);
    this.addToCardButton = $("button")
}

goodsInListPresenter.prototype.bindEvents = function() {
    // this.addToCardButton.on('click', this.addToCartButtonClick.bind(this));
    this.category.on('click', this.handleGoodButtonClick.bind(this));
}

goodsInListPresenter.prototype.handleGoodButtonClick = function(event) {
    console.log(event);
    if (event.target.tagName  === 'BUTTON') {
        // event.stopPropagation();
        this.cart.add(this.model.getCartModel(this.model.getData(products), this.i, event.target.id));
    } else {
    this.history.push('/good' + location.search + '&goodID=' + event.currentTarget.id);
    }
}
// goodsInListPresenter.prototype.addToCartButtonClick = function(event) {

// }

export default goodsInListPresenter;
