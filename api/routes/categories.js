const router = require("express").Router();

const CategoryModel = require("../models/CategoryModel");

//Create Category
router.post("/", async (req, res) => {
  const newCate = new CategoryModel(req.body);

  try {
    const saveCate = await newCate.save();
    res.status(200).json(saveCate);
  } catch (e) {
    res.status(500).json(err);
  }
});

//get All Category

router.get("/", async (req, res) => {
  try {
    const cats = await CategoryModel.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
