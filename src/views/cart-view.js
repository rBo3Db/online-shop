import cartTpl from '../../tpl/cart.tpl'
import template from 'lodash/template';
class CartView {

    getTemplate(products, i) {

        const templateForInsert = template(cartTpl)({products, i});
        return templateForInsert;
    }
}
export default CartView;
