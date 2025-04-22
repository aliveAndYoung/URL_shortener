const generateUniqueShortCode = require("../utils/generateCode");
const { isNotShortenedUrl } = require("../utils/is_shortened");
const { checkUrlExists } = require("../utils/url_exists");
const DB = require("../DB/nedb");
const add_url = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is missing' });
    }
    
    if (!req.body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const { url } = req.body;
    const isShortenedUrl = isNotShortenedUrl(url);
    const isNotDuplicate = !checkUrlExists(url).exists;

    if (isShortenedUrl && isNotDuplicate) {
        const shortCode = await generateUniqueShortCode(url);
        const item = { original_url: url, short_code: shortCode };
        try {
            await DB.addItem(item);
            res.json({ original_url: url, short_code: shortCode });
        } catch (error) {
            console.error("Error adding item:", error);
            res.status(500).json({ error: "Error adding item" });
        }
    }
};

module.exports = { add_url };
