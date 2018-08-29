const itemTpl = `
    <main class="main">
        <div class='slider'>
            <p><span><%products[i].name%></span> | <span><%= products[i].goods[j].name %></span></p>
            <div class='slider__big-image' id="dropBigImage">
            </div>
            <div class='slider__conteiner-for-small-photos'id="containerOfSlider">
                <button class="slider__arrow-left">
                    <
                </button>
                <button class="slider__arrow-right">
                    >
                </button>
            </div>
        </div>
        <div class="good-information">
            <h1 class="name-of-good"><%= products[i].goods[j].name %></h1> 
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            <p><%= products[i].goods[j].description %></p>
            <div class="cost-block">
                Price<b>$<%= products[i].goods[j].price %></b>
                <form>
                    Quantity
                    <input class="cost-block__quantity--responsive-element"type="number" required value="1">
                    <a class="cost-block__submit-button--responsive-element">Add to cart</a>
                </form>
            </div>
            <div class="social-networks">
                <br><a class="social-networks__social-network social-networks__social-network--responsive-element"><i class="fab fa-twitter"></i></a>
                <a class="social-networks__social-network social-networks__social-network--responsive-element"><i class="fab fa-facebook-square"></i></a>
                <a class="social-networks__social-network social-networks__social-network--responsive-element"><i class="far fa-envelope"></i>
            </div>
        </div>
    </main>
    `;
    export default itemTpl;