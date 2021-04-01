import { ProxyState } from "../AppState.js";
import { cartsService } from "../Services/CartsService.js";


//Private
function _draw() {
  let carts = ProxyState.carts;
  let template = ''


//   Goes and gets all the items in the items in the ProxyState / App state
  carts.forEach(s => template += s.cartTemplate)
  document.getElementById("cart").innerHTML = template

 
  
}

//Public
export default class CartsController {
  constructor() {
    ProxyState.on("carts", _draw);
    _draw()
  }

  addCart(item) {
    cartsService.addCart(item)
  }



}
