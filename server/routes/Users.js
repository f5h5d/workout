const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { Users } = require("../models");

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await Users.findOne({ where: { email: email } });

  if (user) { res.json("Email Already In Use!"); return}

  bcrypt.hash(password, 10).then((hash) => {
    Users.create({ name: name, email: email, password: hash})
    res.json("Success!")
  })
})

module.exports = router;