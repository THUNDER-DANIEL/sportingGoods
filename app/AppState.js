import Sport from "./Models/Sport.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Sports[]} */
  sports = [
    new Sport('Baseball',10, 15, "it bounces", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2L87Uzx8zDndXgVPP412C5-Nn9w4_Tm0rTw&usqp=CAU"),
    new Sport('Hockey Stick', 100, 3, "Make of bone from hockey players!", "https://lh3.googleusercontent.com/proxy/cAfaYxLOESmpx9LRZcfF6cP7ljItD4RIFkmFuWI78hXDHVdLvKcoU2Yc_hMV43hnsA-YwCg-nVQSBs9VQ9wLBdOwROQitQ0"),
    new Sport('Coding Helmet', 7800, 20, "it's worth it", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAsHjSwZWOrEc8h8HlT01N_tILoTUGSaGcfWTZzB9kjtD4D9zR9cqHT0I5x87PufheiFNA4Q&usqp=CAc")
  ]

  /**@type{Carts[]} */
  carts = []

  total = 0
}












export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
