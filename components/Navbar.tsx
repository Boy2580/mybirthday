"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Navstyle.css";

export default function Navbar() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false); // state สำหรับ toggle menu

  const baseLinkClasses =
    "resolution transition-all duration-300 border rounded-full py-2 px-7 flex items-center justify-center text-sm leading-none pt-3 h-10";

  const getLinkClasses = (href: string) => {
    const isActive = currentPath === href;
    let classes = baseLinkClasses;
    if (href !== "/") {
      classes += " bg-black text-white border-black";
    }
    if (isActive) {
      if (href === "/") {
        classes = baseLinkClasses;
      } else {
        classes = `${baseLinkClasses} bg-[#FB9E3A] text-black border-[#FB9E3A] mt-2`;
      }
    }
    return classes;
  };

  return (
    <nav className="flex justify-between items-center px-10 relative">
      <div className="flex flex-1 items-center gap-4">
        <img src="/image/logo.jpg" alt="" className="w-10" />
        <div className="mt-2">
          <h1 className="md:text-2xl">The story</h1>
          <h1 className="md:text-2xl">to far</h1>
        </div>
      </div>

      <div className="flex-1 justify-center flex">
        <img src="/image/main_logo.png" alt="" className="w-30" />
      </div>

      {/* Hamburger สำหรับมือถือ */}
      <div className="flex-1 flex justify-end">
        <div className=" block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center gap-1 p-2 border rounded"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>

          {isOpen && (
            <div className="absolute bg-white rounded-2xl shadow-2xl px-5 top-26 right-6 flex flex-col items-center gap-3 py-4 z-50 w-[175px]">
              <Link href="/" className={getLinkClasses("/")} className="rounded-2xl w-full bg-white text-black border-2 text-center text-[15px] font-thin py-3">
                Home
              </Link>
              <Link href="/about" className={getLinkClasses("/about")} className="rounded-2xl w-full bg-black text-white text-center text-[15px] font-thin py-3">
                About
              </Link>
              <Link href="/portfolio" className="rounded-2xl w-full bg-black text-white text-center text-[15px] font-thin py-3">
                Portfolio
              </Link>
              <Link href="/love" className="rounded-2xl w-full bg-black text-white text-center text-[15px] font-thin py-3">
                Love
              </Link>
              <Link href="/timeline" className="rounded-2xl w-full bg-black text-white text-center text-[15px] font-thin py-3">
                Timeline
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-1 justify-end">
        <div className="flex gap-1 items-center">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>

          <div className="justify-center flex flex-col items-center">
            {currentPath === "/about" && (
              <img src="/nav/person.svg" alt="" className="w-5 icon-float-up" />
            )}
            <Link href="/about" className={getLinkClasses("/about")}>
              About
            </Link>
          </div>

          <div className="justify-center flex flex-col items-center">
            {currentPath === "/portfolio" && (
              <img
                src="/nav/portfolio.svg"
                alt=""
                className="w-5 icon-float-up"
              />
            )}
            <Link href="/portfolio" className={getLinkClasses("/portfolio")}>
              Portfolio
            </Link>
          </div>

          <div className="justify-center flex flex-col items-center">
            {currentPath === "/love" && (
              <img src="/nav/love.svg" alt="" className="w-5 icon-float-up" />
            )}
            <Link href="/love" className={getLinkClasses("/love")}>
              Love
            </Link>
          </div>

          <div className="justify-center flex flex-col items-center">
            {currentPath === "/timeline" && (
              <img
                src="/nav/timeline.svg"
                alt=""
                className="w-5 icon-float-up"
              />
            )}
            <Link href="/timeline" className={getLinkClasses("/timeline")}>
              Timeline
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
