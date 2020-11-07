"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var MenuSchema = new mongoose_1.default.Schema({
    hat: { type: String },
    img: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    date: { type: Date },
});
exports.default = MenuSchema;
