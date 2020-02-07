import React from 'react';
import Shop from '../Shop';

type ShopListProps = {
  shops: Shop[];
};

const ShopList: React.FC<ShopListProps> = ({ shops }) => {
  const shopsList = shops
    ? shops.map(shop => <Shop key={shop.id} shop={shop} />)
    : null;
  return <>{shopsList && <ul>{shopsList}</ul>}</>;
};

export default ShopList;
