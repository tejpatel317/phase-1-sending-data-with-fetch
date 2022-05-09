function submitData(username, userEmail){
    let userData = {name : username, email : userEmail}
    
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then((resp) => resp.json())
    .then((data) => {
        const element = document.createElement("p")
        element.textContent = data.id
        document.body.appendChild(element)
    })
    .catch((message) => {
        const errorMessage = document.createElement("p")
        errorMessage.textContent = message
        document.body.appendChild(errorMessage)
    })
}