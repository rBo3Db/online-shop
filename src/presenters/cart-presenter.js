// import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import CartView from '../views/cart-view';

function cartPresenter(history, cart) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new CartView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('main')[0];
    // this.SearchName = 'categoryID';
    this.cart = cart;
}

cartPresenter.prototype = Object.create(Presenter.prototype);
cartPresenter.prototype.constructor = cartPresenter;
cartPresenter.prototype.init = function() {


    // this.model.getData[i].forEach(i => {
    //     this.render(this.view.getTemplate(this.model.getData(products, i)));
    // });
    console.log(this.cart.products);
    for ( let i = 0; i < this.model.getData(this.cart.products).length ; i++ ) {
    
        this.renderPlus(this.view.getTemplate(this.model.getData(this.cart.products), i));

    };
    // this.getButtons();
    // this.bindEvents();
}

// cartPresenter.prototype.getButtons = function() {
//     // this.category = document.getElementsByClassName('category')[0];
//     // console.log('get buttons')
//     var classNameOfCategory = '.good';
//     this.category = $(classNameOfCategory);
// }

// cartPresenter.prototype.bindEvents = function() {
//     this.category.on('click', this.handleButtonClick.bind(this));
// }

// cartPresenter.prototype.handleButtonClick = function(event) {
//     console.log( event );
//     this.history.push('/good' +location.search + '&goodID=' + event.currentTarget.id);
//     console.log('Click to button #' + event.currentTarget.id);
//     this.clean();
// }

// cartPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default cartPresenter;
