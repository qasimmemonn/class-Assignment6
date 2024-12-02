import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top Section */}
      <div className="py-10 mt-20 px-20 text-center md:text-left md:flex md:justify-between md:items-center">
        <div>
          <h2 className="text-lg font-bold">Subscribe to our newsletter</h2>
          <p className="text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="mt-6 md:mt-0 flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
          <p className="text-gray-600 mt-2 text-xs">
            By subscribing you agree to with our
            <span className="underline"> Privacy Policy</span>
          </p>
        </div>
      </div>

      {/* Middle Section */}

      <div className="py-16 px-20 grid grid-cols-1 sm:grid-cols-4 gap-4 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <p className="text-2xl font-bold flex items-center space-x-2">
              <Image
                src="/images/foologo.png"
                alt="logo"
                width={30}
                height={30}
              ></Image>
              <span className="text-gray-700">Ddsgnr</span>
            </p>
          </Link>
        </div>

        <div>
          <h3 className="font-bold text-gray-700">Courses</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:underline">
                Business{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Technology
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Programming
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-700">Resources</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:underline">
                Career
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Resume
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Learning
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Interview Preparation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Jobs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-700">About Us</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Help/Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Partners
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*Copyright & Social Icons */}
      <div className="border-t-2 border-gray-700 py-5 mx-20 text-center md:flex md:justify-between md:items-center">
        <div className="container mx-auto py-6 flex flex-col md:flex-row  items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © 2025 Qasim Menon. All rights reserved.
          </p>

          <div className="flex pl-4 space-x-4 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-gray-800 transition hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-800 transition hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-gray-800 transition hover:underline"
            >
              Cookies Settings
            </a>
          </div>
        </div>

        <div className="flex space-x-4 justify-center">
          <a href="#" className="text-gray-500 hover:text-black transition-all">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition-all">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
