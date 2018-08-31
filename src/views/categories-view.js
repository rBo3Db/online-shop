import categories from '../../tpl/categories.tpl'
import template from 'lodash/template';
class CategoriesView {

    getTemplate(products, i) {

        const templateForInsert = template(categories)({products, i});
        return templateForInsert;
    }
}
export default CategoriesView;
