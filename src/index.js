import App from './app';
import createHistory from 'history/createBrowserHistory';
import '../styles/main.scss';
import Cart from '../services/cartService'
const history = createHistory();
const cart = new Cart();
const app = new App();

app.renderPage(history, cart);

history.listen((location, action) => {
    app.renderPage(history, cart);
});
