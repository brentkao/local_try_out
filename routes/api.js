const express = require('express');
const router = express.Router();

router.get('/get',(req,res)=>{ res.send("HI~ I'm API /api/get")});
router.post('/post',(req,res)=>{ res.send("HI~ I'm API /api/post")})

module.exports = router;
