const cartTpl = 
`<div class="good">
    <img name="Photo-of-good-in-card" class="good__logo" src="<%= products[i].photo %>">
    <span class=""><%- products[i].name %></span>
    Quantity
    <input class="good__quantity" type="number" name="quantity" value="1">
    <span class="priceOfGood"><%- products[i].price %></span>
    <span>
        <a class="good__link-remove-good-in-card" id='<%=i%>'>
            Remove
        </a>
    </span>
</div>`
export default cartTpl;