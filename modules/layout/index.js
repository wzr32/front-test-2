import React from 'react';
import Navbar from './Navbar';


const index = ({ children }) => {
  const containerStyle = {
    height: 'calc(100vh - 140px)'
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        className="container mx-auto"
        style={containerStyle}
      >
        {children}
      </div>
    </div>
  )
}

export default index
