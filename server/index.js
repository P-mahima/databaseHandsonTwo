const express = require('express')
const Client = require('./db/connection')
const route = require('./routes/route')
const app = express()



app.use(express.json())


async function dbconnection(){
    try{
        await Client.connect();
        console.log("connected to Database");
    }
    catch(err){
        console.log("error", err);
    }
}
dbconnection()


app.use("/api", route)
app.get('/', (req, res) => res.send('employee data'))
app.listen(3004, () => console.log('Example app listening on port 3004'))