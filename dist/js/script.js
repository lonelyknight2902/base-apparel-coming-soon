const input = document.getElementById("email");
const form = document.getElementById("form")
const msg = document.querySelector(".error-msg");
const icon = document.querySelector(".error");
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
input.addEventListener("invalid", (e) => {
    e.preventDefault();
    msg.style.display = "block";
    icon.style.display = "flex";
});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!re.test(document.forms["submit"]["email"].value)) {
        msg.style.display = "block";
        icon.style.display = "flex";
    } else {
        msg.style.display = "none";
        icon.style.display = "none";
    }
})