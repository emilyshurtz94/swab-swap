const searchBtn = async (event) => {
    event.preventDefault();
    console.log(event)
    const search = document.getElementById("searchBtn")
    const zipCode = document.getElementById("zipCode")
    if(search) {
        const response = await fetch("/api/content", {
            method: "POST"
        });

        const data = await response.json();
        if(data == zipCode)
        location.reload()
    } else {
        console.log(data)
    }
}
document.addEventListener("click", searchBtn)