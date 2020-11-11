const express = require("express");
// templating language that lets you generate HTML markup with plain JavaScript.
const ejs = require("ejs");
const mutler = require("multer");
const path = require("path");
const multer = require("multer");

const app = express();
// process.env.PORT is for geroku hosting
const port = process.env.PORT || 3000;

//? Multer setting

var storage = mutler.diskStorage({
  destination: function (req, file, callbackfn) {
    callbackfn(null, "./public/myupload");
  },
  filename: function (req, file, callbackfn) {
    callbackfn(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
}).single("profilepic");

//? Setup For ejs
app.set("view engine", "ejs");

//Static folders
app.use(express.static("./public"));

//? Routs

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      res.render("index", {
        message: error,
      });
    } else {
      res.render("index", {
        message: "Sucessfully uploaded",
        filename: `myupload/${req.file.filename}`,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}...`);
});
