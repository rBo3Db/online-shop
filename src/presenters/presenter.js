function Presenter(element) {
    this.element = element;
}

Presenter.prototype.render = function(compiledTemplate) {
    this.element.innerHTML = compiledTemplate;
}
Presenter.prototype.clean = function() {
    console.log(13);
    this.element.innerHTML = '';
}

export default Presenter;