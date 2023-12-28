"use client";
import React from "react";
import { usePathname } from "next/navigation";
//?Home
import { IoMdHome } from "react-icons/io";
//?Search
import { CiSearch } from "react-icons/ci";
//?PlayList
import { PiPlaylistLight } from "react-icons/pi";
//?Download
import { FiDownload } from "react-icons/fi";

//Link
import Link from "next/link";
interface inputBtn {
  route: string;
}
const BtnNav = ({ route }: inputBtn) => {
  const nameRoute = usePathname();
  if (route == "home") {
    return (
      <Link
        href={"/"}
        className="flex flex-col justify-center items-center col-span-1 "
      >
        <IoMdHome
          className={`${
            nameRoute == "/" ? "text-red-500" : "notActive"
          } text-[1.5em]`}
        />
        <p
          className={` ${
            nameRoute == "/" ? "text-red-600" : "notActive"
          } font-thin text-[0.8em]`}
        >
          {route}
        </p>
      </Link>
    );
  } else if (route == "search") {
    return (
      <Link
        href={"/search"}
        className="flex flex-col justify-center items-center col-span-1"
      >
        <CiSearch
          className={`${
            nameRoute == "/search" ? "text-red-500" : "notActive"
          } text-[1.5em]`}
        />
        <p
          className={` ${
            nameRoute == "/search" ? "text-red-600" : "notActive"
          } font-thin text-[0.8em]`}
        >
          Cerca
        </p>
      </Link>
    );
  } else if (route == "libreria") {
    return (
      <Link
        href={"/playlist"}
        className="flex flex-col justify-center items-center col-span-1"
      >
        <PiPlaylistLight
          className={`${
            nameRoute == "/playlist" ? "text-red-500" : "notActive"
          } text-[1.5em]`}
        />
        <p
          className={` ${
            nameRoute == "/playlist" ? "text-red-600" : "notActive"
          } font-thin text-[0.8em]`}
        >
          {route}
        </p>{" "}
      </Link>
    );
  } else {
    return (
      <Link
        href={"/download"}
        className="flex flex-col justify-center items-center col-span-1"
      >
        <FiDownload
          className={`${
            nameRoute == "/download" ? "text-red-500" : "notActive"
          } text-[1.5em]`}
        />
        <p
          className={` ${
            nameRoute == "/download" ? "text-red-600" : "notActive"
          } font-thin text-[0.8em]`}
        >
          {route}
        </p>
      </Link>
    );
  }
};

export default BtnNav;
