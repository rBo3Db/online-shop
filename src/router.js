import HeaderPresenter from './presenters/header-presenter';
import PopupPresenter from './presenters/popup-presenter';
import CategoriesPresenter from './presenters/categories-presenter';
// import ItemsMainPresenter from './presenters/items-main-presenter';
import LeftSideBarPresenter from './presenters/left-side-bar-presenter';
import goodsInListPresenter from './presenters/goods-in-list-presenter';
import ItemViewPresenter from './presenters/item-card-presenter';

function Router() {
    this.currentPreseners = [];
}

Router.prototype.clean = function () {
    this.currentPreseners.forEach(elem => {
        elem.clean();
    });
}

Router.prototype.dispatch = function(history) {

    if (history.location.pathname === '/index') {
        this.clean();
        this.currentPreseners = [new HeaderPresenter(history), new PopupPresenter(history),new CategoriesPresenter(history)];
        return this.currentPreseners;
    }
    if (history.location.pathname === '/goods') {
        this.clean();

        this.currentPreseners = [new HeaderPresenter(history) , new PopupPresenter(history), new LeftSideBarPresenter(history), new goodsInListPresenter(history)];
        return this.currentPreseners;
    }
    if (history.location.pathname === '/good') {
        this.clean();

        this.currentPreseners = [new HeaderPresenter(history) , new PopupPresenter(history), new ItemViewPresenter(history)];
        return this.currentPreseners;
    }
    // if (history.location.pathname === '/goods') {
    //     this.clean();

    //     this.currentPreseners = [];
    //     return this.currentPreseners;
    // }

    return [];
}

export default Router;