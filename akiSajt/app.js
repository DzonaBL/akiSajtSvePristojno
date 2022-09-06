const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "slike");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("slika")
);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "style")));
app.use(express.static(path.join(__dirname, "assets")));

app.use(
  session({
    secret: "Aki admin",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/slike", express.static(path.join(__dirname, "slike")));

const sequelize = require("./utils/database");
const appRoutes = require("./routes/routes");

app.use(appRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log(`Server runs at port: 3000`);
});
