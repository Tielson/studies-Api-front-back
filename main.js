const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
  fetch(`${url}/3`)
    .then(response => response.json())
    .then( data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
fetch(url, {
  method:"POST",
  body: JSON.stringify(newUser),
  headers:{ "content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch()
}

function updateUser(updatedUser,id){ 
  fetch(`${url}/${id}`, 
  {method: "PUT",
  body: JSON.stringify(updatedUser),
  headers: {"content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}
const newUser = {
  name: "Gabriel",
  avatar: "http://lorempixel.com.br/largura/altura",
  city: "Salvador"
}

const updatedUser = 
{
  name: "Jorge",
  avatar: "http://lorempixel.com.br/largura/altura",
  city: "Caetano"
}

addUser(newUser)
updateUser(updatedUser,1)
getUsers()   
getUser()