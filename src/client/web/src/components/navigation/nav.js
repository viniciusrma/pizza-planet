import React from 'react'
import './nav.css';

export default function Navigation(props) {
  return (
    <div className="Navigation">
      <a href="#Menu">
      <input className="Button" type="button" value="Go to the Menu"/>
      </a>
    </div>
  );
};