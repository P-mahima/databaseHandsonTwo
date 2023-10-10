const express = require("express")
const route = express.Router();
const employee = require("../controller/controller")

route.post("/createUser", employee.addNewUser)
route.post("/createAllUser", employee.addAllNewUser)
route.get("/finduser", employee.findUser)
route.get("/findsalary", employee.findSalary)
route.get("/findexp", employee.findUserExperience)
route.get("/findge", employee.findUserGradExp)
route.put("/updatesal", employee.UpdateUser)
route.delete("/delsing", employee.DeleteSingleUser)
route.delete("/delall", employee.DeleteAllUser)



module.exports = route