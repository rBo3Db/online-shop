function MainView() {}

MainView.prototype.getTemplate = function(data) {
    return `
    <div class="category category--category-size" id="<%- i %>">
        <img alt="photo of category" class="category__pic-of-category" src="<%= products[i].photo %>">
        <span><%= products[i].name%> (<%=products[i].goods.length%>)</span>
    </div>;
    `;
}

export default MainView;
