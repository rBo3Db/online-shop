import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import LeftSideBarView from '../views/left-side-bar-view';

function LeftSideBarPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new LeftSideBarView();
    this.model = new MainModel();
    this.element = document.getElementById('widgetConteiner');
    
}

LeftSideBarPresenter.prototype = Object.create(Presenter.prototype);
LeftSideBarPresenter.prototype.constructor = LeftSideBarPresenter;

// LeftSideBarPresenter.prototype.render = function(compiledTemplate) {
//     $(compiledTemplate).insertBefore(this.element);
// };

LeftSideBarPresenter.prototype.init = function() {
        var i;
        // for ( i = 0; i < this.model.getData(products).length ; i++ ) {
            this.render(this.view.getTemplate(this.model.getData(products), i));
    // }
    this.getButtons();
    this.bindEvents();
}

LeftSideBarPresenter.prototype.getButtons = function() {
    // this.category = document.getElementsByClassName('category')[0];
    // console.log('get buttons')
    this.sideBarCategory = $('.widget__link--behover');
}

LeftSideBarPresenter.prototype.bindEvents = function() {
    this.sideBarCategory.on('click', this.handleSideBarCategoryClick.bind(this));
}

LeftSideBarPresenter.prototype.handleSideBarCategoryClick = function(event) {
    this.history.push('/goods?categoryID='+ event.currentTarget.id );
}

// LeftSideBarPresenter.prototype.clean = function() {
//     console.log(13);
//     this.element.innerHTML = '';
// }

export default LeftSideBarPresenter;
