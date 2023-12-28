import React from "react";

interface ProgressionSlider {
  children: React.ReactNode;
  className?: string;
}
const ProgressionSlider: React.FC<ProgressionSlider> = ({
  children,
  className,
}) => {
  return <div className={`${className}`}>{children}</div>;
};

export default ProgressionSlider;
