"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { getCookieValue } from "@/api/cookies";
import { COOKIE_NAMES } from "@/api/constant";

const Navbar = () => {
  const companyData = getCookieValue(COOKIE_NAMES.COMPANY_DATA) || "";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const today = moment();
  return (
    <div className="bg-white p-4 ">
      <div className="text-center text-[30px] font-bold">
        🌲 {companyData || ""}🌲
      </div>
      <div className="flex justify-between">
        <section className="">{today.format("dddd DD MMM. YYYY")}</section>
        <section className="flex gap-6  items-center">
          <IoNotificationsOutline size={"1.4em"} />
          <div
            // onClick={handleOnclik}
            className=" cursor-pointer hover:text-RedDefault flex gap-1 ml-3 items-center"
          >
            <RxAvatar size={"1.4em"} />
            <p>Admin</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
