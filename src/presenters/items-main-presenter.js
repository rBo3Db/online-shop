import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import ItemsMainView from '../views/items-main-view';


export default class ItemsMainPresenter extends Presenter {
    constructor(history) {
        super();
        this.history = history;
        this.view = new ItemsMainView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('header')[0];
    }
    render(compiledTemplate) {
        // $('main').remove;
        $(compiledTemplate).insertAfter(this.element)
    }

    init() {
        const i;
        const j;
        console.log(this.model);
        
        // this.model.getData[i].forEach(i => {
        //     this.render(this.view.getTemplate(this.model.getData(products, i)));
        // });
        this.render(this.view.getTemplate(this.model.getData(products), i, j));
        this.getButtons();
        this.bindEvents();
    }

    getButtons() {
        // this.addToCartButton = document.getElementsByClassName('cost-block__submit-button--responsive-element')[0];
    }

    bindEvents() {
        // this.cardButton.addEventListener('click', this.handleButtonClick.bind(this), false);
    }

    handleButtonClick() {

    }
}