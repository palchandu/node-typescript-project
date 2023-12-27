"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
exports.app = app;
const PORT = process.env.ENVIRONMENT == 'development' ? process.env.DEV_PORT : process.env.PROD_PORT || 3000;
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
const db_1 = __importDefault(require("./config/db"));
const index_1 = require("./routes/index");
app.use('/api/user', index_1.userRouter);
app.use('/api/auth', index_1.authRouter);
(0, db_1.default)();
app.get('/hello', (req, res) => {
    res.json({ message: "Hello!" });
});
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
