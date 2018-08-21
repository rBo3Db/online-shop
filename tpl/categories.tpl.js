var categories = _.template (`<div class="category category--category-size" id="<%- i %>">
    <img alt="photo of category" class="category__pic-of-category" src="<%= products[i].photo %>">
    <span><%= products[i].name%> (<%=products[i].goods.length%>)</span>
</div>`)();