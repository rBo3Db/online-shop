import sideSum from '../../tpl/side-sum.tpl'
import template from 'lodash/template';
function sideSumView() {}

sideSumView.prototype.getTemplate = function(products, i) {
    var templateForInsert = template(sideSum)({products, i});
    return templateForInsert;
}

export default sideSumView;
