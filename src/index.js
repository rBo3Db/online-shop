import App from './app';
import createHistory from 'history/createBrowserHistory';
import '../styles/main.scss';

const history = createHistory();

var app = new App();

app.renderPage(history);

history.listen((location, action) => {
    app.renderPage(history);
});
