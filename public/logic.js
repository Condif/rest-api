fetch("http://localhost:3000/shoes").then((response) => {
   //skicka tillbaka parsad body
    return response.json()
}).then((shoes) => {
    console.log(shoes);
})