const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes Config
const authRoutes = require("./routes/auth");
// const { db } = require("./models/user");
app.use("/api", authRoutes);

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
