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

        if (AppState.money > foundSnack.price) {

            AppState.money -= foundSnack.price

            AppState.change += AppState.money

            AppState.money = 0

            console.log("Here is my change:", AppState.change)
            console.log("Here is my vending machine money:", AppState.money)

            return
        }


        AppState.money -= foundSnack.price
    }
}

export const snacksService = new SnacksService()