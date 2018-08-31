// import products from '../categoriesObject';
import Presenter from './presenter';
// import MainModel from '../models/main-model';
import PopupView from '../views/popup-view';


export default class PopupPresenter extends Presenter {
    constructor(history) {
        super();
        this.history = history;
        this.view = new PopupView();
        // this.model = new MainModel();
        this.element = document.getElementsByClassName('popup')[0];
    }

init() {

    this.render(this.view.getTemplate());
    // this.getButtons();
    // this.bindEvents();
}

// getButtons() {
//     this.search = document.getElementsByClassName('search')[0];
//     this.cardButton = document.getElementById('cardOpenerButton');
//     this.popupOpenerButton = document.getElementById('popupOpenerButton');
// }

// bindEvents() {
//     this.search.addEventListener('keyup', this.handleButtonClick.bind(this), false);
//     this.cardButton.addEventListener('click', this.handleButtonClick.bind(this), false);
//     this.popupOpenerButton.addEventListener('click', this.handleButtonClick.bind(this), false);
// }

// handleButtonClick(event) {
//     this.history.push('/goods', { id: event.target.id });
//     console.log('Click to button #');
// }

// clean() {
//     console.log(13);
//     this.element.innerHTML = '';
// }
}