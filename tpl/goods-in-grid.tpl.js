const goodsInGridTpl = `
<div class="category category--good-size" id="<%- j %>">
    <img alt="photo of good" src="<%= products[i].goods[j].photo %>"class="category__pic-of-category">
    <h3><a class="NameOfGood"><%= products[i].goods[j].name %></a></h3>
    <b class="priceOfGood">$<%= products[i].goods[j].price %></b>
</div>
`
export default goodsInGridTpl;