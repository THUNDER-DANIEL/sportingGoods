import SportsController from "./Controllers/SportsController.js";
import CartsController from "./Controllers/CartsController.js";


class App {
  sportsController = new SportsController();
  cartsController = new CartsController();

}

window["app"] = new App();
