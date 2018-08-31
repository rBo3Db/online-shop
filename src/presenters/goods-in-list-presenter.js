import products from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import goodsInListView from '../views/goods-in-list-view';

export default class goodsInListPresenter extends Presenter {
    constructor(history, cart) {
        super();
        this.history = history;
        this.view = new goodsInListView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('goods-range')[0];
        this.i = this.getQueryVariable('categoryID');
        this.cart = cart;
    }
    init() {
        let j;
        console.log(this.model);

        for ( j = 0; j < this.model.getData(products[this.i].goods).length ; j++ ) {
        
            this.renderPlus(this.view.getTemplate(this.model.getData(products), this.i, j));

        };
        this.getButtons();
        this.bindEvents();
    }

    getButtons() {
        this.category = $('.good');
        this.addToCardButton = $("button")
    }

    bindEvents() {
        this.category.on('click', this.handleGoodButtonClick.bind(this));
    }

    handleGoodButtonClick(event) {
        console.log(event);
        if (event.target.tagName  === 'BUTTON') {
            this.cart.add(this.model.getCartModel(this.model.getData(products), this.i, event.target.id));
        } else {
        this.history.push('/good' + location.search + '&goodID=' + event.currentTarget.id);
        }
    }
}