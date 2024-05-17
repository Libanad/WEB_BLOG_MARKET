const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Post=require('../models/Post')
const Comment=require('../models/Comment')

// CREATE
router.post("/write",async(res,req)=>{
    try{
        const newPost=new Post(req.body)
        const savedPost= await newPost.save()
        res.status(200).json(savedPost)

    }
    catch(err){
        res.status(200).json(err)

    }
})

// Update
router.put("/:id", async (req, res) => {
    try {
        
        const updatedUser = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser); // corrected variable name here
    
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete

router.delete("/:id", async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        
        res.status(200).json("Post has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get upost details
router.get("/:id", async (req, res) => {
    try {
         const user=await User.findById(req.params.id)
         const {password,...info}=user._doc
         res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
