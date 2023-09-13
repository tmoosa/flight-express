require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const flight = require('./models/flight')
const mongoose = require('mongoose')



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
    console.log("We up!")
})

app.set("view engine", 'jsx')
const jsxViewEngine = require('jsx-view-engine')
const Flight = require('./models/flight')
app.engine("jsx", jsxViewEngine())

app.use(express.urlencoded({extended: false}))

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


//Index 
app.get("/flights", async (req, res) => {
    try {
    const foundflights = await flights.find({})
    res.render("Index", {flights: foundflights})
    } catch (error) {
    res.status(400).send(error)
    }
})


  //New 
app.get("/flights/new", (req, res) => {
res.render("New")
})

  //Create 
app.post("/flights", async (req, res) => {
    try {
    const createdflight = await flight.create(req.body)
    res.status(201).send(createdflight)
    } catch (error) {
    res.status(400).send(error)
    }
})


app.listen(PORT, () => {
    console.log(`I hear you: ${PORT}`);
});