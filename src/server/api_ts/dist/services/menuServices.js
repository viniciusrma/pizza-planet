"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var menuRepository_1 = __importDefault(require("../repository/menuRepository"));
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.get = function () {
        return menuRepository_1.default.find({});
    };
    MenuService.prototype.getById = function (_id) {
        return menuRepository_1.default.findById(_id);
    };
    MenuService.prototype.create = function (menu) {
        return menuRepository_1.default.create(menu);
    };
    MenuService.prototype.update = function (_id, menu) {
        return menuRepository_1.default.findByIdAndUpdate(_id, menu);
    };
    MenuService.prototype.delete = function (_id) {
        return menuRepository_1.default.findByIdAndRemove(_id);
    };
    MenuService.prototype.createDish = function (dish) {
        return menuRepository_1.default.create(dish);
    };
    MenuService.prototype.updateDish = function (_id) {
        return menuRepository_1.default.create(_id);
    };
    MenuService.prototype.deleteDish = function (_id) {
        return menuRepository_1.default.findByIdAndRemove(_id);
    };
    return MenuService;
}());
;
exports.default = new MenuService();
