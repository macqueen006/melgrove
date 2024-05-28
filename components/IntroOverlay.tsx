import React from "react";

const IntroOverlay = () => {
    return <>
        <div className="intro-overlay">
            <div className="top h-[50vh] landscape:h-[400px] absolute w-full z-20 top-0">
                <div className="overlay-top absolute w-full sm:w-1/3 h-full bg-black bottom-0 left-0 right-0"></div>
                <div className="overlay-top absolute w-1/3 h-full bg-black bottom-0 left-1/3 hidden sm:block"></div>
                <div className="overlay-top absolute w-1/3 h-full bg-black bottom-0 left-2/3 hidden sm:block"></div>
            </div>
            <div className="bottom h-[50vh] landscape:top-[400px] landscape:inline-block absolute w-full z-20 bottom-0">
                <div className="overlay-bottom absolute w-full sm:w-1/3 h-full bg-black bottom-0 right-0 sm:right-2/3"></div>
                <div className="overlay-bottom absolute w-full sm:w-1/3 h-full bg-black bottom-0 top-full sm:top-0 sm:right-1/3"></div>
                <div className="overlay-bottom absolute w-full sm:w-1/3 h-full bg-black bottom-0 top-[200%] sm:top-0 right-0"></div>
            </div>
      </div>
  </>;
};

export default IntroOverlay;
