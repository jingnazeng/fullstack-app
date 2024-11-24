import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/list-items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>List Items</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;