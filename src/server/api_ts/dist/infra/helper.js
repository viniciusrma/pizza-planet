"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generic send response
var Helper = /** @class */ (function () {
    function Helper() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
    return Helper;
}());
exports.default = new Helper();
