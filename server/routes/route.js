const express = require("express")
const route = express.Router();
const employee = require("../controller/controller")

route.post("/createUser", employee.addNewUser)
route.post("/createAllUser", employee.addAllNewUser)
route.get("/finduser", employee.findUser)
route.get("/findusersalary", employee.findSalary)
route.get("/finduserexp", employee.findUserExperience)
route.get("/findusergrndexp", employee.findUserGradExp)
route.put("/updateusersalary", employee.UpdateUser)
route.delete("/deletesingleuser", employee.DeleteSingleUser)
route.delete("/deleteuserall", employee.DeleteAllUser)



module.exports = route