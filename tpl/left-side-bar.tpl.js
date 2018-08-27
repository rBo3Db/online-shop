const tplOfLeftBar = `
<nav class="widget">
    <h3 class="widget__title">Категории</h3>
    <ul class="widget__list">
        <li class="widget__link" id = '+ i +'>
            <a class=" widget__link--behover">
                <i class="fas fa-mobile-alt"></i> '+ products[i].name +'
            </a>
        </li>
    </ul>
</nav>
`;
export default tplOfLeftBar;