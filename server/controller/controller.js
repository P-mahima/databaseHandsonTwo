const Client = require("../db/connection")
const db = Client.db("Human_Resource");
const collection = db.collection("employee")

function addNewUser(req, res){
    try{
        const userData = req.body;
        collection.insertOne(userData)
        res.status(200).send("Data Inserted")
    }
    catch(e){
        res.status(500).send("error Occers", e)
    }
}
function addAllNewUser(req, res){
    try{
        const userData = req.body;
        collection.insertMany(userData)
        res.status(200).send("Data Inserted")
    }
    catch(e){
        res.status(500).send("error Occers", e)
    }
}

async function findUser(req, res){
    try{
        const Result = await collection.find().toArray()
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send("error Occers", e)
    }
}

async function findSalary (req, res){
    try{

        const query = {"salary": {$gt: "30000"}}
        const Result = await collection.find(query).toArray()
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send("error Occers", e);
    }
}
async function findUserExperience (req, res){
    try{

        const query = {"overallExp": {$gte: "2"}}
        const Result = await collection.find(query).toArray()
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send("error Occers", e);
    }
}


async function UpdateUser(req, res){
    try{
        const query = {"salary": "70000"}
        const Result = await collection.updateOne(query, {$set: {"salary":"65000"}})
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send("error Occers",e)
    }
}



async function findUserGradExp (req, res){
    try{

        const query = {"yearGrad": {$gt: "2015"},}
        const query2 = {"overallExp": {$gt: "1"},}
        const Result = await collection.find(query,query2).toArray()
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send("error Occers", e);
    }
}


async function DeleteAllUser(req, res){
    try{
        const query = {"lastCompany": "Y"}
        const Result = await collection.deleteMany(query)
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send("error Occers",e)
    }
}

async function DeleteSingleUser(req, res){
    try{
        const query = {"lastCompany": "Y"}
        const Result = await collection.deleteOne(query)
        console.log(Result);
        res.status(200).send({user: Result})
    }
    catch(e){
        res.status(500).send("error Occers",e)
    }
}
module.exports = {addNewUser,addAllNewUser,findSalary,findUser,findUserGradExp,findUserExperience,UpdateUser,DeleteSingleUser,DeleteAllUser
}