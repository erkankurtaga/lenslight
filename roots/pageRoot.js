import express from "express";
import * as pageController from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/services").get(pageController.getServicesPage);
router.route("/projects").get(pageController.getProjectsPage);
router.route("/blog").get(pageController.getBlogPage);
router.route("/contact").get(pageController.getContactPage);

export default router;