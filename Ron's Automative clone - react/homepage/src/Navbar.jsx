import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-end px-8 py-2 relative">
      <div className="absolute top-2 left-8 w-36 h-36 rounded-full bg-white flex items-center justify-center z-10">
        <img src="/logo.svg" alt="Logo" className="w-3/5 h-auto" />
      </div>

      <button
        className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-20 ml-auto md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-8 h-[3px] bg-gray-800 rounded transition-all duration-300 ${ isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-8 h-[3px] bg-gray-800 rounded transition-all duration-300 ${ isOpen ? "opacity-0" : "" }`}
        />
        <span
          className={`w-8 h-[3px] bg-gray-800 rounded transition-all duration-300 ${ isOpen ? "-rotate-45 -translate-y-2" : "" }`}/>
      </button>

      <div
        className={`${ isOpen ? "flex flex-col gap-8 absolute top-full left-0 w-full bg-white shadow-md p-8 z-10" : "hidden" } md:flex md:flex-row md:items-center md:gap-8 md:ml-auto`}
      >

        <ul className="flex flex-col md:flex-row gap-6 md:ml-48 md:mr-12 list-none p-0 m-0">
          <li>
            <a href="#" className="text-lg text-black no-underline transition-colors duration-300 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-black no-underline transition-colors duration-300 hover:text-blue-500">
              Cars
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-black no-underline transition-colors duration-300 hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-black no-underline transition-colors duration-300 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-black no-underline transition-colors duration-300 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>


        <div className="flex flex-col md:flex-row gap-4 md:gap-2 border md:border-blue-500 rounded-full p-2 md:p-1">
          <a href="#" className="bg-blue-500 text-white rounded-full px-4 py-2 text-center">
            Login
          </a>
          <a href="#" className="bg-transparent text-blue-500 rounded-full px-4 py-2 text-center">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
