import MainPresenter from './presenters/main-presenter';

function Router() {}

Router.prototype.dispatch = function(hash) {
    if (hash === '#123') {
        return [new MainPresenter()];
    }
    return [];
}

export default Router;
