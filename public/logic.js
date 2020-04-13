fetch("http://localhost:3000/users").then((response) => {
   //skicka tillbaka parsad body
    return response.json()
}).then((users) => {
    console.log(users);
})