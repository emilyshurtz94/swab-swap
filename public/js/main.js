// made it where we can click on logo to take back to home-page

var homebtn = document.querySelector (".navbar-brand")
homebtn.addEventListener("click", function(){
    window.location.href = "/homepage"
})
