// FoodMenu.js
import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem';
import { getSnacks, getDrinks } from './Api';
import './FoodMenu.css';

const FoodMenu = ({ type, match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (type === 'snacks') {
      getSnacks().then((response) => setItems(response.data));
    } else if (type === 'drinks') {
      getDrinks().then((response) => setItems(response.data));
    } else if (type === 'item') {
      // Fetch details for a single item using match.params.itemId
      // Implement this based on your backend API and data structure
    }
  }, [type, match]);

  return (
    <div className="food-menu">
      {items.map((item) => (
        <FoodItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodMenu;
