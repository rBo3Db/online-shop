import tplOfLeftBar from '../../tpl/left-side-bar.tpl'
import template from 'lodash/template';
class LeftSideBarView {

    getTemplate(products, i) {
        const templateForInsert = template(tplOfLeftBar)({products, i});
        return templateForInsert;
    }
}
export default LeftSideBarView;
