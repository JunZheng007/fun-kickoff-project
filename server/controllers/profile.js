const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

exports.createProfile = asyncHandler(async (req, res, next) => {
  const profile = new Profile(req.body.profile);

  if (!profile.email) {
    res.status(400);
    throw new Error("miss request element: email");
  }
  if (!profile.firstName) {
    res.status(400);
    throw new Error("miss request element: first name");
  }
  if (!profile.lastName) {
    res.status(400);
    throw new Error("miss request element: last name");
  }

  const emailExists = await Profile.findOne({ email: profile.email });
  if (emailExists) {
    res.status(400);
    throw new Error("A profile with that email already exists");
  }

  await Profile.create(profile);
  res.status(200).json("create profile success");
});

exports.getProfile = asyncHandler(async (req, res, next) => {
  const key = req.params.email;
  const profile = await Profile.findOne({
    email: { $regex: key, $options: "i" },
  });

  if (!profile) {
    res.status(404);
    throw new Error("No profile found");
  }

  res.status(200).json({ profile: profile });
});

exports.getAllProfile = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find({});

  res.status(200).json({ profiles: profiles });
});

exports.updateProfile = asyncHandler(async (req, res, next) => {
  const newProfile = req.body.profile;

  const profile = await Profile.findOneAndReplace(
    {
      email: { $regex: req.params.email, $options: "i" },
    },
    newProfile,
    { new: true }
  );

  if (!profile) {
    res.status(404);
    throw new Error("No profile found");
  }

  res.status(200).json("update profile success");
});
