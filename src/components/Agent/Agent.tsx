import React from 'react';
import Customer from '../Customer';

type ShopProps = {
  agent: Agent;
};

const Shop: React.FC<ShopProps> = ({ agent }) => {
  const { id, customers, name } = agent;
  const customerList = customers
    ? customers.map(customer => (
        <Customer key={customer.id} customer={customer} />
      ))
    : null;
  return (
    <li>
      <p>{`${id}: ${name}`}</p>
      {customerList}
    </li>
  );
};

export default Shop;
