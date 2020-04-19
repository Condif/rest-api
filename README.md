## Shoe Api
Hämta, lägg till, ta bort och ändra vilka skor som ska finnas i API:et.

### Instruktioner för att köra:
1. npm i

2. node server.js
eller
nodemon server.js (live-uppdateras vid förändring)

3. CTRL+click http://localhost:3000
eller 
CTRL+click port du själv lagt till ( http://localhost:port )

### Repo-länk:
https://github.com/Condif/rest-api.git


### Uppfyllda krav

#### Krav för godkänt
1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs) 
2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest)
3. Datan som API:et hanterar sparas lokalt i serverfilen -
4. Git & GitHub har använts  
5. Projektmappen innehåller en README.md fil - (läs ovan för mer info) 
6. Uppgiften lämnas in i tid!

#### Krav för Väl godkänt
1. Alla punkter för godkänt är uppfyllda
2. All data skall vara sparad i en JSON-fil istället för i serverfilen -NEJ
3. Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort -NEJ
4. Ett simpelt klient-gränssnitt skall finnas för att anropa API:ets olika endpoints, samt visa upp resultatet vid GET anrop -NEJ
5. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt -JA
