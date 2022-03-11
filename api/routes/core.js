const express = require("express");
const router = express.Router();
// const auth = require("../utils/auth");

const {
  create,
  getAll,
  getOne,
  deleteBlog,
  upload,
} = require("../controller/core");

router.post("/:id/create", upload.single("image"), create);
router.get("/", getAll);
router.get("/:id", getOne);
router.delete("/del/:id", deleteBlog);

module.exports = router;
