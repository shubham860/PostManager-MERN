const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shubham:shubham1997@learning-timjr.mongodb.net/test',
{ useNewUrlParser: true ,useUnifiedTopology: true},
err => {
    if(!err){
        console.log("monogoDB connected")
    }else console.log("Error in connecting mongoDB", err)
})