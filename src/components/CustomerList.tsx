import React from "react";
import CustomerCard from "./CustomerCard";

interface CustomerListProps {
  customers: { id: number; name: string; title: string }[];
  selectedCustomerId: number;
  onCustomerSelect: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomerId,
  onCustomerSelect,
}) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onClick={() => onCustomerSelect(customer.id)}
          isSelected={customer.id === selectedCustomerId}
        />
      ))}
    </div>
  );
};

export default CustomerList;
