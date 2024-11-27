"use client";
import React from "react";
import ReportCard from "./ReportCards";

const DashBoard = () => {
  return (
    <div className="w-full   p-5 overflow-hidden">
      <h1 className="text-[32px] font-[700] text-text_color">Dashboard</h1>
      <ReportCard />
    </div>
  );
};

export default DashBoard;
