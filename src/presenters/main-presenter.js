import * as data from '../categoriesObject';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import MainView from '../views/main-view';


function MainPresenter(history) {
    Presenter.apply(this, arguments);
    this.history = history;
    this.view = new MainView();
    this.model = new MainModel();
}

MainPresenter.prototype = Object.create(Presenter.prototype);
MainPresenter.prototype.constructor = MainPresenter;

MainPresenter.prototype.init = function() {
    this.render(this.view.getTemplate(this.model.getData(data)));
    this.getButtons();
    this.bindEvents();
}

MainPresenter.prototype.getButtons = function() {
    this.button1 = document.getElementById('button1');
    this.button2 = document.getElementById('button2');
}

MainPresenter.prototype.bindEvents = function() {
    this.button1.addEventListener('click', this.handleButtonClick.bind(this), false);
    this.button2.addEventListener('click', this.handleButtonClick.bind(this), false);
}

MainPresenter.prototype.handleButtonClick = function(event) {
    this.history.push('/goods', { id: event.target.dataset.id });
    console.log(`Click to button #${event.target.dataset.id}`);
}

MainPresenter.prototype.clean = function() {
    console.log(13);
    this.element.innerHTML = '';
}

export default MainPresenter;
