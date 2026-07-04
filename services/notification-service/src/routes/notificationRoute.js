const express = require("express");

const notificationController = require("../controllers/notificationController");

const validate = require("../middlewares/validate");
const {authenticateUser} = require("../middlewares/auth");

const {
    createNotificationSchema
} = require("../validators/notificationValidator");

const router = express.Router();

router.post(
    "/",
    authenticateUser,
    validate(createNotificationSchema),
    notificationController.handleCreateNotification
);

router.get(
    "/:id",
    authenticateUser,
    notificationController.handleGetNotification
);

router.get(
    "/",
    authenticateUser,
    notificationController.handleGetMyNotifications
);

module.exports = router;