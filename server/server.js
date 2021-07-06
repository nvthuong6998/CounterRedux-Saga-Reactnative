const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Thương xạo lồn VN"});
});

app.get('/movies',(req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
        console.log(data);
        res.end(data)
    })
})

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});