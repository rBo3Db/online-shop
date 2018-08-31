// import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import sideSumView from '../views/side-sum-view';

function SideSumPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new sideSumView();
    this.model = new MainModel();
    this.element = document.getElementsByClassName('content')[0];
    
}

SideSumPresenter.prototype = Object.create(Presenter.prototype);
SideSumPresenter.prototype.constructor = SideSumPresenter;

// SideSumPresenter.prototype.render = function(compiledTemplate) {
//     $(compiledTemplate).insertBefore(this.element);
// };

SideSumPresenter.prototype.init = function() {
        // for ( i = 0; i < this.model.getData(products).length ; i++ ) {
            this.render(this.view.getTemplate());
    // this.model.getData(this.cart.products}
//     this.getButtons();
//     this.bindEvents();
// }

// SideSumPresenter.prototype.getButtons = function() {
//     // this.category = document.getElementsByClassName('category')[0];
//     // console.log('get buttons')
//     this.sideBarCategory = $('.widget__link--behover');
// }

// SideSumPresenter.prototype.bindEvents = function() {
//     this.sideBarCategory.on('click', this.handleSideBarCategoryClick.bind(this));
// }

// SideSumPresenter.prototype.handleSideBarCategoryClick = function(event) {
//     this.history.push('/goods?categoryID='+ event.currentTarget.id );
// }

// // SideSumPresenter.prototype.clean = function() {
// //     console.log(13);
// //     this.element.innerHTML = '';
}

export default SideSumPresenter;
