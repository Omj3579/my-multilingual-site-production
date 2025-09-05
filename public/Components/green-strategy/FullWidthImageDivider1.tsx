
import React from 'react';

const FullWidthImageDivider1 = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "550px" }}>
      {/* Full-width Image */}
      <div className="absolute inset-0">
        <img
          src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Create-an-educational-display-set-in-a-modern-office-or-exhibition-space-focusing-on-sustainability.png"
          alt="Sustainability Educational Display"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Upward-pointing triangle cutting into the bottom of image */}
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
    </section>
  );
};

export default FullWidthImageDivider1;
