const bcrypt = require("bcrypt");
const router = require("express").Router();
const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");
//Update User

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      //hash user update password
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//Get User

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Delete User

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);

      try {
        await PostModel.deleteMany({ username: user.username });
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (e) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

module.exports = router;
