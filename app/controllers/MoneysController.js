import { AppState } from "../AppState.js"
import { moneysService } from "../services/MoneysService.js"
import { setText } from "../utils/Writer.js"

function _drawMoneys() {

    setText('moneyAmount', AppState.money.toFixed(2))
}


export class MoneysController {
    constructor() {
        console.log("Moneys Controller Loaded")
        AppState.on('money', _drawMoneys)
    }

    addMoney() {
        console.log("Add Money click triggered")
        moneysService.addMoney()
        _drawMoneys()
    }
}

// TODO Manipulate money amount in appState via MoneysService
// TODO Draw money to screen
// TODO Use listener to draw money any time it is manipulated
