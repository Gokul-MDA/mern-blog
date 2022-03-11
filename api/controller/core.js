const Blog = require("../model/blogSchema");
const User = require("../model/userSchema");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../src/assets/uploads");
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

exports.create = async (req, res) => {
  var user = await User.findById(req.params.id);
  var blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: user._id,
    image: req.file.filename,
  });
  await blog.save();
  var findUser = await User.findById({ _id: blog.author });
  findUser.blogs.push(blog);
  findUser.save();
  res.json(blog);
};

exports.getAll = async (req, res) => {
  var findAll = await Blog.find().populate("author");
  res.json(findAll);
};

exports.getOne = async (req, res) => {
  var findOne = await Blog.findById(req.params.id).populate("author");
  res.json(findOne);
};

exports.deleteBlog = async (req, res) => {
  var deleteBlog = await Blog.findByIdAndRemove(req.params.id).then((e) => {
    res.json({ message: "delete successfully" });
  });
};
