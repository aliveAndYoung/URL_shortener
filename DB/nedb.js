const Datastore = require("nedb");
const path = require("path");

// initialize NeDB
const db = new Datastore({
    filename: path.join(__dirname, "./data.db"),
    autoload: true,
});

// Add a new item (original_url,  short_code)
const addItem = async (item) => {
    return new Promise((resolve, reject) => {
        db.insert(item, (err, newDoc) => {
            if (err) reject(err);
            else resolve(newDoc);
        });
    });
};

// Get all items
const getAllItems = async () => {
    return new Promise((resolve, reject) => {
        db.find({}, (err, docs) => {
            if (err) reject(err);
            else resolve(docs);
        });
    });
};

// Check if an item exists by ID
const findItemByShortCode = async (short_code) => {
    return new Promise((resolve, reject) => {
        db.findOne({ short_code }, (err, doc) => {
            if (err) reject(err);
            else resolve(doc); // Returns null if not found
        });
    });
};

module.exports = {
    addItem,
    getAllItems,
    findItemByShortCode,
};
