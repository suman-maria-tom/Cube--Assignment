import React from "react";

interface CustomerCardProps {
  customer: { id: number; name: string; title: string };
  onClick: () => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`customer-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h4>{customer.name}</h4>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
