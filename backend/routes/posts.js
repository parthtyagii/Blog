const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//Create Post
router.post('/:id', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch (e) {
        res.status(500).json(e);
    }
})


//Update Post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });

                return res.status(200).json(updatedPost);
            }
            catch (e) {
                return res.status(500).json(e);
            }

        }
        else {
            return res.status(500).json("You can only update your post.");
        }
    }
    catch (e) {
        return res.status(500).json(e);
    }
})


//Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {

            try {
                await post.delete();
                return res.status(200).json("Post has been deleted...");
            }
            catch (e) {
                return res.status(500).json(e);
            }

        }
        else {
            return res.status(500).json("You can only delete your post.");
        }
    }
    catch (e) {
        return res.status(500).json(e);
    }
})


//Get Post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (e) {
        res.status(500).json(e);
    }
})

//All posts
router.get('/', async (req, res) => {
    try {
        const username = req.query.user;
        const catName = req.query.cat;
        try {
            let posts;
            if (username) {
                posts = await Post.find({ username });
            }
            else if (catName) {
                posts = await Post.find({ categories: { $in: [catName] } });
            }
            else {
                posts = await Post.find({});
            }
            return res.status(200).json(posts);
        }
        catch (e) {
            res.status(500).json(e);
        }

    }
    catch (e) {
        return res.status(500).json(e);
    }
})




module.exports = router;