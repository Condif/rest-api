// Krav för godkänt:

// README.md fil. Den ska innehålla en titel,
//  beskrivning av projektet, vilka krav som är uppfyllda,
//  info om hur projektet byggs och körs samt en länk till GitHub repot.

// Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
// Samtliga endpoints skall kunna nås via en REST Client fil (.rest)
// Datan som API:et hanterar sparas lokalt i serverfilen
// Git & GitHub har använts
// Projektmappen innehåller en README.md fil - (läs ovan för mer info)
// Uppgiften lämnas in i tid!


const express = require('express')
const app = express()

const shoes = [
    {
        id: 1,
        brand: "Adidas",
        size: "41",
        price: 2300
    }, {
        id: 2,
        brand: "Nike",
        size: "40",
        price: 2200
    }, {
        id: 3,
        brand: "Reebok",
        size: "39",
        price: 2100
    }, {
        id: 4,
        brand: "Vans",
        size: "38",
        price: 2000
    }
]



//express.json används i varje request för att parsa
app.use(express.json())

//App tar in vad som ska hämtas via get-anrop.
app.use(express.static('public'))

// När förfrågan görs på /shoes(endpoint) svara med shoes som en json-string i callbackfunktion
app.get("/shoes", (req, res) => {
    res.json(shoes)
})

//Hämta user.id i /users/:userId om user.id finns i users/:userId
// i /shoes:shoeId är id också ett krav för att gå in i funktionen då den kollar om id = ett id som finns i listan shoes
app.get("/shoes/:shoeId", (req, res) => {
    const foundShoe = shoes.find((shoe) => {
        //Om ett index i shoe har samma nummer som det i förfrågan returneras true annars false
        if (shoe.id.toString() === req.params.shoeId) {
            return true
        } else {
            return false
        }
    })

    //Vad svaret blir beroende på vad find funktion hittar, hittar den ingen sko sätts rests status till 404 inget svar
    if (!foundShoe) {
        res.status(404).send()
    } else {
        console.log(foundShoe);
        
        //Skicka foundshoe till /shoes, foundShoe = sko-objektet som findmetoden hittar om det finns ett sko-id som stämmer överens med det som eftersöks
        res.send(foundShoe)
    } 
})

app.post('/shoes', (req, res) => {
    shoes.push(req.body)
    res.status(201).send()
})


// Ta bort en sko
app.delete('/shoes/:shoeId', (req, res) => {
    
    // Lägg in index som shoeId ligger på i variabel
    //  Använd == istället för === för att jämföra sträng och nummer
    const currentShoeId = shoes.findIndex(a => a.id == req.params.shoeId)  

    
    
    const foundShoe = shoes.find((shoe) => {
        //Om ett index i shoe har samma nummer som det i förfrågan returneras true annars false
        if (shoe.id.toString() === req.params.shoeId) {
            // Ta bort skon med samma id som shoeId med hjälp av currentShoeId som säger vilket index den ligger på
            shoes.splice(currentShoeId, 1)
            return true
        } else {
            return false
        }
    })

   //Vad svaret blir beroende på vad find funktion hittar, hittar den ingen sko sätts rests status till 404 inget svar
    if (!foundShoe) {
        res.status(400).json({ msg: `Shoe with id ${req.params.shoeId} could not be found in database`})
    } else {
        //Skicka foundshoe till /shoes, foundShoe = sko-objektet som findmetoden hittar om det finns ett sko-id som stämmer överens med det som eftersöks
        res.status(200).send()
        
    } 
})


// Byter ut hela objekt på vald idplats i restfil.
app.put('/update/:shoeId', (req, res) => {
    
    // HItta skon som man vill ändra
    const currentShoeId = shoes.findIndex(a => a.id == req.params.shoeId)  

    const foundShoe = shoes.find((shoe) => {
        //Om ett index shoe har samma nummer som ett i listan som finns på servern sätt foundShoe till true annars false
        if (shoe.id.toString() === req.params.shoeId) {
            // Ta bort skon med samma id som shoeId med hjälp av currentShoeId som säger vilket index den ligger på
            // Lägger till objektet som efterfrågats.
            shoes.splice(currentShoeId, 1, req.body)
            return true
        } else {
            return false
        }
    })

    //Vad svaret blir beroende på vad find funktion hittar, hittar den undefined (false) sätts rests status till 404 inget svar
    if (!foundShoe) {
        res.status(400).json({ msg: `Shoe with id ${req.params.shoeId} could not be found in database`})
    } else {
        //Skicka foundshoe till /shoes, foundShoe = listan med shoes som skickas om callback sätter foundShoe till true
        res.status(200).send()
        
    } 

})


//Lägg till ett hostnamn + en port
const hostname = 'localhost'

// porten är det du manuellt ställt in(Ex: terminal kommando $env:Port = 1234) annars är den 3000 (standard)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on   http://${hostname}:${port}`));