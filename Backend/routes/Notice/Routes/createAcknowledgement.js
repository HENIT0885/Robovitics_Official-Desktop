const express = require("express");
const NoticeModel = require("../../../models/Notice/NoticeModel");
const router = express.Router();

router.post('/', async (req, res) => {
    const { noticeID, userBID } = req.body;
    console.log(noticeID);
    console.log(userBID);
    const notice = await NoticeModel.findById(noticeID);
    notice.addAcknowledgement(userBID);
    await notice.save();
    res.send("Added");
    
})

module.exports = router;