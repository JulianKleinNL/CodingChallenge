type Base = {
  id: string;
  name: string;
};

type Shop = Base & {
  agents?: Agent[];
};

type Agent = Base & {
  shopId: string;
  customers?: Customer[];
};

type Customer = Base & {
  shopId: string;
  property?: Property[];
};

type Property = Base & {
  customerId: string;
  address: string;
};
