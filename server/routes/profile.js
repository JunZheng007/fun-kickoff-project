const express = require("express");
const router = express.Router();
const {
  getProfile,
  getAllProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profile");

router.route("/").get(getAllProfile);

router.route("/:email").get(getProfile);

router.route("/").post(createProfile);

router.route("/:email").post(updateProfile);

module.exports = router;
