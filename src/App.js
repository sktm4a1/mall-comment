import React, { Component } from 'react';
import OrderList from './component/orderList/orderList.js';
import Header from './component/header/header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	  <Header />
          <OrderList/>
      </div>
    );
  }
}

export default App;
