// import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import HeaderView from '../views/header-view';


function HeaderPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new HeaderView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('header')[0];
}

HeaderPresenter.prototype = Object.create(Presenter.prototype);
HeaderPresenter.prototype.constructor = HeaderPresenter;
HeaderPresenter.prototype.init = function() {

    this.render(this.view.getTemplate());
}

HeaderPresenter.prototype.getButtons = function() {
    this.button1 = document.getElementById('button1');
    this.button2 = document.getElementById('button2');
}

// HeaderPresenter.prototype.bindEvents = function() {
//     this.button1.addEventListener('click', this.handleButtonClick.bind(this), false);
//     this.button2.addEventListener('click', this.handleButtonClick.bind(this), false);
// }

// HeaderPresenter.prototype.handleButtonClick = function(event) {
//     this.history.push('/goods', { id: event.target.dataset.id });
//     console.log(`Click to button #${event.target.dataset.id}`);
// }

// HeaderPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default HeaderPresenter;
