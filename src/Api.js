import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace this with your backend server URL

// Function to fetch all drinks
export const getDrinks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Drinks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
    return [];
  }
};

// Function to fetch all snacks
export const getSnacks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/snacks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching snacks:', error);
    return [];
  }
};

// Function to fetch a specific drink or snack by its ID
export const getItemById = async (itemId) => {
  try {
    const response = await axios.get(`${BASE_URL}/Drinks/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching item by ID:', error);
    return null;
  }
};

// Function to add a new drink or snack
export const addItem = async (itemData) => {
  try {
    const response = await axios.post(`${BASE_URL}/Drinks`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error);
    return null;
  }
};
