import express from "express";
import * as photoController from "../controllers/photoController.js";

const rooter = express.Router();

rooter.route("/").post(photoController.createPhoto);

export default rooter;