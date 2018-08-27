import goodsInGrid from '../../tpl/goods-in-grid.tpl'
import template from 'lodash/template';
function goodsInGridView() {}

goodsInGridView.prototype.getTemplate = function(products, i, j) {

    var templateForInsert = template(goodsInGrid)({products, i, j});
    return templateForInsert;
}

export default goodsInGridView;
