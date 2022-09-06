const express = require("express");
const isAuth = require("../middleware/isAuth");

const controller = require("../controllers/controllers");

const router = express.Router();

router.get("/admin/objava", isAuth, (req, res) => {
  res.render("upload");
});

router.get("/admin/login", (req, res) => {
  res.render("login");
});

router.post("/admin/login", controller.postLogin);

router.post("/admin/objava", isAuth, controller.postUpload);

router.get("/", controller.getIndex);

module.exports = router;
