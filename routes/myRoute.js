const express = require("express");
const { add_url, redirect, getAll_urls } = require("../controllers/api");

const router = express.Router();

router.route("/myApp/api").post(add_url).get(getAll_urls);
router.route("/myApp/api/:shortcode").get(redirect);
router.route("/myapp").get((req, res) => {
    res.sendFile("F:/web/URL_shortener/public/frontend.html");
});
module.exports = router;
