import express from "express";
import * as pageController from "../controllers/pageController.js";

const rooter = express.Router();

rooter.route("/").get(pageController.getIndexPage);
rooter.route("/about").get(pageController.getAboutPage);
rooter.route("/services").get(pageController.getServicesPage);
rooter.route("/gallery").get(pageController.getGalleryPage);
rooter.route("/projects").get(pageController.getProjectsPage);
rooter.route("/blog").get(pageController.getBlogPage);
rooter.route("/contact").get(pageController.getContactPage);

export default rooter;