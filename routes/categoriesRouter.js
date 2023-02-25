const { json } = require("express");
const express = require("express");
const router = express.Router();
const services = require("../services/services");
const validatorHandler = require("../middlewares/validatorHandler");
const { schemaName, schemaId } = require("../schemas/schemas");

router.get("/", async (req, res, next) => {
  try {
    const data = await services.getCategories();
    res.status(200).json(data).end();
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(schemaId, "params"),
  async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await services.getCategoryById(id);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "category not found" }).end();
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/catName/:name",
  validatorHandler(schemaName, "params"),
  async (req, res, next) => {
    const name = req.params.name;
    try {
      const data = await services.getCategoryByName(name);
      if (data) {
        res.status(200).json(data).end();
      } else {
        res.status(404).json({ message: "category not found" }).end();
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
