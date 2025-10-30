import React from 'react';
import Card from './Card';
import Heading from '../common/Heading';
import "./configuration.css";

const Configuration = () => {
  return (
    <section className='featured background'>
      <div className='container'>
        <Heading
          title='Available Configurations'
          subtitle='Explore various flat types and their specifications'
        />
        <Card />
      </div>
    </section>
  );
};

export default Configuration;
