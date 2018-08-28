import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import ItemCardView from '../views/item-card-view';


function ItemViewPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new ItemCardView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('main')[0];
}

ItemViewPresenter.prototype = Object.create(Presenter.prototype);
ItemViewPresenter.prototype.constructor = ItemViewPresenter;
ItemViewPresenter.prototype.init = function() {
    var i = Number(this.getQueryVariable('categoryID'));
    var j = Number(this.getQueryVariable('goodID'));

    this.renderPlus(this.view.getTemplate(this.model.getData(products), i, j));

//     this.getButtons();
//     this.bindEvents();
}

// ItemViewPresenter.prototype.getButtons = function() {
//     this.search = document.getElementsByClassName('search')[0];
//     this.cardButton = document.getElementById('cardOpenerButton');
//     this.popupOpenerButton = document.getElementById('popupOpenerButton');
// }

// ItemViewPresenter.prototype.bindEvents = function() {
//     this.search.addEventListener('keyup', this.handleButtonClick.bind(this), false);
//     this.cardButton.addEventListener('click', this.handleButtonClick.bind(this), false);
//     this.popupOpenerButton.addEventListener('click', this.handleButtonClick.bind(this), false);
// }

// ItemViewPresenter.prototype.handleButtonClick = function(event) {
//     // this.history.push('/goods', { id: event.target.id });
//     console.log('Click to button #');
// }

// // ItemViewPresenter.prototype.clean = function() {
// //     console.log(13);
// //     this.element.innerHTML = '';
// // }

export default ItemViewPresenter;
