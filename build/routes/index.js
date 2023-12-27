"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = exports.userRouter = void 0;
const user_route_1 = __importDefault(require("./user.route"));
exports.userRouter = user_route_1.default;
const auth_route_1 = __importDefault(require("./auth.route"));
exports.authRouter = auth_route_1.default;
