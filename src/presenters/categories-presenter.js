import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import CategoriesView from '../views/categories-view';
import { autobind } from 'core-decorators';

class CategoriesPresenter extends Presenter{
    constructor (history) {
        super();
        this.history = history;
        this.view = new CategoriesView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('main')[0];
    }
    init() {
        let i;
        // this.model.getData[i].forEach(i => {
        //     this.render(this.view.getTemplate(this.model.getData(products, i)));
        // });
        
        for ( i = 0; i < this.model.getData(products).length ; i++ ) {
            
            this.renderPlus(this.view.getTemplate(this.model.getData(products), i));

        };
        this.getButtons();
        this.bindEvents();
    }

    getButtons() {
        // this.category = document.getElementsByClassName('category')[0];
        // console.log('get buttons')
        this.category = $('.category');
    }

    bindEvents() {
        this.category.on('click', this.handleCategoryButtonClick);
    }
    @autobind
    handleCategoryButtonClick(event) {
        console.log( event );
        this.history.push('/goods?categoryID=' + event.currentTarget.id );
        console.log('Click to button #' + event.currentTarget.id);
    }
}
export default CategoriesPresenter;
