
import React from 'react';

const FullWidthImageDivider2 = () => {
  return (
    <div className="w-full h-[550px] relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1024&h=500"
        alt="Environmental Commitment"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
      
      {/* Triangle divider */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "70px solid transparent",
            borderRight: "70px solid transparent",
            borderBottom: "60px solid white",
          }}
        />
      </div>
    </div>
  );
};

export default FullWidthImageDivider2;
