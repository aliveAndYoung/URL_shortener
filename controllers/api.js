const { isNotShortenedUrl } = require("../utils/is_shortened");
const { checkUrlExists } = require("../utils/url_exists");
const add_url = (req, res) => {
    const { url } = req.body;
    const isShortenedUrl = isNotShortenedUrl(url);
    const isNotDuplicate = !checkUrlExists(url).exists;

    if (isShortenedUrl && isNotDuplicate) {
        
    }
};
