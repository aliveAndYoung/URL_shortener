const express = require("express");
const { add_url , redirect } = require("../controllers/api");
const router = express.Router();
router.route("/myApp").post(add_url);
router.route("/myApp/:shortcode").get(redirect);
module.exports = router;
