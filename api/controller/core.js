const { findByIdAndRemove } = require("../model/blogSchema");
const Blog = require("../model/blogSchema");

exports.create = (req, res) => {
  var blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });
  blog.save();
  res.json(blog);
};

exports.getAll = async (req, res) => {
  var findAll = await Blog.find();
  res.json(findAll);
};

exports.getOne = async (req, res) => {
  var findOne = await Blog.findById(req.params.id);
  res.json(findOne);
};

exports.deleteBlog = async (req, res) => {
  var deleteBlog = await Blog.findByIdAndRemove(req.params.id).then((e) => {
    res.json({ message: "delete successfully" });
  });
};
