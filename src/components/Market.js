
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Item from './Item'


// Can be designed as a functional component that uses hooks instead
class Market extends Component {
    constructor(){
        super()
        this.state = {
            input : ''
        }
    }

    addItem = () =>{
        const str = this.state.input
        const itemData = str.split(',')
        let price = itemData[1]
        let quantity = itemData[2]
        if (price == undefined || isNaN(parseFloat(price))){ price=0 } else {price = price.trim()}
        if (quantity == undefined || isNaN(parseFloat(quantity))){quantity=1} else {quantity = quantity.trim()}
        this.props.inventory.addItem(itemData[0].trim(), price, quantity)
        this.setState({
            input : ''
        })
    }

    handleChange = (e) => {
        const str = e.target.value
        this.setState({
            input : str
        })
    }

    render() {

       const items = this.props.inventory.items.map(item => { return <Item item={item}/>})
        return (
            <div className='market'>
                <input placeholder='Item name, price, quantity' onChange={this.handleChange} value={this.state.input}></input>
                <button onClick={this.addItem}>Add Item</button>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default inject("inventory")(observer(Market))