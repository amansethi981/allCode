const post = require("../service/post");

const create = async (req, res) => {
  try {
    const response = await post.create(req);
    res.status(200).json({
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
};

const deletepost = async (req, res) => {
  try {
    const data = { body: req.body, params: req.params };
    const response = await post.deletepost(data);
    res.status(200).json({
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { create, deletepost };
