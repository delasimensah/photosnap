import React from "react";

const PriceCard = ({ billing, info }) => {
  return (
    <div
      className={`relative ${
        info.active && "lg:transform lg:scale-y-110 lg:scale-x-105 "
      }`}
    >
      {info.active && (
        <div className="absolute top-0 left-0 w-full h-1 md:h-full lg:h-1 md:w-1 lg:w-full bg-gradient-to-r md:bg-gradient-to-b lg:bg-gradient-to-r from-tertiary via-secondary to-primary" />
      )}

      <div
        className={`py-10 px-7 text-center md:text-left lg:text-center text-gray-600  ${
          info.active ? "bg-black " : "bg-lightGrey"
        }`}
      >
        <div className="md:grid md:grid-cols-2 lg:block">
          <div className="space-y-10">
            <h1
              className={`font-bold text-3xl ${
                info.active ? "text-white" : "text-black"
              }`}
            >
              {info.plan}
            </h1>

            <p>{info.info}</p>

            <div className="md:hidden lg:block">
              <p
                className={`text-4xl tracking-wider font-bold ${
                  info.active ? "text-white" : "text-black"
                }`}
              >
                {billing ? info.yearly : info.monthly}
              </p>

              <p>{billing ? "per year" : "per month"}</p>
            </div>

            <button
              className={`hover:bg-gray-400 w-4/5 py-3 uppercase tracking-wider text-xs ${
                info.active ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Pick Plan
            </button>
          </div>

          <div className="hidden text-right md:block lg:hidden">
            <p
              className={`text-4xl tracking-wider font-bold ${
                info.active ? "text-white" : "text-black"
              }`}
            >
              {billing ? info.yearly : info.monthly}
            </p>

            <p>{billing ? "per year" : "per month"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
