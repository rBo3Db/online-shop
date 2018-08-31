import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import LeftSideBarView from '../views/left-side-bar-view';

export default class LeftSideBarPresenter extends Presenter {
    constructor(history) {
        super();
        this.history = history;
        this.view = new LeftSideBarView();
        this.model = new MainModel();
        this.element = document.getElementById('widgetConteiner');   
    }

    // render(compiledTemplate) {
    //     $(compiledTemplate).insertBefore(this.element);
    // };

    init() {
            let i;
            // for ( i = 0; i < this.model.getData(products).length ; i++ ) {
                this.render(this.view.getTemplate(this.model.getData(products), i));
        // }
        this.getButtons();
        this.bindEvents();
    }

    getButtons() {
        // this.category = document.getElementsByClassName('category')[0];
        // console.log('get buttons')
        this.sideBarCategory = $('.widget__link--behover');
    }

    bindEvents() {
        this.sideBarCategory.on('click', this.handleSideBarCategoryClick.bind(this));
    }

    handleSideBarCategoryClick(event) {
        this.history.push('/goods?categoryID='+ event.currentTarget.id );
    }

}