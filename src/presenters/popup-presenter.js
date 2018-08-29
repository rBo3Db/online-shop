// import products from '../categoriesObject';
import Presenter from './presenter';
// import MainModel from '../models/main-model';
import PopupView from '../views/popup-view';


function PopupPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new PopupView();
    // this.model = new MainModel();
    this.element = document.getElementsByClassName('popup')[0];
}

PopupPresenter.prototype = Object.create(Presenter.prototype);
PopupPresenter.prototype.constructor = PopupPresenter;
PopupPresenter.prototype.init = function() {

    this.render(this.view.getTemplate());
    // this.getButtons();
    // this.bindEvents();
}

PopupPresenter.prototype.getButtons = function() {
    this.search = document.getElementsByClassName('search')[0];
    this.cardButton = document.getElementById('cardOpenerButton');
    this.popupOpenerButton = document.getElementById('popupOpenerButton');
}

PopupPresenter.prototype.bindEvents = function() {
    this.search.addEventListener('keyup', this.handleButtonClick.bind(this), false);
    this.cardButton.addEventListener('click', this.handleButtonClick.bind(this), false);
    this.popupOpenerButton.addEventListener('click', this.handleButtonClick.bind(this), false);
}

PopupPresenter.prototype.handleButtonClick = function(event) {
    this.history.push('/goods', { id: event.target.id });
    console.log('Click to button #');
}

// PopupPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default PopupPresenter;
