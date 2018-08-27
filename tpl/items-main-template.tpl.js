import  goodsInListTpl  from './goods-in-list.tpl';
import tplOfLeftBar from './left-side-bar.tpl';
const TplWithLeftBar = `
    <div class="change-view">
        <a class="icons header__icons--responsive-element">
            List View
        </a>
    </div>
    <div class="content">
        <nav class="widget">
            <h3 class="widget__title">Категории</h3>
            <ul class="widget__list">
                <% for ( i = 0; i < this.model.getData(products).length ; i++ ) {%>
                ${tplOfLeftBar}
                <% }; %>
            </ul>
        </nav>
        <h1></h1>
        <main class="main goods-range">
            
        </main>
    </div>`
export default TplWithLeftBar;