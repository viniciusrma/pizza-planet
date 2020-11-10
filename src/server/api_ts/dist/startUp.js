"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var db_1 = __importDefault(require("./infra/db"));
var menuController_1 = __importDefault(require("./controller/menuController"));
var StartUp = /** @class */ (function () {
    function StartUp() {
        this.app = express_1.default();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    ;
    StartUp.prototype.middler = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    ;
    StartUp.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send({ versao: '0.1.1' });
        });
        this.app.route("/api/v1/menu").get(menuController_1.default.get);
        this.app.route("/api/v1/menu/:id").get(menuController_1.default.getById);
        this.app.route("/api/v1/menu").post(menuController_1.default.create);
        this.app.route("/api/v1/menu/:id").put(menuController_1.default.update);
        this.app.route("/api/v1/menu/:id").delete(menuController_1.default.delete);
        this.app.route("/api/v1/dishes").get(menuController_1.default.get);
        this.app.route("/api/v1/dishes/:id").get(menuController_1.default.getById);
        this.app.route("/api/v1/dishes").post(menuController_1.default.createDish);
        this.app.route("/api/v1/dishes/:id").put(menuController_1.default.updateDish);
        this.app.route("/api/v1/dishes/:id").delete(menuController_1.default.deleteDish);
    };
    ;
    return StartUp;
}());
;
exports.default = new StartUp();
