import { Footer } from "flowbite-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CustomFooter() {
  return (
    <Footer container={true}>
      <div className=" w-full flex justify-between border-t-2 border-gray-500 mx-20">
        <div className="text-md mt-4">
          <p>© {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4 mt-4">
          <Link to="https://www.facebook.com" target="_blank" className="text-white">
            <FaFacebookF size={24} />
          </Link>
          <Link to="https://www.instagram.com" target="_blank" className="text-white">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </Footer>
  );
}
