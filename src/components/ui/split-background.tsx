
import { cn } from "@/lib/utils";

interface SplitBackgroundProps {
  children: React.ReactNode;
  topColor?: string;
  bottomColor?: string;
  topHeight?: string;
  className?: string;
}

const SplitBackground = ({
  children,
  topColor = "bg-[#f7f7f7]", // Updated to a lighter gray that matches the image
  bottomColor = "#ffffff",
  topHeight = "47%",
  className,
}: SplitBackgroundProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Top background */}
      <div 
        className={`absolute top-0 left-0 right-0 ${topColor}`}
        style={{ height: topHeight }}
      />
      {/* Bottom background */}
      <div 
        className="absolute bottom-0 left-0 right-0"
        style={{ 
          height: `calc(100% - ${topHeight})`,
          backgroundColor: bottomColor 
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SplitBackground;
