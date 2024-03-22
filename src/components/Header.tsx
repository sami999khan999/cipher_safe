import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="bg-slate-800">
      <div className="wrapper h-14 md:h-20 mx-auto px-4 flex justify-between items-center">
        <Logo />

        <div>
          <SignedOut>
            <Link to="/sign-in ">
              <button type="button" className="button">
                Login
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
