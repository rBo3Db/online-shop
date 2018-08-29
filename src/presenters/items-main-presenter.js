import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import ItemsMainView from '../views/items-main-view';


function ItemsMainPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new ItemsMainView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('header')[0];
}

ItemsMainPresenter.prototype = Object.create(Presenter.prototype);
ItemsMainPresenter.prototype.constructor = ItemsMainPresenter;
ItemsMainPresenter.prototype.render = function(compiledTemplate) {
    // $('main').remove;
    $(compiledTemplate).insertAfter(this.element)
}

ItemsMainPresenter.prototype.init = function() {
    var i;
    var j;
    console.log(this.model);
    
    // this.model.getData[i].forEach(i => {
    //     this.render(this.view.getTemplate(this.model.getData(products, i)));
    // });
    this.render(this.view.getTemplate(this.model.getData(products), i, j));
    this.getButtons();
    this.bindEvents();
}

ItemsMainPresenter.prototype.getButtons = function() {
    // this.addToCartButton = document.getElementsByClassName('cost-block__submit-button--responsive-element')[0];
}

ItemsMainPresenter.prototype.bindEvents = function() {
    // this.cardButton.addEventListener('click', this.handleButtonClick.bind(this), false);
}

ItemsMainPresenter.prototype.handleButtonClick = function() {

}

// ItemsMainPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default ItemsMainPresenter;
