"use client";
import Navbar from "@/components/Navbar";
import SideBar from "../../components/SideBar";

import { Hanken_Grotesk } from "next/font/google";
import { withAuth } from "../HOC/WithAuth";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${hanken.className} flex min-h-[100vh] bg-Darkverylight max-w-[2000px] mx-auto`}
    >
      {/* Sidebar */}
      <div className="relative bg-white">
        <div className="sticky top-0">
          <SideBar />
        </div>
      </div>

      <div className="flex-grow">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className={hanken.className}>{children}</div>
      </div>
    </div>
  );
}

export default withAuth(DashboardLayout);
