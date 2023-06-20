export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get snacksTemplate() {
        return /*html*/`
        <div class="col-4 text-center fs-3">
            <img class="img-fluid img-style"
            src="${this.imgUrl}"
            alt="${this.name}">
            <div class="d-flex justify-content-between align-items-center snack-text-style p-2">
            <div>
                <p>${this.name}</p>
                <p>$${this.price}</p>
            </div>
            <div>
                <button onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-outline-dark fs-5">
                Buy
                </button>
            </div>
            </div>
        </div>
        
        `
    }
}