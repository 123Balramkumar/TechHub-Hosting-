// ServicePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ServicePage = () => {
  const { service } = useParams();

  return (
    <div className="service">
      <section>
        <h1>Services Page</h1>
        {/* Display detailed information about the selected service */}
      </section>
    </div>
  );
};

export default ServicePage;
