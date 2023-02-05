import { useSession } from "next-auth/react";
import AccountDropdown from "./AccountDropdown";
import { AuthLogin } from "./AuthButtons";

const navbar = () => {
  const { data: sessionData } = useSession();
  return (
    <nav className="navbar navbar-default navbar-fixed-top h-100 p-10">
      <div className="container mx-auto h-full">
        <div className="navbar-header flex h-full content-center items-center justify-between">
          <a
            className="navbar-brand text-2xl text-[hsl(280,100%,70%)] "
            href="/"
          >
            Quest
          </a>
          <div className="flex space-x-6  text-white">
            <a className="hover:text-gray-300 " href="/about">
              About
            </a>
            {sessionData ? <AccountDropdown /> : <AuthLogin />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
