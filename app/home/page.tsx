"use client";
import React from "react";
import IntroOverlay from "@/components/IntroOverlay";
import Banner from "@/components/Banner";
import Cases from "@/components/Cases";

const Home = () => {
  return (
    <>
      <IntroOverlay />
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
