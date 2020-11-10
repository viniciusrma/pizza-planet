import express from 'express';
import bodyParser from 'body-parser';
import Database from './infra/db';
import menuController from './controller/menuController';

class StartUp {
  public app: express.Application;
  private _db: Database;
  private bodyParser: any;

  constructor() {
    this.app = express();
    this._db = new Database(); 
    this._db.createConnection();
    this.middler();
    this.routes();
  };

  middler() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  };

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({ versao: '0.1.1' })
    });

    this.app.route("/api/v1/menu").get(menuController.get);
    this.app.route("/api/v1/menu/:id").get(menuController.getById);
    this.app.route("/api/v1/menu").post(menuController.create);
    this.app.route("/api/v1/menu/:id").put(menuController.update);
    this.app.route("/api/v1/menu/:id").delete(menuController.delete);

    this.app.route("/api/v1/dishes").get(menuController.get);
    this.app.route("/api/v1/dishes/:id").get(menuController.getById);
    this.app.route("/api/v1/dishes").post(menuController.createDish);
    this.app.route("/api/v1/dishes/:id").put(menuController.updateDish);
    this.app.route("/api/v1/dishes/:id").delete(menuController.deleteDish);

  }; 
};

export default new StartUp();