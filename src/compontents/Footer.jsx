import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            <b>Bharat Market –</b> Bringing you the latest fashion trends with
            quality and affordability. Explore our best-selling collections,
            exclusive deals, and stylish outfits for every occasion. Enjoy fast
            delivery, secure payments, and excellent customer support. Shop with
            confidence at Bharat Market!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to={"tel:+918076790949"}>+91-807-679-0949</Link>
            <Link
              to={
                "https://mail.google.com/mail/?view=cm&fs=1&to=krishnapoddar504king@gmail.com"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              krishnapoddar504king@gmail.com
            </Link>
            <Link
              to={
                "https://www.instagram.com/official_krishna504?igsh=MWJrYXNoNnV5NDdmcA== "
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: Official_krishna504
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2025 Bharat Market. All Rights Reserved. | Your Style, Our
          Commitment.
        </p>
      </div>
    </div>
  );
};

export default Footer;
