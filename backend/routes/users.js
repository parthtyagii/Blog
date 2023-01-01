const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Update
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedUser);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    else {
        res.status(401).json("You can update only your account");
    }
})


//Delete
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {

        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json('User cannot be found!');
            }

            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                return res.status(200).json("User has been deleted!");
            }
            catch (e) {
                res.status(500).json(e);
            }
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    else {
        res.status(401).json("You can delete only your account");
    }
})


//Get
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }
    catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router;