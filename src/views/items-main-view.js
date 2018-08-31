import TplWithLeftBar from '../../tpl/items-main-template.tpl'
import template from 'lodash/template';
class ItemsMainView {

    getTemplate(products, i , j) {
        const templateForInsert = template(TplWithLeftBar)({products, i , j});
        return templateForInsert;
    }
}

export default ItemsMainView;
