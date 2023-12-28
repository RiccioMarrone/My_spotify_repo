import React from "react";
import CardSlider from "../atom/CardSlider";
import Slider from "./Slider";
import ImgCustom from "../atom/ImgCustom";
import BtnLoading from "../atom/BtnLoading";

interface Loader {
  children?: React.ReactNode;
}
const Loader: React.FC<Loader> = ({ children }) => {
  return (
    <Slider className="min-h-[96] h-auto w-full  flex snap-x snap-mandatory text-[18px] overflow-x-scroll  gap-5">
      <CardSlider className="h-auto shrink-0 flex-col flex w-5/6 snap-center gap-[0.6em]">
        <ImgCustom
          id={1}
          className="w-full min-h-[12em] flex justify-center items-center active:scale-90 transition-all"
        >
          <BtnLoading className="h-auto" />
        </ImgCustom>
      </CardSlider>
    </Slider>
  );
};

export default Loader;
