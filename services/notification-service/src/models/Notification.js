const mongoose = require("mongoose");

const NOTIFICATION_TYPE = require("../constants/notificationType");
const NOTIFICATION_STATUS = require("../constants/notificationStatus");

const notificationSchema = new mongoose.Schema({

    userId: {

        type: mongoose.Schema.Types.ObjectId,

        required: true,

        index: true

    },

    title: {

        type: String,

        required: true,

        trim: true

    },

    message: {

        type: String,

        required: true,

        trim: true

    },

    type: {

        type: String,

        enum: Object.values(NOTIFICATION_TYPE),

        required: true

    },

    status: {

        type: String,

        enum: Object.values(NOTIFICATION_STATUS),

        default: NOTIFICATION_STATUS.PENDING

    }

}, {

    timestamps: true

});

notificationSchema.index({ userId: 1, createdAt: -1 });

const Notification = mongoose.model("Notification",notificationSchema);

module.exports = Notification