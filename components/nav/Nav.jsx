import Link from "next/link";
import { FiMenu, FiShoppingCart, FiSearch } from "react-icons/fi";
import Button from "../buttons/Button";
import { logo } from "../../constants/strings";

function Nav() {
  const signedIn = true;

  return (
    <nav className=" px-custom flex items-center justify-between gap-3 py-2">
      <p className="font-bold">{logo}</p>

      {/* search */}
      <div className="hidden md:flex flex-grow items-center w-full max-w-2xl h-full bg-red-200 border border-red-200 rounded-md">
        <div className="bg-white flex items-center rounded-l-md flex-grow">
          <input
            className="py-1 px-2 outline-none flex-grow rounded-l-md"
            placeholder="search"
            type="text"
          />
        </div>
        <div className="input-icon px-2">
          <FiSearch className="icon" />
        </div>
      </div>
      {/* search ends */}

      <div className="flex items-center justify-center gap-2">
        <div className="w-7 h-7 rounded-full bg-green-400"></div>
        <div className="relative cursor-pointer group">
          <FiShoppingCart className="icon" />
          <p className="absolute -top-2 -right-2 bg-red-600 group-hover:bg-red-700 transition text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">
            1
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
