import menuService from "../services/menuServices";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";

class menuController {
  
  get(req: Request, res: Response) {
    menuService.get()
    .then(menu => Helper.sendResponse(res, HttpStatus.OK, menu))
    .catch(error => console.error.bind(console, `Error ${error}`));
  };

  getById(req: Request, res: Response) {
    const _id = req.params.id;
    menuService.getById(_id)
    .then(menu => Helper.sendResponse(res, HttpStatus.OK, menu))
    .catch(error => console.error.bind(console, `Error ${error}`));
  };

  create(req: Request, res: Response) {
    let order = req.body;
    menuService.create(order)
    .then(menu => Helper.sendResponse(res, HttpStatus.OK, "Order successfully sent"))
    .catch(error => console.error.bind(console, `Error ${error}`));
  };

  update(req: Request, res: Response) {
    const _id = req.params.id;
    let order = req.body;

    menuService.update(_id, order)
    .then(menu => Helper.sendResponse(res, HttpStatus.OK, `${menu.title} was successfully updated`))
    .catch(error => console.error.bind(console, `Error ${error}`));
  };

  delete(req: Request, res: Response) {
    const _id = req.params.id;
    menuService.delete(_id)
    .then( () => Helper.sendResponse(HttpStatus.OK),
    'Order successfully deleted'
    )
    .catch(error => console.error.bind(console, `Error ${error}`));
  };

};

export default new menuController();