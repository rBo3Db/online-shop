const goodsInListTpl = `
<div class="good good--in-list"  id="<%- j %>">
    <img alt="photo of good in list" class="good__logo"src="<%= products[i].goods[j].photo %>">
    <div class="good-name-and-cost">
        <h1 class="NameOfGood"><%= products[i].goods[j].name %></h1>
        <b class="priceOfGood">$<%= products[i].goods[j].price %></b>
        <p class="ShortDescriptionOfGoodInList"><%= products[i].goods[j].description %></p>
        <button id="<%- j %>">Add to card</button>
    </div>
</div>
`
export default goodsInListTpl;