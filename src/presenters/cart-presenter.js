// import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import CartView from '../views/cart-view';
import { autobind } from 'core-decorators';

export default class cartPresenter extends Presenter {
    constructor(history, cart) {
        super();
        this.history = history;
        this.view = new CartView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('main')[0];
        this.cart = cart;
    }

    init() {
        console.log(this.cart.products);
        for ( let i = 0; i < this.model.getData(this.cart.products).length ; i++ ) {
        
            this.renderPlus(this.view.getTemplate(this.model.getData(this.cart.products), i));

        };
        this.getButtons();
        this.bindEvents();
    }
    
    getButtons() {
        this.remove = $('.good__link-remove-good-in-card');
    }

    bindEvents() {
        this.remove.on('click', this.handleRemoveButtonClick);
    }
    @autobind
    handleRemoveButtonClick(event) {
        this.model.getData(this.cart.products.splice(event.target.id, 1));
        this.history.push('/cart');
    }
    unbind() {
        this.remove.unbind();
    }
    clean() {
        this.unbind();
        this.element.innerHTML = '';
    }
}
