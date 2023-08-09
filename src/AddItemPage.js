import React, { useState } from 'react';
import { addItem } from './Api';

const AddItemPage = () => {
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState(''); // 'drinks' or 'snacks'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItemData = {
      name: itemName,
      type: itemType,
    };

    try {
      const newItem = await addItem(newItemData);
      if (newItem) {
        // Item added successfully, handle redirection or display success message
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label>
          Item Type:
          <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
            <option value="drinks">Drinks</option>
            <option value="snacks">Snacks</option>
          </select>
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;
