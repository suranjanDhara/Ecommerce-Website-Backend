const mongoose = require('mongoose')

const stockItemSchema = new mongoose.Schema({
    itemImage : {
        type : String,
        required : true
    },
    itemName : {
        type : String,
        required : true,
        unique : true
    },
    itemDescription : {
        type : String,
        required : true
    },
    itemRating : {
        type : Number,
        default : 0
    },
    itemPrice : {
        type : Number,
        required : true
    },
    itemDealSavePercentage : {
        type : Number,
        default : 0
    },
    itemTotalNoOfRatings : {
        type : Number,
        default : 0
    },
    itemStock : {
        type : Number,
        required : true
    }

})

const stockItems = new mongoose.model("FashionStock", stockItemSchema)

module.exports = stockItems