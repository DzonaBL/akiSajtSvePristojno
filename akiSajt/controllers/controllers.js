const path = require("path");

const Slika = require("../models/Slika");

exports.postLogin = (req, res, next) => {
  console.log(req.body.password);
  if (req.body.password === "admin") {
    req.session.isLoggedIn = true;
    res.redirect("/admin/objava");
  } else {
    res.redirect("/admin/login");
  }
};

exports.postUpload = (req, res, next) => {
  const link = req.body.link;
  const slika = req.file.path;

  Slika.create({ link, slika })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getIndex = (req, res, next) => {
  Slika.findAll()
    .then((slike) => {
      res.render("index", {
        data: slike,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
