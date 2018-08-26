import MainPresenter from './presenters/header-presenter';


function Router() {
    this.currentPreseners = [];
}

Router.prototype.clean = function () {
    this.currentPreseners.forEach(elem => {
        elem.clean();
    });
}

Router.prototype.dispatch = function(history) {

    if (history.location.pathname === '/goods') {
        this.clean();
        this.currentPreseners = [new MainPresenter(history)];
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