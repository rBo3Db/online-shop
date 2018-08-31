
export default class Presenter {

    constructor(element) {
        this.element = element;
    }

    render(compiledTemplate) {
        this.element.innerHTML = compiledTemplate;
    }
    
    renderPlus(compiledTemplate) {
        this.element.innerHTML += compiledTemplate;
    }

    getQueryVariable(variable) {
        let query = window.location.search.substring(1);
        let vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
    }
    clean() {
        this.element.innerHTML = '';
    }
}