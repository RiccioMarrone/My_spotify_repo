import React from "react";

interface SectionCustom {
  className?: string;
  children: React.ReactNode;
}
const SectionCustom: React.FC<SectionCustom> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default SectionCustom;
