const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

mongoose.connect("mongodb://localhost:27017/SuranjanKart")
.then(()=>{
    console.log("Connection successful...");
})
.catch((error)=>{
    console.log(error)
})