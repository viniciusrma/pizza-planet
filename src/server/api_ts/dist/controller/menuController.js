"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var menuServices_1 = __importDefault(require("../services/menuServices"));
var http_status_1 = __importDefault(require("http-status"));
var helper_1 = __importDefault(require("../infra/helper"));
var menuController = /** @class */ (function () {
    function menuController() {
    }
    menuController.prototype.get = function (req, res) {
        menuServices_1.default.get()
            .then(function (menu) { return helper_1.default.sendResponse(res, http_status_1.default.OK, menu); })
            .catch(function (error) { return console.error.bind(console, "Error " + error); });
    };
    ;
    menuController.prototype.getById = function (req, res) {
        var _id = req.params.id;
        menuServices_1.default.getById(_id)
            .then(function (menu) { return helper_1.default.sendResponse(res, http_status_1.default.OK, menu); })
            .catch(function (error) { return console.error.bind(console, "Error " + error); });
    };
    ;
    menuController.prototype.create = function (req, res) {
        var order = req.body;
        menuServices_1.default.create(order)
            .then(function (menu) { return helper_1.default.sendResponse(res, http_status_1.default.OK, "Order successfully sent"); })
            .catch(function (error) { return console.error.bind(console, "Error " + error); });
    };
    ;
    menuController.prototype.update = function (req, res) {
        var _id = req.params.id;
        var order = req.body;
        menuServices_1.default.update(_id, order)
            .then(function (menu) { return helper_1.default.sendResponse(res, http_status_1.default.OK, "Order successfully updated"); })
            .catch(function (error) { return console.error.bind(console, "Error " + error); });
    };
    ;
    menuController.prototype.delete = function (req, res) {
        var _id = req.params.id;
        menuServices_1.default.delete(_id)
            .then(function () { return helper_1.default.sendResponse(res, http_status_1.default.OK, 'Order successfully deleted'); })
            .catch(function (error) { return console.error.bind(console, "Error " + error); });
    };
    return menuController;
}());
;
exports.default = new menuController();
