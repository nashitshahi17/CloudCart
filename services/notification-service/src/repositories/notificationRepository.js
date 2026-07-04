const Notification = require("../models/Notification");

async function create(notificationData) {

    return await Notification.create(notificationData);

}

async function findById(id) {

    return await Notification.findById(id);

}

async function findByUserId(userId) {

    return await Notification.find({ userId })

        .sort({ createdAt: -1 });

}

async function update(id, updateData) {

    return await Notification.findByIdAndUpdate(

        id,

        updateData,

        { new: true }

    );

}

module.exports = {

    create,

    findById,

    findByUserId,

    update

};