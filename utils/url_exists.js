const { getAllItems } = require("../DB/nedb");

const checkUrlExists = async (url) => {
    try {
        const allItems = await getAllItems();

        const existingUrl = allItems.find((item) => item.original_url === url);

        return {
            exists: !!existingUrl,
            shortcode: existingUrl ? existingUrl.short_code : null,
        };
    } catch (error) {
        console.error("Error checking URL existence:", error);
        return {
            exists: false,
            shortcode: null,
        };
    }
};

module.exports = {
    checkUrlExists,
};
