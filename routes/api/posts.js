const express = require("express");
const router = express.Router();

// @route  GET api/post/test
// @desc   Tests posts route
// @access PUBLIC
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
