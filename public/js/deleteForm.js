const deleteForm = async (event) => {
    if(event.target.localName === "button"){
        
        let deleteId = event.target.dataset.id
        const response = await fetch('/api/content/' + deleteId,
        {
            method: 'DELETE'
        });
        const data = await response.json();
        if(data === 1){
            location.reload()
        } else {

            console.log(data)
        }
    }
  }

document
.querySelector("#cards")
.addEventListener("click", deleteForm);