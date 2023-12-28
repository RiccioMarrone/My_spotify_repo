import React from "react";

interface CardSlider {
  className?: string;
  children: React.ReactNode;
  src?: string;
}
const CardSlider: React.FC<CardSlider> = ({ children, className, src }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default CardSlider;
