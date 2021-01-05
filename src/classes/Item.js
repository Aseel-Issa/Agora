import {observable, makeObservable} from 'mobx'


class Item {

    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity

        makeObservable(this, {
            name: observable,
            price: observable,
            quantity: observable
        })
    }
}

export default Item