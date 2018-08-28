import goodsInList from '../../tpl/goods-in-list.tpl'
import template from 'lodash/template';
function goodsInListView() {}

goodsInListView.prototype.getTemplate = function(products, i, j) {

    var templateForInsert = template(goodsInList)({products, i, j});
    return templateForInsert;
}

export default goodsInListView;
