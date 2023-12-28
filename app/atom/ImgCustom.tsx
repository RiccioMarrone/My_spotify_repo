"use client";

//Immagini
import Mix1 from "../../public/media/Mix-1-cover.jpg";
import Mix2 from "../../public/media/Mix-2-cover.jpg";
import Mix3 from "../../public/media/Mix-3-cover.jpg";

//Link
import Link from "next/link";

//Funzioni Asincrone
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { changeId } from "@/features/BtnProgression";

interface ImgCustom {
  className?: string;
  children?: React.ReactNode;
  id: number;
  imgPath?: string;
  titlevideo?: string;
}
const ImgCustom: React.FC<ImgCustom> = ({
  className,
  children,
  id,
  imgPath,
  titlevideo,
}) => {
  //Array di dati

  const dispatch = useDispatch();
  //Verificare se immagine è visibile o meno
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  useEffect(() => {
    //? FUNZIONE PER ELIMARE TUTTI GLI ELEMENTI DI DEFAULTMIX TRANNE I PRIMI 3
    // const setData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8000", {
    //       method: "GET",
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    if (inView) {
      // L'elemento è ora visibile
      setIsVisible(true);
      dispatch(changeId(id));
    }
    // setData();
  }, [inView, dispatch, id]);

  return (
    <Link
      href={`/music/mix/${encodeURIComponent(id)}`}
      key={id}
      ref={ref}
      className={`${className}`}
    >
      <Image
        src={require(`../../public${imgPath}`)}
        alt={`Mix ${id}`}
        width={400}
        height={300}
      />
    </Link>
  );
};

export default ImgCustom;
