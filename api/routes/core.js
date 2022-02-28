const express = require("express");
const router = express.Router();

const { create, getAll, getOne, deleteBlog } = require("../controller/core");

router.post("/create", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.delete("/del/:id", deleteBlog);

module.exports = router;
