const router = require("express").Router();

const PostModel = require("../models/PostModel");

//Create Post

router.post("/", async (req, res) => {
  const newPost = new PostModel(req.body);
  //   console.log(newPost);
  try {
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Post
router.put("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    console.log(post);

    if (post.username === req.body.username) {
      try {
        const updatePost = await PostModel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (e) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Post

router.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Post

router.delete("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post.username === req.body.username) {
      await post.delete();
      res.status(200).json("Post has been deleted...");
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (e) {
    res.status(500).json(err);
  }
});

//Get All Post

router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await PostModel.find({ username });
    } else if (catName) {
      posts = await PostModel.find({ categories: { $in: [catName] } });
    } else {
      posts = await PostModel.find();
    }

    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
