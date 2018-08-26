import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import CategoriesView from '../views/categories-view';
// import template from 'lodash/template';
// import categories from '../../tpl/categories.tpl';

function CategoriesPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new CategoriesView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('main')[0];
}

CategoriesPresenter.prototype = Object.create(Presenter.prototype);
CategoriesPresenter.prototype.constructor = CategoriesPresenter;
CategoriesPresenter.prototype.init = function() {
    var i;
    var j;
    console.log(this.model);
    // this.model.getData[i].forEach(i => {
    //     this.render(this.view.getTemplate(this.model.getData(products, i)));
    // });
    
    for ( i = 0; i < this.model.getData(products).length ; i++ ) {
        console.log(this.model.getData(products));
        this.render(this.view.getTemplate(this.model.getData(products), i));

    };
    this.getButtons();
    this.bindEvents();


}

CategoriesPresenter.prototype.getButtons = function() {
    // this.category = document.getElementsByClassName('main')[0];
    // console.log('get buttons')
    this.category = $('.category');
}

CategoriesPresenter.prototype.bindEvents = function() {
    this.category.on('click', this.handleButtonClick.bind(this), false);
    console.log('bind');
}

CategoriesPresenter.prototype.handleButtonClick = function(event) {
    // this.history.push('/goods', { id: event.target.id });
    console.log('Click to button #' + event.target.dataset.id);
}

// CategoriesPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default CategoriesPresenter;
