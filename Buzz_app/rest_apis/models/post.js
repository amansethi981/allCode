const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },
    cloudinary_id: {
      type:String,
      required:true
    },

    likes: [{ type: ObjectId, ref: "User" }],

    Comments: [{ text: String, postedBy: { type: ObjectId, ref: "User" } }],

    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);
module.exports = { PostModel };
