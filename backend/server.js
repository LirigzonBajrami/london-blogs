const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// create express app
const app = express();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors());

// import blog router
const blogRouter = require("./routes/blog");

app.use("/api/blogs/", blogRouter);

// Db Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Success connected to MongoDb");
    // listen for request only if server is connected with db
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
