import React from "react";
import ArrowRight from "../assets/ArrowRight.svg";

type BannerProps = {
  lineSpan: React.RefObject<HTMLElement>;
};
const Banner = () => {
  return (
      <section className="main w-full h-[50vh] landscape:h-screen landscape:pt-4 bg-white relative block">
      <div className="w-full max-w-[1080px] mx-auto h-full">
        <div className="flex h-full flex-col justify-center px-4 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-bold z-30 text-white mix-blend-difference mt-[72px]">
            <div className="line mb-2 h-8 sm:h-12 relative overflow-hidden md:h-14 flex items-end">
              <span className="absolute">Creating Unique Brands is </span>
            </div>
            <div className="line mb-2 h-8 sm:h-12 relative overflow-hidden md:h-14">
              <span className="absolute">What we do.</span>
            </div>
          </h2>
          <div className="button-row w-[256px] relative z-[2]">
            <a
              href="#"
              className="flex items-center group font-semibold text-slate-900 h-8"
            >
              More about us
              <ArrowRight className="ml-4 h-8 w-8 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white border-2 border-slate-900 rounded-full p-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
