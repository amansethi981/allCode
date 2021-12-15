const cloudinary = require("../utils/cloudinary");
const { PostModel } = require("../models/post");

const create = async (data) => {
  //   console.log("Line 5", data.file.path);
  //   console.log("line 6", data.body);
  // console.log("Line 7", data.user);
  try {
    //upload image to cloudinary
    const result = await cloudinary.uploader.upload(data.file.path);

    //create post
    let post = new PostModel({
      title: data.body.title,
      body: data.body.body,
      photo: result.secure_url,
      cloudinary_id: result.public_id,
    });
    return post;
  } catch (err) {
    console.log(err);
  }
};

const deletepost = async (data) => {
  try {
    let post = await PostModel.findByIdAndDelete(data.params.postId, data.body);
    console.log("line 28",post.cloudinary_id)
    //delete from cloudinary
    await cloudinary.uploader.destroy(post.cloudinary_id);
    return post;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { create, deletepost };
