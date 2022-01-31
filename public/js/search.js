const searchBtn = async (event) => {
    event.preventDefault();
    const zipcode = document.getElementById("zipCode")
    if(zipcode.ok) {
        window.location.href = "/content"
    } else {
        alert(zipcode.statusText)
    }
}
document.addEventListener("click", searchBtn)