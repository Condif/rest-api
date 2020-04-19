// Vi kan uppnå samma sak som request.rest filen gör genom att använda fetch

// fetch("http://localhost:3000/shoes").then((response) => {
//     //Här måste vi parsa om bodyn till json eftersom den skickas som text från get.
//     return response.json()
//     // Här hanterar vi datan och får tillbaka shoes
// }).then((shoes) => {
//     console.log(shoes);

//     //Svaret vi får tillbaka från fetchen skickas in i printAllShoes
//     printAllShoes(shoes)
// })

// Print all shoes tar in alla skor och hanterar hur datan ska användas
// function printAllShoes(shoes) {
//     //Plockar ut rootdiv
//     let allShoesContainer = document.getElementById("allShoes")

//     //for loop for shoes
//     shoes.forEach(shoe => {
//         // Skapa html överskrift för varje egenskap och fyll innerTexten med texten i objekt med det namnet ex brand
//         let shoeId = document.createElement("h4")
//         shoeId.innerText = "Id: " + shoe.id
        
//         let shoeBrand = document.createElement("h4")
//         shoeBrand.innerText = "Brand: " + shoe.brand

//         let shoeSize = document.createElement("h4")
//         shoeSize.innerText = "Size: " + shoe.size

//         let shoePrice = document.createElement("h4")
//         shoePrice.innerText = "Price: " + shoe.price

//         //Adderar alla h4:or till shoeDiv

//         // Skapa div för varje shoe element (varje shoe object)
//         let shoeDiv = document.createElement("div")

//         // Använd appendChild för att få med all innerText när du adderar h4:or
//         shoeDiv.appendChild(shoeId)
//         shoeDiv.appendChild(shoeBrand)
//         shoeDiv.appendChild(shoeSize)
//         shoeDiv.appendChild(shoePrice)

//         //Appenda shoeDiv till allShoesContainer med dess children. 
//         allShoesContainer.appendChild(shoeDiv)
//     })
// }

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
        console.log(shoes);

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