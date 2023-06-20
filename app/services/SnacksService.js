import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

class SnacksService {
    buySnack(snackName) {
        // console.log(snackName)

        const snacks = AppState.snacks

        // console.log(snacks)

        const foundSnack = snacks.find(snack => snack.name == snackName)

        // console.log("My foundSnack", foundSnack)

        if (AppState.money < foundSnack.price) {
            Pop.error("You don't have enough money!")
            return
        }

        AppState.money -= foundSnack.price
    }
}

export const snacksService = new SnacksService()