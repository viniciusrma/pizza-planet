import menuRepository from '../repository/menuRepository';

class MenuService {
  get() {
    return menuRepository.find({});
  }

  getById(_id: any) {
    return menuRepository.findById(_id);
  }

  create(menu: any) {
    return menuRepository.create(menu);
  }

  update(_id: any,menu: any) {
    return menuRepository.findByIdAndUpdate(_id, menu)
  }

  delete(_id: any) {
    return menuRepository.findByIdAndRemove(_id);
  }
};

export default new MenuService();