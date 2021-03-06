function getSpecificShoe() {
    //Skriver vi 1 här i så fetchar vi 1 genom url sedan
    const id = document.getElementById("shoeIdInput").value
    
    //Här fetchar vi shoes/ + id-numret som "användaren" skriver in
    fetch("http://localhost:3000/shoes/" + id).then((response) => {
        //Innan vi returnerar response objektet kan vi göra en koll för 404 och inte skicka med något för att kunna göra någt om user är undefined
        if(response.status === 404) {
            printSpecificShoe()
        } else {
            //Här måste vi parsa om bodyn till json eftersom den skickas som text från get.
            return response.json()
        }

        
        // Här hanterar vi datan och får tillbaka shoes
    }).then((shoes) => {
        //Svaret vi får tillbaka från fetchen skickas in i printSpecificShoe
        printSpecificShoe(shoes)
    })
}

//Funktion som tar in shoe och skriver ut den, är shoe undefined skriver den...
function printSpecificShoe(shoe) {
    let specificShoeContainer = document.getElementById("specificShoe")
    // Tömmer specificShoeContainer
    specificShoeContainer.innerHTML = ""

    // Om inte undefined gör detta
    if(shoe) {
         // Skapa html överskrift för varje egenskap och fyll innerTexten med texten i objekt med det namnet ex brand
         let shoeId = document.createElement("h4")
         shoeId.innerText = "Id: " + shoe.id
         
         let shoeBrand = document.createElement("h4")
         shoeBrand.innerText = "Brand: " + shoe.brand
 
         let shoeSize = document.createElement("h4")
         shoeSize.innerText = "Size: " + shoe.size
 
         let shoePrice = document.createElement("h4")
         shoePrice.innerText = "Price: " + shoe.price
 
         //Appenda alla element in shoes objektet till specificShoeContainer
         specificShoeContainer.appendChild(shoeBrand)
         specificShoeContainer.appendChild(shoeId)
         specificShoeContainer.appendChild(shoeSize)
         specificShoeContainer.appendChild(shoePrice)

    // Om undefined gör detta
    } else {
        // Gör error respons
        let errorResponse = document.createElement("h4")
        errorResponse.innerText = "Hittade ingen sko"

        //I specificShoeContainers lägger vi svaret från errorResponse (h4:an + innerTexten "hittade ingen sko")
        specificShoeContainer.appendChild(errorResponse) 
    }   
}