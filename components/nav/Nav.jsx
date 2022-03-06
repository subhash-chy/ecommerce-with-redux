import Link from "next/link";
import { FiMenu, FiShoppingCart, FiSearch } from "react-icons/fi";
import Button from "../buttons/Button";
import { logo } from "../../constants/strings";

function Nav() {
  const signedIn = true;

  return (
    <>
      <nav className="bg-accent/10 py-5 px-custom grid gap-5 grid-cols-12 grid-flow-col-dense">
        {/* Hamburger menu and logo */}
        <div className="col-span-6 md:col-span-3 flex items-center gap-5">
          <FiMenu className="icon" />
          <Link href={"/"}>
            <a className="text-md font-bold">{logo}</a>
          </Link>
        </div>

        {/* Search bar */}
        <div className="col-span-12 md:col-span-6 row-start-2 md:row-start-1 bg-gray-700 rounded-md flex items-center justify-between gap-2 px-3 py-1">
          <input
            className=" w-full bg-transparent outline-none"
            type="text w-full"
            placeholder="Serch Redux Store.."
          />
          <FiSearch className="icon text-placeholder" />
        </div>

        {/* Profile and cart */}
        <div className="col-span-6 md:col-span-3 flex items-center gap-5 place-content-end">
          {!signedIn ? (
            <Button title="Login" />
          ) : (
            <div className="bg-accent/20 w-8 h-8 rounded-full"></div>
          )}
          <div className="relative">
            <FiShoppingCart className="icon" />
            <p className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-sm">
              1
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
