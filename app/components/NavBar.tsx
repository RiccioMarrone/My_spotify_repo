import React from "react";

//Atom
import BtnNav from "../atom/BtnNav";
const NavBar = () => {
  return (
    <nav className="fixed bottom-0  z-10 text-[21px]  w-full grid grid-cols-4 h-auto px-[1em] py-[0.6em] rounded-t-[2em]">
      {/* Bottone Home */}
      <BtnNav route={"home"} />
      {/* Bottone Cerca */}
      <BtnNav route={"search"} />
      {/* Bottone Playlist */}
      <BtnNav route={"libreria"} />
      {/* Bottone Download */}
      <BtnNav route={"scarica"} />
    </nav>
  );
};

export default NavBar;
