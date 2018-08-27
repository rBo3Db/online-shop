import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import CategoriesView from '../views/categories-view';

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
    // this.model.getData[i].forEach(i => {
    //     this.render(this.view.getTemplate(this.model.getData(products, i)));
    // });
    
    for ( i = 0; i < this.model.getData(products).length ; i++ ) {

        this.render(this.view.getTemplate(this.model.getData(products), i));

    };
    this.getButtons();
    this.bindEvents();
}

CategoriesPresenter.prototype.getButtons = function() {
    // this.category = document.getElementsByClassName('category')[0];
    // console.log('get buttons')
    this.category = $('.category');
}

CategoriesPresenter.prototype.bindEvents = function() {
    this.category.on('click', this.handleButtonClick.bind(this));
}

CategoriesPresenter.prototype.handleButtonClick = function(event) {
    console.log( event );
    this.history.push('/goods#'+ event.currentTarget.id );
    console.log('Click to button #' + event.currentTarget.id);
}

export default CategoriesPresenter;
