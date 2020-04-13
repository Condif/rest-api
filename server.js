const express = require('express')
const app = express()

const shoes = [
    {
        brand: "Adidas",
        color: "White",
        size: "41",
        Price: 2300
    }, {
        brand: "Nike",
        color: "Blue",
        size: "40",
        Price: 2200
    }, {
        brand: "Reebok",
        color: "Red",
        size: "39",
        Price: 2100
    }, {
        brand: "Vans",
        color: "Green",
        size: "38",
        Price: 2000
    }
]

//express.json används i varje request för att parsa
app.use(express.json())

//App tar in vad som ska hämtas via get-anrop.
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

// When request is made on /shoes(the endpoint) respond with shoes as a json string in callback function
app.get("/shoes", (req, res) => {
    res.json(shoes)
})
// i /shoes:price är price också ett requirement för att gå in i funktionen då den kollar om price = en price som finns i listan shoes
app.get("/shoes:price", (req, res) => {
    const foundShoe = shoes.find((shoe) => {
        //Om ett index shoes har samma nummer som ett i listan som finns på servern sätt foundShoe till true annars false
        if (user.price.toString() === req.params.price) {
            return true
        } else {
            return false
        }
    })

    if (!foundShoe) {
        res.status(404).send()
    } else {
        //Send foundshoes to /shoes foundShoe = listan med shoes som skickas om callback sätter foundShoe till true
        res.send(foundShoe)
    } 
})

const hostname = 'localhost'
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on   http://${hostname}:${port}`));