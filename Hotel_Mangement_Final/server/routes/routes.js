const express = require('express')
const router = express.Router()
const registeration = require("../controllers/registration")
const login = require("../controllers/login")
const customerFeedback = require("../controllers/feedback")
const finduser = require("../controllers/findUserById")
const menu=require("../controllers/menu")
const rooms=require("../controllers/rooms")
const table = require("../controllers/table")
const staff = require("../controllers/staff")

//users
router.post("/login",login.loginUser)
router.post("/register",registeration.registerUser)
router.get("/find?:id",finduser.findUserById)

//feedback
router.post("/add-feedback",customerFeedback.feedback)
router.get("/get-feedback",customerFeedback.getFeedback)

//menu
router.get("/resto-menu",menu.getMenus)
router.post("/create-menu",menu.createMenu)
router.delete("/delete-menu?:id",menu.deleteMenu)

//rooms
router.get("/getRooms",rooms.getRooms)
router.post("/bookRooms",rooms.bookRoom)
router.get("/room?:id",rooms.findRoomById)

//tables
router.post("/add-table",table.bookTable)
router.get("/getTables",table.getAllTables)

//staff
router.post("/add-staff",staff.addStaff)
router.get("/getStaff",staff.getStaff)


module.exports = router