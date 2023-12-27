"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = require("../controller");
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = req.query;
    console.log(queryParams);
    const user = yield (0, controller_1.getUser)(queryParams);
    res.json({ data: user });
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    const user = yield (0, controller_1.saveUser)(reqBody);
    res.json({ data: user });
}));
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body.query;
    const updateInfo = req.body.update;
    const userUpdt = yield (0, controller_1.updateUsers)(query, updateInfo, { new: true });
    res.json({ data: userUpdt });
}));
exports.default = router;
