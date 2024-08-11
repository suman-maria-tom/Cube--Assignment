import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import "./styles/App.css";

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(1);

  // Generate 1000 dummy customers
  const customers = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    address: `${index + 1} Some Street, Some City, Some Country`,
  }));

  const selectedCustomer = customers.find(
    (customer) => customer.id === selectedCustomerId
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Customer Details Portal</h1>
      </header>
      <div className="content">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onCustomerSelect={setSelectedCustomerId}
        />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
