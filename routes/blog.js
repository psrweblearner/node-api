const express = require('express');
const router = express.Router();
const Blogs = require('../models/Blogs');
const { body, validationResult } = require('express-validator');
// http://localhost:5000/api/blog/
router.post('/',[
    body('title','Enter a valid title').isLength({min:5}),
    body('slug','Enter a valid slug').isLength({ min: 5 }),
    body('shortDesc','Enter a valid title').isLength({min:5}),
    body('description','Enter a valid slug').isLength({ min: 5 }),
    body('tags','Enter a valid slug').isLength({ min: 5 }),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Blogs.create({
        title: req.body.title,
        slug: req.body.slug,
        shortDesc:req.body.shortDesc,
        description:req.body.description,
        tags:req.body.tags
      }).then(blog => res.json(blog)).catch(err =>{console.log(err)
        res.json({error:"please enter a unique slug",message:err.message})});
})
module.exports = router