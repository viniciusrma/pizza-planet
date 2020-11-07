"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var menuSchema_1 = __importDefault(require("../models/menuSchema"));
exports.default = mongoose_1.default.model("menu", menuSchema_1.default);
