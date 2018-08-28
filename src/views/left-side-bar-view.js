import tplOfLeftBar from '../../tpl/left-side-bar.tpl'
import template from 'lodash/template';
function LeftSideBarView() {}

LeftSideBarView.prototype.getTemplate = function(products, i) {
    var templateForInsert = template(tplOfLeftBar)({products, i});
    return templateForInsert;
}

export default LeftSideBarView;
