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

//gör ingenting just nu?
// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// When request is made on /shoes(the endpoint) respond with shoes as a json string in callback function
app.get("/shoes", (req, res) => {
    res.json(shoes)
})

//Hämta user.id i /users/:userId om user.id finns i users/:userId
// i /shoes:shoeId är id också ett requirement för att gå in i funktionen då den kollar om id = en id som finns i listan shoes
app.get("/shoes/:shoeId", (req, res) => {
    const foundShoe = shoes.find((shoe) => {
        //Om ett index shoe har samma nummer som ett i listan som finns på servern sätt foundShoe till true annars false
        if (shoe.id.toString() === req.params.shoeId) {
            return true
        } else {
            return false
        }
    })

    //Vad svaret blir beroende på vad find funktion hittar, hittar den undefined (false) sätts rests status till 404 inget svar
    if (!foundShoe) {
        res.status(404).send()
    } else {
        //Send foundshoes to /shoes foundShoe = listan med shoes som skickas om callback sätter foundShoe till true
        res.send(foundShoe)
    } 
})

app.post('/shoes', (req, res) => {
    shoes.push(req.body)
    res.status(201).send()
})

//Lägg till ett hostnamn + en port
const hostname = 'localhost'

// porten är det du manuellt ställt in(fungerar inte just nu) annars är den 3000 (standard)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on   http://${hostname}:${port}`));