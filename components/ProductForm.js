import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function ProductForm({ addProduct }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(productName, productPrice);
    setProductName('');
    setProductPrice(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" value={productName} onChange={(event) => setProductName(event.target.value)} />

      <label htmlFor="productPrice">Product Price:</label>
      <input type="number" id="productPrice" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
