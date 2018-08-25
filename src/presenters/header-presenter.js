import header from '../../tpl/header.tpl';
import Presenter from './presenter';

export default class HeaderPresenter extends Presenter {
    constructor(history) {
        super()
        this.history = history;
        this.header = document.getElementsByClassName('header')[0];
    }

    init() {
        this.render(header, this.header);
    }
}