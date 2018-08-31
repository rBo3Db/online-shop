import Presenter from './presenter';
import HeaderView from '../views/header-view';


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
        this.search.addEventListener('keyup', this.handleSearchInputKeyup.bind(this), false);
        this.cartButton.addEventListener('click', this.handleCartButtonClick.bind(this), false);
        this.popupOpenerButton.addEventListener('click', this.handlePopupOpenerButtonClick.bind(this), false);
    }

    handleCartButtonClick() {
        this.history.push('/cart');
        console.log('Click to button #');
    }
    handlePopupOpenerButtonClick() {
        this.history.push(location.pathname + location.search + '#login');
    }
    handleSearchInputKeyup() {
        console.log(this.search.value)
    }
}
