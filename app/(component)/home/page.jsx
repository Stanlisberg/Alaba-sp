"use client";

import React from "react";
import FAQ from "@/app/(layout)/faq";
import Hero from "@/app/(layout)/hero";
import Product from "@/app/(layout)/product";
import Benefits from "@/app/(layout)/benefits";
import AppStore from "@/app/(layout)/appstore";
import Footer from "@/app/(layout)/footer";
import Testimonial from "@/app/(layout)/testimonial";
import Remarks from "@/app/(layout)/remarks";
import Marquee from "@/app/(layout)/marquee";
import Nav from "@/app/(layout)/nav";

function Home() {
  return (
    <main className="max-w-full overflow-hidden mx-auto ">
      <Nav />
      <Hero />
      <Marquee />
      <Product />
      <Benefits />
      <AppStore />
      <Testimonial />
      <Remarks />
      <FAQ />
      <Footer />
    </main>
  );
}

export default Home;
