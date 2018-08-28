
function Presenter(element) {
    this.element = element;
}

Presenter.prototype.render = function(compiledTemplate) {
    this.element.innerHTML = compiledTemplate;
}
Presenter.prototype.renderPlus = function(compiledTemplate) {
    this.element.innerHTML += compiledTemplate;
}
Presenter.prototype.clean = function() {
    this.element.innerHTML = '';
}

export default Presenter;