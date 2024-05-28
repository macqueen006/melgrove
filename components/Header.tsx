import React from "react";

const Header = () => {
  return (
      <div className="header fixed top-0 w-full h-24 sm:h-32 z-10 bg-white/60 bg-clip-padding backdrop-blur-2xl">
      <div className="w-full max-w-[1080px] h-full mx-auto">
        <div className="row flex h-full px-4 lg:px-8 items-center justify-between">
          <div className="logo">
            <a href="#" className="font-bold tracking-widest text-slate-900 leading-[0.5rem]">
              AGENCY.
            </a>
          </div>
          <div className="nav w-5 sm:w-6">
            <span className="h-[2px] bg-slate-900 mb-[.3rem] w-full block"></span>
            <span className="h-[2px] bg-slate-900 mb-[.3rem] w-full block"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
