import template from 'lodash/template';
var header = template(`
    <a href="categories-grid.html">
        <div class="header__logo logo"> </div>
    </a>
    <div class="header__header-elements">
        <input class="header__search search header__search--responsive-element" type="search" name="search" placeholder="Search" pattern=".{1,}">
        <a class="header__icons icons" name="card" href="cart.html">
            <i class="fas fa-shopping-cart"></i>
        </a>
        <a class="popup__link popup__link--login header__icons icons header__icons--responsive-element" name="profile">
            <i class="fas fa-user-circle"></i>
        </a>
        <div class="search__results"></div>
    </div>
    `)();
export default header;
// document.getElementsByClassName('header')[0].innerHTML = header;