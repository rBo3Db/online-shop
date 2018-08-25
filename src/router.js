// import MainPresenter from './presenters/main-presenter';
import HeaderPresenter from './presenters/header-presenter';

Router.prototype.dispatch = function(hash) {
    
    if (hash === '#123') {
        return [new HeaderPresenter()];
    }
    return [];
}

export default Router;
