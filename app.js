const express = require('express');
require('dotenv/config');

const myRoute = require('./routes/myRoute.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/routes', myRoute)

// app.get('/file', (req, res) => {
//     res.sendFile(path.join(__dirname, '2.jpg'));
// });

// const path = require('path');
// app.use('/static', express.static(path.join(__dirname, 'static')));

// app.use(express.json());
// app.post('/', (req, res) => {
//     const{name}= req.body;
//     res.send(`Welcome ${name}`);
// });

// app.get('/', (req, res) => {
//     res.status(200);
//     res.send("Welcome to the server, lets begin our journey!");
// });

// app.get('/hello', (req, res) => {
//     res.set('Content-Type', 'text/html')
//     res.status(200).send('<h1>Great, this is the first level!</h1>')
// });



app.listen(PORT, (error) => {
    if(!error)
        console.log("Server is successfully running, and app is listening on PORT " + PORT);
    else
        console.log("Error occured, server can't start")
});