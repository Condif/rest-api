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

app.get("/users: age", (req, res) => {
    const foundUser = users.find((user) => {
        if (user.age.toString() === req.params.age) {
            return true
        } else {
            return false
        }
    })

    if (!foundUser) {
        res.status(404).send()
    } else {
        res.send(foundUser)
    }
})

app.listen(3000, 'localhost', () => {
    console.log('Server is up and running on http://localhost:3000');
})