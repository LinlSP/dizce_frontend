const express = require("express");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

const config = require("./config");
const db = require("./db");
const routes = require("./network/routes");

const app = express();
const { dbUri, port, host } = config;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(router);
app.use("/api", router);

app.use(express.static("public"));
app.get("/*", function (req, res) {
  res.sendFile("public/index.html", { root: __dirname });
});

(async () => {
  try {
    const cluster = await db(dbUri);
    app.locals.cluster = cluster;
    await app.listen(port);
    console.log(`App listening on ${host}:${port}`);
  } catch (error) {
    console.log(error);
  }
})();
