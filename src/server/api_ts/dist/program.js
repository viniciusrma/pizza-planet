"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var startUp_1 = __importDefault(require("./startUp"));
var port = process.env.PORT || '3050';
startUp_1.default.app.listen(port, function () {
    console.log("Server listening on port " + port);
});
