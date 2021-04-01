import { ProxyState } from "../AppState.js";
import Sport from "../Models/Sport.js";

class SportsService {
  addSport(newSport) {
    let sport = new Sport(newSport.name,newSport.price, newSport.stock, newSport.description, newSport.imgUrl)
    ProxyState.sports = [...ProxyState.sports, sport]
  }

}

export const sportsService = new SportsService();