var btn = document.querySelectorAll("button")[0];
var email = document.querySelectorAll("input")[0];

btn.addEventListener("click", function(){
    if (email.value == ""){
        email.style.borderColor = "hsl(354, 100%, 66%)"
        document.querySelectorAll("p")[1].classList.remove("hidden");
        email.attributes["placeholder"].value = "example@email/com"
    }
})