import React from "react";
import Link from "next/link";

const Info = ({ name, title, date }) => {
  return (
    <div className="relative flex items-end w-full h-full p-5 bg-black md:p-10 bg-opacity-30">
      <div className="w-full space-y-5 text-white ">
        {date && <p>{date}</p>}
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lightGrey">by {name}</p>
        </div>

        <div className="border-t"></div>

        <div className="flex items-center justify-between">
          <Link href="/stories">
            <a className="tracking-widest uppercase"> Read Story</a>
          </Link>

          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Info;
