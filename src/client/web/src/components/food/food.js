import React from 'react';
import './food.css';
import Counter from '../counter/counter';

const foodDescription = {
  imageSrc: 'https://i.ibb.co/cCvtR7j/pizzasample.png',
  flavour: 'Mozzarella',
  description: 'Mozzarella and Basil.',
  price: 18,
}

export default function Food(props) {
  return (
    <div className="Food">
      <div className="image-container">
        <img src={foodDescription.imageSrc} alt='pizza' />
      </div>
      <div className="Food-information">
        <div className="Food-description">
          <div>
            <h2>{foodDescription.flavour}</h2>
            <p>{foodDescription.description}</p>
            <p>{foodDescription.price}</p>
          </div>
          <div className="Food-quantity">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  )
};
