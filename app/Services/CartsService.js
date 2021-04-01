import { ProxyState } from "../AppState.js";
// import Cart from "../Models/Cart.js";

class CartsService {
  addCart(item) {
      console.log(item)
    let cart = ProxyState.sports.find(i => i.name == item)
    
    ProxyState.carts = [...ProxyState.carts, cart]
}

}

export const cartsService = new CartsService();