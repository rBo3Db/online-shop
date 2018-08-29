import cartTpl from '../../tpl/cart.tpl'
import template from 'lodash/template';
function CartView() {}

CartView.prototype.getTemplate = function(products, i) {

    var templateForInsert = template(cartTpl)({products, i});
    return templateForInsert;
}

export default CartView;
