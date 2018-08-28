
const tplOfLeftBar = `
<nav class="widget">
    <h3 class="widget__title">Категории</h3>
    <ul class="widget__list">
        <%for (i=0; i < products.length; i++) {%>
            <li class="widget__link" id = '<%= i %>'>
                <a class=" widget__link--behover">
                    <i class="fas fa-mobile-alt"></i> <%- products[i].name %>
                </a>
            </li>
        <% }; %>
    </ul>
</nav>
`;

export default tplOfLeftBar;