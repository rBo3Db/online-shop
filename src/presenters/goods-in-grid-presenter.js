// import products from '../categoriesObject';
// import Presenter from './presenter';
// import MainModel from '../models/main-model';
// import goodsInGridView from '../views/goods-in-list-view';

// function goodsInGridPresenter(history) {
//     Presenter.apply(this, arguments);
//     this.history = history;
//     this.view = new goodsInGridView();
//     this.model = new MainModel();
//     this.element = document.getElementsByClassName('goods-range')[0];
// }

// goodsInGridPresenter.prototype = Object.create(Presenter.prototype);
// goodsInGridPresenter.prototype.constructor = goodsInGridPresenter;
// goodsInGridPresenter.prototype.init = function() {
//     var i = Number(this.history.location.hash[1]);
//     var j;
//     console.log(this.model);
//     // this.model.getData[i].forEach(i => {
//     //     this.render(this.view.getTemplate(this.model.getData(products, i)));
//     // });
    
//     for ( j = 0; j < this.model.getData(products[i].goods).length ; j++ ) {
    
//         this.render(this.view.getTemplate(this.model.getData(products), i, j));

//     };
// //     this.getButtons();
// //     this.bindEvents();
// }

// goodsInGridPresenter.prototype.getButtons = function() {
//     // this.category = document.getElementsByClassName('category')[0];
//     // console.log('get buttons')
//     this.category = $('.category');
// }

// goodsInGridPresenter.prototype.bindEvents = function() {
//     this.category.on('click', this.handleButtonClick.bind(this));
// }

// goodsInGridPresenter.prototype.handleButtonClick = function(event) {
//     console.log( event );
//     this.history.push('/goods#'+ event.currentTarget.id );
//     console.log('Click to button #' + event.currentTarget.id);
//     this.clean();
// }

// // goodsInGridPresenter.prototype.clean = function() {
// //     console.log(13);
// //     this.element.innerHTML = '';
// // }

// export default goodsInGridPresenter;
