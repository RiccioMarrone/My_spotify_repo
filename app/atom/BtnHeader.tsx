import React from "react";

interface btnHeader {
  title: string;
  className: string;
}
const BtnHeader = (props: btnHeader) => {
  const { title, className } = props;
  return <div className={`${className}`}>{title}</div>;
};

export default BtnHeader;
