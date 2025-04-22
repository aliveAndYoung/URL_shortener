const { findItemByShortCode } = require("../DB/nedb");
async function generateUniqueShortCode(url) {
    const { nanoid } = await import("nanoid");
    let shortCode;
    let attempts = 0;
    const maxAttempts = 5;

    do {
        // Generate a new code
        shortCode = nanoid(6);

        // Check if it exists in database
        const exists = await findItemByShortCode(shortCode);
        attempts++;

        if (!exists) {
            return shortCode;
        }
    } while (attempts < maxAttempts);

    throw new Error("Failed to generate unique short code");
}

module.exports = generateUniqueShortCode;
