var Users = require('../models/User');

// Register User
exports.postOne = function(req, res) {
    res.json({ success: true });
};

// Get All Users
exports.getAll = function(req, res) {
    Users.find({}).exec(function(err, data) {
        if (err) {
            res.json({
                success: false,
                code: 500,
                error: "Please try again later."
            });
            return;
        }
        if (data) {
            res.json({
                success: true,
                code: 200,
                data: data
            });
            return;
        }
    });
};
