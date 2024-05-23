"use client";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Cases from "@/components/Cases";
import IntroOverlay from "@/components/IntroOverlay";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function App() {

  useGSAP(() => {
    // prevent flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const tl = gsap.timeline();
    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.5,
      },
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".intro-overlay", 0, {css: {display: "none"}})
      .from(".case-img #product-img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -0.2,
        stagger: {
          amount: 0.4,
        },
      });
  });

  return (
    <main className="">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </main>
  );
}
