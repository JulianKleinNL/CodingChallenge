import React from 'react';

type ShopProps = {
  customer: Customer;
};

const Customer: React.FC<ShopProps> = ({ customer }) => {
  const { id, name, property } = customer;
  return (
    <li>
      <p>{`${id}: ${name}`}</p>
      <p>{property}</p>
    </li>
  );
};

export default Customer;
