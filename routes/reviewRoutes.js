const express = require("express");
const reviewController = require("../controllers/reviewController.js");
const { authenticateUser, authorizeRoles } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/add", authenticateUser, reviewController.addReview);
router.get("/:productId", reviewController.getProductReviews);
router.delete("/:reviewId", authenticateUser, reviewController.deleteReview);
router.delete("/admin/:reviewId", authenticateUser, authorizeRoles("admin"), reviewController.AdminDeleteReview);

module.exports = router;
