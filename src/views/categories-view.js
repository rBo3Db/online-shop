import categories from '../../tpl/categories.tpl'
import template from 'lodash/template';
function CategoriesView() {}

CategoriesView.prototype.getTemplate = function(products, i) {

    var templateForInsert = template(categories)({products, i});
    return templateForInsert;
}

export default CategoriesView;
