// Home.js
import React, { useState, useEffect } from 'react';
import { getSnacks, getDrinks } from './Api';

const Home = () => {
  const [snacksCount, setSnacksCount] = useState(0);
  const [drinksCount, setDrinksCount] = useState(0);

  useEffect(() => {
    getSnacks().then((response) => setSnacksCount(response.data.length));
    getDrinks().then((response) => setDrinksCount(response.data.length));
  }, []);

  return (
    <div>
      <h1>Welcome to Snack or Booze!</h1>
      <p>Total Snacks: {snacksCount}</p>
      <p>Total Drinks: {drinksCount}</p>
    </div>
  );
};

export default Home;
