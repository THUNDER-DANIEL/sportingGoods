import { ProxyState } from "../AppState.js";
// import Cart from "../Models/Cart.js";

class CartsService {
  addCart(item,num) {
      console.log(num)
      let cart = ProxyState.sports.find(i => i.name == item)
      let total = ProxyState.sports.find(p => p.price == num)
      
    ProxyState.carts = [...ProxyState.carts, cart] 

}

}

export const cartsService = new CartsService();