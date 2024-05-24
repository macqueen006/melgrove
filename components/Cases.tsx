import React from "react";
import CaseLeft from "@/assets/ArrowLeft.svg";
import CaseRight from "@/assets/ArrowRight.svg";
import Image from "next/image";
const products = [
  {
    id: 1,
    subTitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "https://images.unsplash.com/photo-1564202168065-5af4edeba2ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    subTitle: "Your space",
    title: "Open space floor plan for your next ventures",
    img: "https://images.unsplash.com/photo-1601534622119-e9b3aa7c7bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    subTitle: "Lumin",
    title: "For your best look ever",
    img: "https://images.unsplash.com/photo-1616595286596-f0b561c76bc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
];

const Cases = () => {
  return (
    <section className="cases relative block w-full">
      <div className="container-fluid w-full h-full relative">
        <div className="cases-navigation absolute bottom-0 w-full hidden sm:flex justify-between items-center z-10 px-8 pb-6">
          <div className="cases-arrow prev disabled bg-slate-900/25 h-12 w-12 rounded-full grid place-content-center">
            <CaseLeft className="h-6 w-6 stroke-white/50" />
          </div>
          <div className="cases-arrow bg-slate-900/25 h-12 w-12 rounded-full grid place-content-center next">
            <CaseRight className="h-6 w-6 stroke-white" />
          </div>
        </div>
        <div className="row flex flex-col sm:flex-row w-full h-full z-[1]">
          {products.map((item) => (
            <div
              key={item.id}
              className="case relative cursor-pointer bg-black z-[6] group sm:w-1/3 block h-full overflow-hidden"
            >
              <div className="case-details w-full h-[50vh] text-white flex flex-col justify-center p-4 sm:p-8 relative z-[3]">
                <span className="text-sm mt-[156px] sm:mt-[90px]">{item.subTitle}</span>
                <h2 className="font-bold mt-2 text-lg w-[85%] sm:w-[90%]">{item.title}</h2>
              </div>
              <div className="case-img w-full h-full absolute opacity-60 group-hover:opacity-40 transition-all duration-300 top-0 left-0 overflow-hidden z-[2]">
                <Image
                  id="product-img"
                  layout="fill"
                  objectFit="cover"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
