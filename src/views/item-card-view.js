import itemCardTpl from '../../tpl/item-card.tpl'
import template from 'lodash/template'
class ItemCardView {

    getTemplate(products, i, j) {
        const templateForInsert = template(itemCardTpl)({products, i, j});
        return templateForInsert;
    }
}

export default ItemCardView;
