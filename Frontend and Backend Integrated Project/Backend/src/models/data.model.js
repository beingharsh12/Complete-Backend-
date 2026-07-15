const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name:String,
    caption:String
})

const dataModel = mongoose.Model('data', dataSchema)

module.exports = dataModel;