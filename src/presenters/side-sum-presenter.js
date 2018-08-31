// import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import sideSumView from '../views/side-sum-view';
// import { autobind } from 'core-decorators';

export default class SideSumPresenter extends Presenter {
    constructor(history) {
        super();
        this.history = history;
        this.view = new sideSumView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('content')[0];   
    }

// render(compiledTemplate) {
//     $(compiledTemplate).insertBefore(this.element);
// };

init() {
        // for ( i = 0; i < this.model.getData(products).length ; i++ ) {
            this.render(this.view.getTemplate());
    // this.model.getData(this.cart.products}
//     this.getButtons();
//     this.bindEvents();
}

// getButtons() {
//     // this.category = document.getElementsByClassName('category')[0];
//     // console.log('get buttons')
//     this.sideBarCategory = $('.widget__link--behover');
// }

// bindEvents() {
//     this.sideBarCategory.on('click', this.handleSideBarCategoryClick.bind(this));
// }

// handleSideBarCategoryClick(event) {
//     this.history.push('/goods?categoryID='+ event.currentTarget.id );
// }

// // clean() {
// //     console.log(13);
// //     this.element.innerHTML = '';
}