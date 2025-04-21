const Datastore = require('nedb');
const path = require('path');

// initialize NeDB
const db = new Datastore({
  filename: path.join(__dirname, './data.db'),
  autoload: true,
});

// Add a new item (original_url, id, short_code)
const addItem = (item) => {
  return new Promise((resolve, reject) => {
    db.insert(item, (err, newDoc) => {
      if (err) reject(err);
      else resolve(newDoc);
    });
  });
};

// Get all items
const getAllItems = () => {
  return new Promise((resolve, reject) => {
    db.find({}, (err, docs) => {
      if (err) reject(err);
      else resolve(docs);
    });
  });
};

// Check if an item exists by ID
const findItemById = (id) => {
  return new Promise((resolve, reject) => {
    db.findOne({ id }, (err, doc) => {
      if (err) reject(err);
      else resolve(doc); // Returns null if not found
    });
  });
};

module.exports = {
  addItem,
  getAllItems,
  findItemById,
};