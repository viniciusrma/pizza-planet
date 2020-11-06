"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var StartUp = /** @class */ (function () {
    function StartUp() {
        this.app = express_1.default();
        this.routes();
    }
    ;
    StartUp.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send({ versao: '0.1.1' });
        });
    };
    ;
    return StartUp;
}());
;
exports.default = new StartUp();
