import React from 'react';
import Shop from './components/Shop';
import ShopList from './components/ShopList';

const App = () => {
  const mockShops: Shop[] = [];
  return (
    <div className="App">
      <ShopList shops={mockShops} />
    </div>
  );
};

export default App;
