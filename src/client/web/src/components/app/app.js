import React from 'react';
import './app.css';
import Menu from '../menu/menu';
import Navigation from '../navigation/nav';
import Header from '../header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Menu/>
    </div>
  );
;}

export default App;
