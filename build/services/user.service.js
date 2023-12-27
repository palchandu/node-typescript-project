"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.findUser = exports.createUser = void 0;
const models_1 = require("../models");
function createUser(input) {
    const password = models_1.userModel.randomPassword();
    input.password = password;
    return models_1.userModel.create(input);
}
exports.createUser = createUser;
function findUser(query, options = { lean: true }) {
    return models_1.userModel.find(query, {}, options);
}
exports.findUser = findUser;
function updateUser(query, update, options) {
    return models_1.userModel.findOneAndUpdate(query, update, options);
}
exports.updateUser = updateUser;
