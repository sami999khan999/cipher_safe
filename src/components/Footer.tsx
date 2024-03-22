import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section */}
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>

          {/* Middle section with navigation links */}

          {/* Right section with social media icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 CipherSafe. All rights reserved.</p>
          <p>Designed by Sami</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
