const router = require("express").Router();
const userController = require("../controllers/userController");
 
// Login User
router.post("/login", userController.loginUser);
 
// Create User
router.post("/create", userController.createUser);
 
 
module.exports = router;