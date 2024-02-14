import express from "express";

import * as messageController from "../controllers/messages.controller.js";

export const messagesRouter = express.Router();

messagesRouter.get("/", messageController.getMessages);
messagesRouter.post("/", messageController.postMessage);
