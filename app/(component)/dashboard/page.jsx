import React from "react";
import Navbar from "@/app/(layout)/navbar/page";

export default function Landing({ children }) {
  return (
    <section>
      <Navbar />
      <div className="bg-gray-100 pt-24 pb-10 pl-5 lg:pl-[14.5rem] pr-5">
        {" "}
        {children}
      </div>
    </section>
  );
}
