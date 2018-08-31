import Router from './router';
import forEach from 'lodash/forEach';

class App {
    constructor() {
        this.router = new Router();
        this.blocks = [];
    }

    renderPage(history, cart) {
        this.blocks = this.router.dispatch(history, cart);
        if (this.blocks) {
            forEach(this.blocks, function(block) {
                block.init();
            });
        }
    }
}

export default App;
