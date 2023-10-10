const express = require("express")
const route = express.Router();
const employee = require("../controller/controller")

route.post("/createUser", employee.addNewUser)
route.post("/createAllUser", employee.addAllNewUser)
route.put("/updateusersalary", employee.UpdateUser)
route.get("/finduserexp", employee.findUserExperience)
route.get("/findusergrndexp", employee.findUserGradExp)
route.get("/finduser", employee.findUser)
route.get("/findusersalary", employee.findSalary)
route.delete("/deleteuserall", employee.DeleteAllUser)
route.delete("/deletesingleuser", employee.DeleteSingleUser)



module.exports = route