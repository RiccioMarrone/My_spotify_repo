import React from "react";

interface titleSlider {
  paragrafo: string;
  className?: string;
}
const TitleSlider = ({ paragrafo, className }: titleSlider) => {
  return (
    <div>
      <p className={`${className}`}>{paragrafo}</p>
    </div>
  );
};

export default TitleSlider;
