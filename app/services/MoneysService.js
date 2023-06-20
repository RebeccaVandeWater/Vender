import { AppState } from "../AppState.js"

class MoneysService {
    addMoney() {
        AppState.money += .25

        console.log("Money Amount:", AppState.money)
    }

    // giveChange() {
    //     // console.log("This is hooked up to controller correctly")

    // }
}

export const moneysService = new MoneysService()