import React from "react";
import { getServerSession } from "next-auth";
//icone
import { FaRegCircleUser } from "react-icons/fa6";

const BtnUser = async () => {
  const session = await getServerSession();
  if (session) {
    return <div></div>;
  } else {
    return (
      <span>
        <FaRegCircleUser className="btnUser text-[1.8em]" />
      </span>
    );
  }
};

export default BtnUser;
