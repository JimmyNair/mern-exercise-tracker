const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: true
    },
}, {
    timestamps: true, //create field for when the username is created/modified
});

const User = mongoose.model("User", userSchema);

module.exports = User;