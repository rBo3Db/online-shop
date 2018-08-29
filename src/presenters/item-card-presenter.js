import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import ItemCardView from '../views/item-card-view';


function ItemViewPresenter(history, cart) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new ItemCardView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('main')[0];
    this.cart = cart;
}

ItemViewPresenter.prototype = Object.create(Presenter.prototype);
ItemViewPresenter.prototype.constructor = ItemViewPresenter;
ItemViewPresenter.prototype.init = function() {
    this.i = Number(this.getQueryVariable('categoryID'));
    this.j = Number(this.getQueryVariable('goodID'));

    this.renderPlus(this.view.getTemplate(this.model.getData(products), this.i, this.j));

    this.getButtons();
    this.bindEvents();
}

ItemViewPresenter.prototype.getButtons = function() {
    this.addToCartButton = document.getElementsByClassName('cost-block__submit-button--responsive-element')[0];
}

ItemViewPresenter.prototype.bindEvents = function() {
    this.addToCartButton.addEventListener('click', this.handleButtonClick.bind(this), false);
}


ItemViewPresenter.prototype.handleButtonClick = function() {
    this.cart.add(this.model.getCartModel(this.model.getData(products), this.i, this.j));
    console.log('Click to button #');
}

// // ItemViewPresenter.prototype.clean = function() {
// //     console.log(13);
// //     this.element.innerHTML = '';
// // }

export default ItemViewPresenter;
