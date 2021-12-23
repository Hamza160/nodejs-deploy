const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
      type:String,
      required:true,
    },
    description:{
      type:String,
      required:true,
    },
    image:{
      type:Object,
      default:null
    },
    posted_by:{
      type:Schema.Types.ObjectId,
      ref:'User'
    },
    categories:[{
      category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
      }
    }]

},{timestamps:true});

module.exports = mongoose.model('Post', PostSchema);