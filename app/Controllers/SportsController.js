import { ProxyState } from "../AppState.js";
import { sportsService } from "../Services/SportsService.js";


//Private
function _draw() {
  let sports = ProxyState.sports;
  let template = ''


//   Goes and gets all the items in the items in the ProxyState / App state
  sports.forEach(s => template += s.Template)
  document.getElementById("sport").innerHTML = template 
}

//Public
export default class SportsController {
  constructor() {
    ProxyState.on("sports", _draw);
    _draw()
  }

  addSport() {
    sportsService.addSport()
  }



}
