import TplWithLeftBar from '../../tpl/items-main-template.tpl'
import template from 'lodash/template';
function ItemsMainView() {}

ItemsMainView.prototype.getTemplate = function(products, i , j) {
    var templateForInsert = template(TplWithLeftBar)({products, i , j});
    return templateForInsert;
}

export default ItemsMainView;
