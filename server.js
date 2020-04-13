const express = require('express')
const app = express()

const users = [
    {
        name: "Victor",
        age: 28
    }, {
        name: "David",
        age: 30
    }
]

//express.json används i varje request för att parsa
app.use(express.json())

//App tar in vad som ska hämtas via get-anrop.
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

// When request is made on /users(the endpoint) respond with users as a json string in callback function
app.get("/users", (req, res) => {
    res.json(users)
})
// i /users:age är age också ett requirement för att gå in i funktionen då den kollar om age = en age som finns i listan users
app.get("/users:age", (req, res) => {
    const foundUser = users.find((user) => {
        //Om ett index users har samma nummer som ett i listan som finns på servern sätt foundUser till true annars false
        if (user.age.toString() === req.params.age) {
            return true
        } else {
            return false
        }
    })

    if (!foundUser) {
        res.status(404).send()
    } else {
        //Send foundUsers to /users foundUser = listan med users som skickas om callback sätter foundUser till true
        res.send(foundUser)
    } 
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));