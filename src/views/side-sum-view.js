import sideSum from '../../tpl/side-sum.tpl'
import template from 'lodash/template';
class sideSumView {

    getTemplate(products, i) {
        const templateForInsert = template(sideSum)({products, i});
        return templateForInsert;
    }
}
export default sideSumView;
