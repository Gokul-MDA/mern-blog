const express = require("express");
const router = express.Router();

const {
  viewUser,
  editUser,
  deleteUser,
  userBlog,
  upload,
} = require("../controller/profile");

router.get("/:id", viewUser);
router.delete("/del/:id", deleteUser);
router.patch("/edit/:id", editUser);
router.get("/:id/userBlog/", userBlog);

module.exports = router;
