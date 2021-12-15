const { Router } = require("express");
const { create,deletepost } = require("../controllers/post");
const upload=require("../utils/multer")

const router = Router();

router.post("/createpost",upload.single("image"), create);
router.delete("/deletepost/:postId",deletepost)
module.exports = router;
