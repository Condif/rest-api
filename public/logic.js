// Vi kan uppnå samma sak som request.rest filen gör genom att använda fetch

fetch("http://localhost:3000/shoes").then((response) => {
   //Här måste vi parsa om bodyn till json eftersom den skickas som text från get.
    return response.json()
    // Här hanterar vi datan och får tillbaka shoes
}).then((shoes) => {
    console.log(shoes);

    //Svaret vi får tillbaka från fetchen skickas in i printAllShoes
    printAllShoes(shoes)
})

// Print all shoes tar in alla skor och hanterar hur datan ska användas
function printAllShoes(shoes) {
    //Plockar ut rootdiv
    let allShoesContainer = document.getElementById("allShoes")

    //for loop for shoes
    shoes.forEach(shoe => {
        // Skapa html överskrift för varje egenskap och fyll innerTexten med texten i objekt med det namnet ex brand
        let shoeBrand = document.createElement("h4")
        shoeBrand.innerText = shoe.brand

        let shoeColor = document.createElement("h4")
        shoeColor.innerText = shoe.color

        let shoeSize = document.createElement("h4")
        shoeSize.innerText = shoe.size
        
        let shoePrice = document.createElement("h4")
        shoePrice.innerText = shoe.price

        //Adderar alla h4:or till shoeDiv

        // Skapa div för varje shoe element (varje shoe object)
        let shoeDiv = document.createElement("div")

        // Använd appendChild för att få med all innerText när du adderar h4:or
        shoeDiv.appendChild(shoeBrand)
        shoeDiv.appendChild(shoeColor)
        shoeDiv.appendChild(shoeSize)
        shoeDiv.appendChild(shoePrice)

        //Appenda shoeDiv till allShoesContainer med dess children. 
        allShoesContainer.appendChild(shoeDiv)
    })
}