import { AppState } from "../AppState.js"

class MoneysService {
    addMoney() {
        AppState.money += .25

        console.log("Money Amount:", AppState.money)
    }
}

export const moneysService = new MoneysService()