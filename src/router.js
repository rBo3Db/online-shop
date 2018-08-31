import HeaderPresenter from './presenters/header-presenter';
import PopupPresenter from './presenters/popup-presenter';
import CategoriesPresenter from './presenters/categories-presenter';
// import ItemsMainPresenter from './presenters/items-main-presenter';
import LeftSideBarPresenter from './presenters/left-side-bar-presenter';
import goodsInListPresenter from './presenters/goods-in-list-presenter';
import ItemViewPresenter from './presenters/item-card-presenter';
import cartPresenter from './presenters/cart-presenter';
// import SideSumPresenter from './presenters/side-sum-presenter';

class Router {
    constructor() {
        this.currentPreseners = [];
    }

    clean() {
        this.currentPreseners.forEach(elem => {
            elem.clean();
        });
    }

    dispatch(history, cart) {

        if (history.location.hash === '#login') {
            this.currentPreseners = [new PopupPresenter(history)];
            return this.currentPreseners;
        }

        if (history.location.pathname === '/') {
            this.clean();
            this.currentPreseners = [new HeaderPresenter(history), new CategoriesPresenter(history)];
            return this.currentPreseners;
        }
        if (history.location.pathname === '/goods') {
            this.clean();

            this.currentPreseners = [new HeaderPresenter(history), new LeftSideBarPresenter(history), new goodsInListPresenter(history, cart)];
            return this.currentPreseners;
        }
        if (history.location.pathname === '/good') {
            this.clean();

            this.currentPreseners = [new HeaderPresenter(history), new ItemViewPresenter(history, cart)];
            return this.currentPreseners;
        }
        if (history.location.pathname === '/cart') {
            this.clean();

            this.currentPreseners = [new HeaderPresenter(history), new cartPresenter(history, cart)];
            return this.currentPreseners;
        };
        // if (history.location.pathname === '/goods') {
        //     this.clean();

        //     this.currentPreseners = [];
        //     return this.currentPreseners;
        // }
        return [];
    }
}
export default Router;