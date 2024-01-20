"use client";

export default function Navbar() {
  return (
    <header className="z-[1] md:z-[999] relative">
      <div className>
        <div className="md:hidden flex fixed top-[0.25rem] right-1 h-12 -translate-x-1/2 py-2">
          <button
            type="button"
            className="bg-white border-none bg-opacity-60 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                fill="currentColor"
              />
              <path
                d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                fill="currentColor"
              />
              <path
                d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <div
            className="hidden bg-white border-none overflow-hidden top-2 mr-5 ml-2 w-56 right-12 absolute rounded-lg"
            style={{
              opacity: 0,
              transform: "translateX(-100%) translateZ(0px)",
            }}
          >
            <a
              href="#home"
              className="px-2 py-2 text-lg block hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-black text-gray-700 dark:bg-gray-900 dark:text-gray-100 hover:text-black"
              style={{ opacity: 1, transform: "none" }}
            >
              {" "}
              {/* */}Home
            </a>
            <a
              href="#about"
              className="px-2 py-2 text-lg block hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-black text-gray-700 dark:bg-gray-900 dark:text-gray-100 hover:text-black"
              style={{ opacity: 1, transform: "none" }}
            >
              {" "}
              {/* */}About
            </a>
            <a
              href="#projects"
              className="px-2 py-2 text-lg block hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-black text-gray-700 dark:bg-gray-900 dark:text-gray-100 hover:text-black"
              style={{ opacity: 1, transform: "none" }}
            >
              {" "}
              {/* */}Projects
            </a>
            <a
              href="#skills"
              className="px-2 py-2 text-lg block hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-black text-gray-700 dark:bg-gray-900 dark:text-gray-100 hover:text-black"
              style={{ opacity: 1, transform: "none" }}
            >
              {" "}
              {/* */}Skills
            </a>
            <a
              href="#experience"
              className="px-2 py-2 text-lg block hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-black text-gray-700 dark:bg-gray-900 dark:text-gray-100 hover:text-black"
              style={{ opacity: 1, transform: "none" }}
            >
              {" "}
              {/* */}Experience
            </a>
            <a
              href="#contact"
              className="px-2 py-2 text-lg block hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-black text-gray-700 dark:bg-gray-900 dark:text-gray-100 hover:text-black"
              style={{ opacity: 1, transform: "none" }}
            >
              {" "}
              {/* */}Contact
            </a>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-40"
        style={{
          opacity: 1,
          transform: "translateX(-50%) translateY(0px) translateZ(0px)",
        }}
      />
      <nav className="hidden md:block fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 text-gray-950 dark:text-white"
              href="#home"
            >
              Home
              <span
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              />
            </a>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#about"
            >
              About
            </a>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
