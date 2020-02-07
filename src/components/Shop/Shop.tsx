import React from 'react';
import Agent from '../Agent';

type ShopProps = {
  shop: Shop;
};

const Shop: React.FC<ShopProps> = ({ shop }) => {
  const { id, agents, name } = shop;
  const agentsList = agents
    ? agents.map(agent => <Agent key={agent.id} agent={agent} />)
    : null;
  return (
    <li>
      <p>{`${id}: ${name}`}</p>
      {agentsList && <ul>{agentsList}</ul>}
    </li>
  );
};

export default Shop;
