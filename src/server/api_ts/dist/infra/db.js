"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Database = /** @class */ (function () {
    function Database() {
        this.DB_URL = 'mongodb://localhost:27017/db_portal';
    }
    Database.prototype.createConnection = function () {
        mongoose_1.default.connect(this.DB_URL);
    };
    return Database;
}());
exports.default = Database;
