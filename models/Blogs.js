const mongoose = require('mongoose');
const {Schema} =mongoose;
const BlogsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    shortDesc:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Blogs = mongoose.model('blogs',BlogsSchema);
Blogs.createIndexes();
module.exports = Blogs;