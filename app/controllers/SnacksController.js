import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawSnacks() {
    const snacks = AppState.snacks

    let template = ''

    snacks.forEach(snack => template += snack.snacksTemplate)

    setHTML('snacksAvailable', template)
}


export class SnacksController {
    constructor() {
        console.log("Snacks Controller Loaded")
        console.log("My Cheetos", AppState.snacks);
        _drawSnacks()
    }

    snacksService.buySnack() {

    }

}