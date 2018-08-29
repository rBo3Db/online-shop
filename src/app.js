import Router from './router';
import forEach from 'lodash/forEach';

function App() {
    this.router = new Router();
    this.blocks = [];
}

App.prototype.renderPage = function(history, cart) {
    this.blocks = this.router.dispatch(history, cart);
    if (this.blocks) {
        forEach(this.blocks, function(block) {
            block.init();
        });
    }
}

export default App;
