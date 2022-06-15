import Link from "next/link";
import { FiMenu, FiShoppingCart, FiSearch } from "react-icons/fi";
import Button from "../buttons/Button";
import { logo } from "../../constants/strings";

function Nav() {
  const signedIn = true;

  return (
    <>
      <nav className="py-5 px-custom grid gap-5 grid-cols-12 grid-flow-col-dense">
        {/* Hamburger menu and logo */}
        <div className="col-span-6 md:col-span-3 flex items-center gap-5">
          <FiMenu className="icon text-accent" />
          <Link href={"/"}>
            <a className="text-xl font-bold text-accent">{logo}</a>
          </Link>
        </div>

        {/* Search bar */}
        <div className="col-span-12 md:col-span-6 row-start-2 md:row-start-1 border-2 border-accent rounded-md flex items-center justify-between gap-2 text-white">
          <input
            className=" w-full bg-transparent outline-none p-3 text-accent"
            type="text"
            placeholder="Serch Redux Store.."
          />
          <div className="bg-accent p-3 cursor-pointer hover:opacity-90 transition">
            <FiSearch className="icon text-white" />
          </div>
        </div>

        {/* Profile and cart */}
        <div className="col-span-6 md:col-span-3 flex items-center gap-5 place-content-end">
          {!signedIn ? (
            <Button title="Login" />
          ) : (
            <div className="bg-accent/20 w-12 h-12 rounded-full cursor-pointer hover:opacity-90" />
          )}
          <div className="relative cursor-pointer group">
            <FiShoppingCart className="w-10 h-10" />
            <p className="absolute -top-2 -right-2 bg-red-600 group-hover:bg-red-700 transition text-white w-5 h-5 rounded-full flex items-center justify-center text-sm">
              1
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
