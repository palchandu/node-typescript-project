"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function generatePassword(length, symbols) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if (symbols) {
        characters += "!@#$%^&*()_+-=[]|,./?";
    }
    var password = "";
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    }
});
userSchema.static('randomPassword', function randomPassword() {
    return generatePassword(12, true);
});
userSchema.method('fullInfo', function fullInfo() {
    return 'Name : ' + this.name + ' Age: ' + this.age + ' Email: ' + this.email + 'Address: ' + this.address;
});
const userModel = (0, mongoose_1.model)('user', userSchema);
exports.default = userModel;
