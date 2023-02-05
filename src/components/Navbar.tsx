import { useSession } from "next-auth/react";
import Link from "next/link";
import AccountDropdown from "./AccountDropdown";
import { AuthLogin } from "./AuthButtons";

const Navbar = () => {
  const { data: sessionData } = useSession();
  return (
    <nav className="navbar navbar-default navbar-fixed-top h-100 p-10">
      <div className="container mx-auto h-full">
        <div className="navbar-header flex h-full content-center items-center justify-between">
          <Link
            className="navbar-brand text-2xl text-[hsl(280,100%,70%)] "
            href="/"
          >
            Quest
          </Link>
          <div className="flex space-x-6  text-white">
            <Link className="hover:text-gray-300 " href="/about">
              About
            </Link>
            {sessionData ? <AccountDropdown /> : <AuthLogin />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
