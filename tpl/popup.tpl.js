function loadPopup(){
var popup = _.template(`
    <div id="login" class="popup__form popup__form--show-popup">
        <a class="popup__x popup__x--responsive-element">x</a>
        Please Sign In
        <form>
            <input id="userName" type="email" class="popup__form-element popup__form-element--responsive-element" name="email" placeholder="email" autofocus required pattern=".{3,}"> <br>
            <input id="userPw" type="password" class="popup__form-element popup__form-element--responsive-element" name="password" placeholder="password" required pattern=".{1,}"> <br>
            <p>
                <input type="checkbox" class="popup__form-element popup__form-element--responsive-element" name="Remember me"><br>
                Remember me
            </p>
            <button id="login_btn" type="submit" class="popup__form-element popup__form-element--responsive-element">Sign In</button>
        </form>
        <a class="popup__link popup__link--register popup__link--responsive-element">Register</a>
    </div>
    <div id="register" class="popup__form popup__form--show-popup">
        <a class="popup__x popup__x--responsive-element" href="">x</a>
        <form>
            <input id='name' type="email" class="popup__form-element popup__form-element--responsive-element" name="email" placeholder="email" autofocus required pattern=".{3,}"> <br>
            <input id='pw' type="password" class="popup__form-element popup__form-element--responsive-element" name="password" placeholder="password" required pattern=".{1,}"> <br>
            <button id="rgstr_btn" type="submit" class="popup__form-element popup__form-element--responsive-element">Registration</button>
        </form>
        <a class="popup__link popup__link--login popup__link--responsive-element">Sign In</a>
    </div>
`)();

document.getElementsByClassName('popup')[0].innerHTML = popup;
}
loadPopup()