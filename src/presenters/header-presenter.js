// import products from '../categoriesObject';
import Presenter from './presenter';
// import MainModel from '../models/main-model';
import HeaderView from '../views/header-view';


function HeaderPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new HeaderView();
    // this.model = new MainModel();
    this.element = document.getElementsByClassName('header')[0];
}

HeaderPresenter.prototype = Object.create(Presenter.prototype);
HeaderPresenter.prototype.constructor = HeaderPresenter;
HeaderPresenter.prototype.init = function() {

    this.render(this.view.getTemplate());
    this.getButtons();
    this.bindEvents();
}

HeaderPresenter.prototype.getButtons = function() {
    this.search = document.getElementsByClassName('search')[0];
    this.cartButton = document.getElementById('cardOpenerButton');
    this.popupOpenerButton = document.getElementById('popupOpenerButton');
}

HeaderPresenter.prototype.bindEvents = function() {
    this.search.addEventListener('keyup', this.handleSearchInputKeyup.bind(this), false);
    this.cartButton.addEventListener('click', this.handleCartButtonClick.bind(this), false);
    this.popupOpenerButton.addEventListener('click', this.handlePopupOpenerButtonClick.bind(this), false);
}

HeaderPresenter.prototype.handleCartButtonClick = function() {
    this.history.push('/cart');
    console.log('Click to button #');
}
HeaderPresenter.prototype.handlePopupOpenerButtonClick = function() {
    this.history.push(location.pathname + location.search + '#login');
}
HeaderPresenter.prototype.handleSearchInputKeyup = function() {
    console.log(this.search.value)
}


// HeaderPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default HeaderPresenter;
