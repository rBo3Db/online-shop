import Presenter from './presenter';
import HeaderView from '../views/header-view';
import { autobind } from 'core-decorators';

export default class HeaderPresenter extends Presenter{
    constructor(history) {
        super();
        this.history = history;
        this.view = new HeaderView();
        this.element = document.getElementsByClassName('header')[0];
    }

    init() {
        this.render(this.view.getTemplate());
        this.getButtons();
        this.bindEvents();
    }

    getButtons() {
        this.search = document.getElementsByClassName('search')[0];
        this.cartButton = document.getElementById('cardOpenerButton');
        this.popupOpenerButton = document.getElementById('popupOpenerButton');
    }

    bindEvents() {
        this.search.addEventListener('keyup', this.handleSearchInputKeyup, false);
        this.cartButton.addEventListener('click', this.handleCartButtonClick, false);
        this.popupOpenerButton.addEventListener('click', this.handlePopupOpenerButtonClick, false);
    }
    @autobind
    handleCartButtonClick() {
        this.history.push('/cart');
        console.log('Click to button #');
    }
    @autobind
    handlePopupOpenerButtonClick() {
        this.history.push(location.pathname + location.search + '#login');
    }
    @autobind
    handleSearchInputKeyup() {
        console.log(this.search.value)
    }
}
