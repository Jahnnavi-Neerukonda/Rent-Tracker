const express = require("express");
const c=require("../controllers/rentcontroller");
const router = express.Router();
const mongoose = require("mongoose");
const Rent = require("../models/rents");

router.get("",c.getrents);

router.get("/:id", c.getrent)

router.post("", c.postrents);

router.put("/:id", c.putrents);

router.delete("/:id", c.deleterents);

module.exports = router;
