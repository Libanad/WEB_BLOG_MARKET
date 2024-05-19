const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const verifyToken = require('../verifyToken');

// CREATE a comment
router.post("/create",verifyToken, async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE a comment
router.put("/:id",verifyToken, async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE a comment
router.delete("/:id",verifyToken, async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment has been deleted");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET a specific comment
router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET all comments
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET comments by userId
router.get("/post/:postId", async (req, res) => {
    try {
        const comments = await Comment.find({ userId: req.params.userId });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
