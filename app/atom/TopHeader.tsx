import React from "react";

interface TopHeader {
  className?: string;
  children?: React.ReactNode;
}
const TopHeader: React.FC<TopHeader> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default TopHeader;
