import goodsInList from '../../tpl/goods-in-list.tpl'
import template from 'lodash/template';
class goodsInListView{

    getTemplate(products, i, j) {

        const templateForInsert = template(goodsInList)({products, i, j});
        return templateForInsert;
    }
}
export default goodsInListView;
