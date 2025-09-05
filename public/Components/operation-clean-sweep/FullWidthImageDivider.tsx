
import React from 'react';

const FullWidthImageDivider = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "500px" }}
    >
      {/* Upward-pointing triangle divider at the TOP */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "70px solid transparent",
            borderRight: "70px solid transparent",
            borderTop: "60px solid white",
          }}
        />
      </div>

      {/* Full-width Image */}
      <div className="absolute inset-0">
        <img
          src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Close-up-image-showing-a-pair-of-hands-holding-a-handful-of-bright-yellow-resin-pellets-against-a-wh.png"
          alt="Decorative Yogurt Container"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
};

export default FullWidthImageDivider;

