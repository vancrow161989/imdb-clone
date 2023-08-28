import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/">
            <AiFillHome className="sm:hidden" />
            <span className="hidden sm:inline-block">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <BsFillInfoCircleFill className="sm:hidden" />
            <span className="hidden sm:inline-block">About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
