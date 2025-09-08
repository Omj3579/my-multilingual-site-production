import * as React from "react";

// Hook to get viewport width for responsive dropdown sizing
export function useViewportWidth() {
  const [width, setWidth] = React.useState<number>(0);

  React.useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return width;
}

// Get appropriate dropdown width based on viewport
export function getResponsiveDropdownWidth(viewportWidth: number, baseWidth: number) {
  if (viewportWidth < 640) return Math.min(viewportWidth - 32, baseWidth * 0.6); // sm
  if (viewportWidth < 768) return Math.min(viewportWidth - 32, baseWidth * 0.7); // md
  if (viewportWidth < 1024) return Math.min(viewportWidth - 48, baseWidth * 0.8); // lg
  if (viewportWidth < 1200) return Math.min(viewportWidth - 64, baseWidth * 0.9); // xl
  return Math.min(viewportWidth - 64, baseWidth); // 2xl and up
}
