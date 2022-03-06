import { logo } from "../../constants/strings";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-accent/10 py-5 px-custom gap-5 flex flex-col md:flex-row justify-between">
      {/* Links */}
      <div className="space-y-2">
        <Link href={"/"}>
          <a className="text-2xl font-bold">{logo}</a>
        </Link>
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Other Shops</li>
          <li>Developers</li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="space-y-2">
        <p className="text-2xl font-bold">Social</p>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
