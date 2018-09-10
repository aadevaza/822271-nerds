var link = document.querySelector(".contacts__link");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-close");
var login = popup.querySelector("[name=user-name]");
var form = popup.querySelector(".feedback__form");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
    popup.classList.remove("feedback-error");
    login.focus();
});
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
});
form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            popup.classList.remove("feedback-error");
        }
    }
});
