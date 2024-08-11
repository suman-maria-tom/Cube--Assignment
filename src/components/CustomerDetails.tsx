import React, { useState, useEffect } from "react";

interface CustomerDetailsProps {
  customer: { id: number; name: string; title: string; address: string };
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    // Function to generate 9 random photo URLs
    const generatePhotos = () => {
      return Array.from(
        { length: 9 },
        () => `https://picsum.photos/200?random=${Math.random()}`
      );
    };

    // Initial photo generation
    setPhotos(generatePhotos());

    // Update photos every 10 seconds
    const intervalId = setInterval(() => {
      setPhotos(generatePhotos());
    }, 10000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="customer-details">
      <h2>{customer.name} details here</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Random pic ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
