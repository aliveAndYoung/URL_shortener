const express = require("express");
const { add_url } = require("../controllers/api");
const router = express.Router();
router.route("/myApp").post(add_url);
module.exports = router;
