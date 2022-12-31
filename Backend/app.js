const express = require('express')
const stockItems = require("./src/models/fashionSstockItems")
require('./src/db/conn')
const app = express()
app.use(express.json())

const port = process.env.PORT || 5500

// Handeling post request here
app.post("/suranjankart/api/items/fashion/stock", async (req, res) => {
    try {
        const stockItemCreate = new stockItems(req.body)
        const saveStockItems = await stockItemCreate.save()
        res.status(201).send(saveStockItems)

    } catch (error) {
        res.status(400).send(error)
    }
})


//Handeling specific get request here
app.get("/suranjankart/api/items/fashion/stock", async (req, res, next) => {
    try {
        const {itemName, itemRating, itemPrice, itemTotalNoOfRatings} = req.query
        const queryObj = {}
        if(itemName){
            queryObj.itemName = {$regex : itemName, $options : "i"}
        }
        if(itemRating){
            queryObj.itemRating = itemRating
        }
        if(itemPrice){
            queryObj.itemPrice = itemPrice
        }
        if(itemTotalNoOfRatings){
            queryObj.itemTotalNoOfRatings = itemTotalNoOfRatings
        }

        const filteredItems = await stockItems.find(req.query)
        console.log(filteredItems)
        res.status(200).send(filteredItems)

    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})