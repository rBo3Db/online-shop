import itemCardTpl from '../../tpl/item-card.tpl'
import template from 'lodash/template'
function itemCardView() {}

itemCardView.prototype.getTemplate = function(products, i, j) {
    var templateForInsert = template(itemCardTpl)({products, i, j});
    return templateForInsert;
}

export default itemCardView;
