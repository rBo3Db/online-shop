
function Presenter(element) {
    this.element = element;
}

Presenter.prototype.render = function(compiledTemplate) {
    this.element.innerHTML = compiledTemplate;
}
Presenter.prototype.renderPlus = function(compiledTemplate) {
    this.element.innerHTML += compiledTemplate;
}
Presenter.prototype.getQueryVariable = function(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}
Presenter.prototype.clean = function() {
    this.element.innerHTML = '';
}

export default Presenter;