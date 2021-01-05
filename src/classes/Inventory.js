import {observable, makeObservable, action, computed} from 'mobx'
import Item from './Item'

class Inventory{

    constructor(){
        this.items = []

        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            numItems: computed
        })
    }

    get numItems(){
        return this.items.length
    }

    addItem = (name, price, quantity) => {

        const index = this.items.findIndex(item => item.name === name)
        if(index!=-1){
            this.items[index].quantity += 1
        }else{
            const item = new Item(name, price, quantity)
            this.items.push(item)
        }
    }

    buyItem = (name) =>{
        const index = this.items.findIndex(item => item.name === name)
        if(index!=-1){
            this.items[index].quantity -=1
            if(this.items[index].quantity == 0){
                this.items.splice(index, 1)
            }
        }else{
            console.log('Item does not exist')
        }
    }

    changePrice = (name, price) =>{
        const index = this.items.findIndex(item => item.name === name)
        if(index!=-1){
            this.items[index].price = price
        }else{
            console.log('Item does not exist')
        }
    }

}

export default Inventory
