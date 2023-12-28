import React from "react";
import Wave from "../../../../public/media/wave.png";
//Componenti
import TopHeader from "@/app/atom/TopHeader";
import Link from "next/link";

//Icone
import { BsArrowReturnLeft } from "react-icons/bs";

const DettaglioMix = () => {
  return (
    <>
      <TopHeader className="relative h-[60vh] bg-black w-full flex p-0 flex-col">
        <div className=" h-3/5 w-full px-[1em] flex pt-[2em]">
          {/*Back*/}
          <Link href={"/"} className="w-1/3 h-full flex items-start ">
            <BsArrowReturnLeft
              color="white"
              className="text-[1.2em] active:scale-105 transition-all"
            />
          </Link>
        </div>

        {/* Sfondo */}
        <div className="relative h-2/5 w-full  p-0 wave-header border-white translate-y-4 "></div>
      </TopHeader>
    </>
  );
};

export default DettaglioMix;
