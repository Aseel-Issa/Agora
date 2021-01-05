import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { observer} from 'mobx-react'
import Market from './components/Market'

export class App extends Component {

  render() {
    return (
      <div className='app'>
        <Market />
      </div>
    )

  }
}

export default observer(App);
