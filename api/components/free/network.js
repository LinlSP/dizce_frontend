const router = require("express").Router();
const response = require("../../network/response");

router.get("/", (req, res) => {
  const { cluster } = req.app.locals;
  const collection = cluster.db("Free").collection("Websites");
  const maxSitesPerPage = 10;
  const { page, filters, language } = req.query;
  if ((!page, !filters, !language)) {
    return response.error(req, res, "page, filter or language missing", 400);
  }
  const match =
    filters === ""
      ? { language: language }
      : { tags: { $in: filters.split(" ") }, language: language };

  collection
    .find(match)
    .project({
      _id: 0,
      name: 1,
      phrase: 1,
      logoUrl: 1,
    })
    .limit(maxSitesPerPage)
    .skip((page - 1) * maxSitesPerPage)
    .toArray()
    .then((results) => {
      if (results.length === 0) {
        return response.success(
          req,
          res,
          "There are no sites for the moment",
          200
        );
      }
      return response.success(req, res, results, 200);
    })
    .catch((error) => {
      console.log(error);
      return response.error(req, res);
    });
});

router.get("/detail", (req, res) => {
  const { cluster } = req.app.locals;
  const collection = cluster.db("Free").collection("Websites");
  const { name } = req.query;

  collection
    .findOne(
      { name: name },
      { project: { _id: 0, description: 1, url: 1, logoUrl: 1 } }
    )
    .then((document) => {
      if (document === null) {
        throw new Error();
      }
      return response.success(req, res, document, 200);
    })
    .catch((error) => {
      console.log(error);
      return response.error(req, res);
    });
});
module.exports = router;
