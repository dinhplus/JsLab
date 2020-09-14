const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('database/db.json');
const db = low(adapters);

db.defaults({
        users: [],
        products: [],
        session: []
    })
    .write();
module.exports = db;