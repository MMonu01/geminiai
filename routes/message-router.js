const express = require("express");

const { messageModel } = require("../model/message-model.js");

const messageRouter = express.Router();

messageRouter.post("/getmessages", async (req, res, next) => {
  try {
    const { room_id } = req.body;
    const messages = await messageModel.find({ room_id });
    res.send(messages);
  } catch (err) {
    next(err);
  }
});

module.exports = { messageRouter };
