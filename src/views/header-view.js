import header from '../../tpl/header.tpl'
function HeaderView() {}

HeaderView.prototype.getTemplate = function() {
    return header;
}

export default HeaderView;
