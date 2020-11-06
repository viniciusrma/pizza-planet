import React from 'react';
import './app.css';
import Menu from '../menu/menu';
import Navigation from '../navigation/nav';
import Header from '../header/header';
import Cart from '../cart/cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Menu/>
      <Cart/>
    </div>
  );
;}

export default App;
