const express = require("express");
const router = express.Router();
router.route("/myApp").get((req, res) => {
    res.send("add");
});
module.exports = router;
