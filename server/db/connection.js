const {MongoClient} = require('mongodb')

const uri = "mongodb+srv://pawarmahima23:Pass123@cluster0.qlc8m4p.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

const Client = new MongoClient(uri, {useNewUrlParser: true})

module.exports = Client