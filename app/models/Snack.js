import { AppState } from "../AppState.js"

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get snacksTemplate() {
        return /*html*/`
        <div class="col-md-3 col-6 text-center fs-3 d-flex flex-column align-items-center my-2">
            <img class="img-fluid img-style"
            src="${this.imgUrl}"
            alt="${this.name}">
            <div class="d-flex justify-content-between align-items-center snack-text-style p-2">
            <div>
                <p>${this.name}</p>
                <p>$${this.price.toFixed(2)}</p>
            </div>
            <div>
                <button ${AppState.money < this.price ? 'disabled' : ''} onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-outline-dark fs-5">
                Buy
                </button>
            </div>
            </div>
        </div>
        
        `
    }
}

// NOTE Ternary: you can add this to a button with string interpolation when setting HTML. This will allow an if statement to be read and implemented in order to enable or disable buttons. the ? asks if the conditional is true, then the colon marks two answers to the if statement. The left side is if it is true, the right side is if it is false.