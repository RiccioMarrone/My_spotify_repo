"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface BtnProgression {
  className: string;
  id: number;
}
const BtnProgression: React.FC<BtnProgression> = ({ className, id }) => {
  const stateId = useSelector(
    (state: RootState) => state.progressionSlider.value
  );
  const ref = useRef<HTMLSpanElement>(null);
  let idElement = id;
  const [refStatus, setRefStatus] = useState<boolean | undefined>();

  if (idElement == stateId) {
    return (
      <span
        ref={ref}
        className="transition-all h-[0.5em] w-[2em] rounded bg-red-500"
      ></span>
    );
  } else {
    return <span className={`${className}`}></span>;
  }
};

export default BtnProgression;
