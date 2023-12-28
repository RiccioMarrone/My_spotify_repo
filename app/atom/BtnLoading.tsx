import React from "react";

interface BtnLoading {
  children?: React.ReactNode;
  className?: string;
}
const BtnLoading: React.FC<BtnLoading> = ({ children, className }) => {
  return (
    <div className="min-h-[12em] w-full flex items-center justify-center">
      <span className="loading loading-spinner text-error"></span>
    </div>
  );
};

export default BtnLoading;
