import React from "react";

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  const footer_link =
    "text-white hover:bg-white hover:text-blue-600 hover:p-2 hover:rounded-md duration-200";
  const footer_icon =
    "cursor-pointer text-2xl hover:bg-white hover:text-blue-600 hover:p-[2px] hover:rounded-md duration-200";
  return (
    <footer className="w-full bg-blue-600 text-white py-10 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Defensium Labs Privated Limited</h3>
          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab quo
            necessitatibus saepe. Saepe, aliquid.
          </p>
          <p className="text-white">
            &copy; {new Date().getFullYear()} Defensium Labs Private Limited.
            All rights reserved.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className={footer_link}>
                Tab
              </a>
            </li>
            <li>
              <a href="/gallery" className={footer_link}>
                Tab
              </a>
            </li>
            <li>
              <a href="/about" className={footer_link}>
                Tab
              </a>
            </li>
            <li>
              <a href="/contact" className={footer_link}>
                Tab
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-white mb-2">Lorem ipsum dolor sit amet.</p>
          <p className="text-white mb-2">
            Phone: <a href="tel:917906075750">(+91)-xxxxxxxxxx</a>
          </p>
          <p className="text-white mb-2">
            <a href="mailto:thegrandviewresort@gmail.com">
              Email: defensiumlabsprivatedlimited@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <IoLogoWhatsapp className={footer_icon} />
            <BiLogoInstagram className={footer_icon} />
            <FaFacebook className={footer_icon} />
            <BsTwitterX className={footer_icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
