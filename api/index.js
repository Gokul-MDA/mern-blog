const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//Routes Config
const authRoutes = require("./routes/auth");
const coreRoutes = require("./routes/core");
const profileRoutes = require("./routes/profile");
// const { db } = require("./models/user");
app.use("/api", authRoutes);
app.use("/core", coreRoutes);
app.use("/profile", profileRoutes);
app.use("../../src/assets/uploads", express.static("../../src/assets/uploads"));
app.use("../../src/assets/profile", express.static("../../src/assets/profile"));

//Server Config
app.listen(5000, () => {
  console.log("server connected on port 5000");
});

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://gokul:dharmar786@cluster0.hwdnd.mongodb.net/mern-blog?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Db Connected Successfully");
  }
);
