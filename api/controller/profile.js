const Blog = require("../model/blogSchema");
const User = require("../model/userSchema");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../src/assets/profile");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.upload = multer({ storage: storage, fileFilter: fileFilter });

exports.viewUser = async (req, res) => {
  var viewUser = await User.findById(req.params.id);
  res.json(viewUser);
};

exports.editUser = async (req, res) => {
  var editUser = await User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        user_name: req.body.user_name,
        password: req.body.password,
        bio: req.body.bio,
        // photo: req.file.filename,
        linkedin: req.body.linkedin,
      },
    }
  );
  res.json(editUser);
};

exports.userBlog = async (req, res) => {
  var userBlog = await User.findById(req.params.id).populate("blogs");
  res.json(userBlog);
};

exports.deleteUser = async (req, res) => {
  var delUser = await User.findByIdAndRemove(req.params.id);
  res.json({ message: "Delete User Successfully" });
};
