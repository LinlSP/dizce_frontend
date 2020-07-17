const MongoClient = require("mongodb").MongoClient;

async function connectDB(uri) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = await client.connect();
  if (db !== undefined) {
    console.log("DB succesfully connected");
    return db;
  }

  return Promise.reject("Problem with DB connection");
}

module.exports = connectDB;
