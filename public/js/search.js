const searchBtn = document.getElementById('searchBtn');


const searchHandler = async (event) => {
    event.preventDefault();
    const zipcode = document.getElementById("searchZipcode").value
    window.location.href=`/content/${zipcode}`
}
    document.getElementById("searchForm").addEventListener("submit", searchHandler) 