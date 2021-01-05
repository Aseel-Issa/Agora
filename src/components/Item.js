import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'

class Item extends Component{

    buyItem = () =>{
        this.props.inventory.buyItem(this.props.item.name)
    }

    changePrice = () =>{
        const price = parseFloat(prompt('Please add the new price'))
        if(isNaN(price)){
            return // do nothing
        }
        this.props.inventory.changePrice(this.props.item.name, price)
    }

    render(){
        let item = this.props.item
        return (
            <li className='item'>
            <div onDoubleClick={this.changePrice}>{item.quantity} {item.name} available at ${item.price} per item. </div>
            <button onClick={this.buyItem}>
                Buy</button></li>
        )
    }
}

export default inject("inventory")(observer(Item))