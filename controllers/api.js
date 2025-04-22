const generateUniqueShortCode = require("../utils/generateCode");
const { isNotShortenedUrl } = require("../utils/is_shortened");
const { checkUrlExists } = require("../utils/url_exists");
const DB = require("../DB/nedb");
const add_url = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "Request body is missing" });
    }

    if (!req.body.url) {
        return res.status(400).json({ error: "URL is required" });
    }
    const { url } = req.body;
    const isNotShortened = isNotShortenedUrl(url);
    const isNotDuplicate = await checkUrlExists(url);

console.log(isNotDuplicate)

    if (isNotShortened && !isNotDuplicate.exists) {
        const shortCode = await generateUniqueShortCode(url);
        const item = { original_url: url, short_code: shortCode };
        try {
            await DB.addItem(item);
            res.json({ original_url: url, short_code: shortCode });
        } catch (error) {
            console.error("Error adding item:", error);
            res.status(500).json({ error: "Error adding item" });
        }
    } else if (isNotDuplicate.exists && isNotDuplicate.shortcode) {
        res.json({ original_url: url, short_code: isNotDuplicate.shortcode });
    } else {
        res.status(400).json({ error: "URL is already shortened  " });
    }
};

const redirect = async (req, res) => {
    const { shortcode } = req.params;
    try {
        const item = await DB.findItemByShortCode(shortcode);
        if (item) {
            res.redirect(item.original_url);
        } else {
            res.status(404).json({ error: "Short code not found" });
        }
    } catch (error) {
        console.error("Error finding item:", error);
        res.status(500).json({ error: "Error finding item" });
    }
};

module.exports = { add_url, redirect };
