"use client";
import React, { useState, useEffect } from "react";
//Componenti
import CardSlider from "../atom/CardSlider";
import ImgCustom from "../atom/ImgCustom";
import { Root } from "@/typeData";
interface Slider {
  children?: React.ReactNode;
  className?: string;
}

const Slider: React.FC<Slider> = ({ children, className }) => {
  const [data, setData] = useState<Root>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/defaultMix", {
          method: "GET",
        });

        let dataResponse = await response.json();

        console.log(dataResponse);
        setData(dataResponse);
        console.log("i dati sono qua " + data);
      } catch (error) {
        console.log(error);
      }
    };
    if (data == undefined) {
      getData();
    }
  }, [data]);

  return (
    <div className={`${className}`}>
      {data?.map((mix, index) => {
        console.log(mix);
        return (
          <CardSlider
            key={index}
            className="h-auto shrink-0 flex-col flex w-5/6 snap-center gap-[0.6em]"
          >
            <ImgCustom
              imgPath={mix.img}
              titlevideo="NEFFEX - Summer ☀️"
              id={mix.mix_id}
              className="w-full min-h-[12em] flex justify-center items-center active:scale-90 transition-all"
            >
              {/* <p className="text-white text-[1.3em] font-mono">Mix 1</p> */}
            </ImgCustom>
          </CardSlider>
        );
      })}
      {/* Mix 1 */}
    </div>
  );
};

export default Slider;
