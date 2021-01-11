import React from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

const Navbar = () => {
  const links = [
    { link: "/stories", title: "stories" },
    { link: "/features", title: "features" },
    { link: "/pricing", title: "pricing" },
  ];

  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="px-5 py-5 lg:px-24">
      <div className="flex items-center justify-between">
        <div className="">
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="" />
            </a>
          </Link>
        </div>

        <div className="">
          <ul className="hidden space-x-10 text-sm tracking-widest uppercase md:flex">
            {links.map((link, idx) => {
              return (
                <li key={idx} className="hover:text-lightGrey">
                  <Link href={link.link}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* mobile menu */}
          <button onClick={toggleMenu} className="md:hidden">
            {open ? (
              <img src="/close.svg" alt="" className="w-6" />
            ) : (
              <img src="/menu.svg" alt="" className="h-3 w-7" />
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <Link href="/pricing">
            <a className="px-6 py-2 text-sm tracking-widest text-white uppercase bg-black hover:text-black hover:bg-lightGrey">
              get an invite
            </a>
          </Link>
        </div>
      </div>

      {open && (
        <Zoom>
          <div className="absolute left-0 z-40 w-screen h-screen bg-black top-16 bg-opacity-30">
            <div className="flex flex-col items-center justify-center py-4 space-y-4 bg-white">
              <ul className="space-y-3 uppercase list-none">
                {links.map((link, idx) => {
                  return (
                    <li key={idx} className=" hover:text-lightGrey">
                      <Link href={link.link}>
                        <a>{link.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t w-80 border-lightGrey"></div>

              <Link href="/pricing">
                <a className="flex items-center justify-center py-2 text-sm tracking-widest text-white uppercase bg-black w-80 hover:text-black hover:bg-lightGrey">
                  get an invite
                </a>
              </Link>
            </div>
          </div>
        </Zoom>
      )}
    </nav>
  );
};

export default Navbar;
