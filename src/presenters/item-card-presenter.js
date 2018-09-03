import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import ItemCardView from '../views/item-card-view';
import { autobind } from 'core-decorators';

export default class ItemViewPresenter extends Presenter {
    constructor (history, cart) {
        super();
        this.history = history;
        this.view = new ItemCardView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('main')[0];
        this.cart = cart;
    }

    init() {
        this.i = Number(this.getQueryVariable('categoryID'));
        this.j = Number(this.getQueryVariable('goodID'));

        this.renderPlus(this.view.getTemplate(this.model.getData(products), this.i, this.j));

        this.getButtons();
        this.bindEvents();
    }

    getButtons() {
        this.addToCartButton = document.getElementsByClassName('cost-block__submit-button--responsive-element')[0];
    }
    
    bindEvents() {
        this.addToCartButton.addEventListener('click', this.handleButtonClick, false);
    }
    
    @autobind

    handleButtonClick() {
        this.cart.add(this.model.getCartModel(this.model.getData(products), this.i, this.j));
        console.log('Click to button #');
    }
    unbind() {
        this.addToCartButton.removeEventListener('click', this.handleButtonClick,false);
    }
    clean() {
        this.unbind();
        this.element.innerHTML = '';
    }
}