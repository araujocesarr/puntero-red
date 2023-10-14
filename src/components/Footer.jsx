import React from "react";
import logo from "../images/rectangle-608@2x.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-whitesmoke-100 py-16 px-6 xl:px-14">
        <div className="flex justify-between items-start flex-wrap gap-y-8">
          <div className="min-w-[140px]">
            <h1 className="text-gray-200 font-semibold mb-5">Company</h1>
            <div className="flex flex-col space-y-3 text-sm text-midnight-blue-100">
              <p>About</p>
              <p>Affiliate</p>
              <p>Careers & Culture</p>
              <p>Blog</p>
              <p>Press</p>
            </div>
          </div>

          <div className="min-w-[140px]">
            <h1 className="text-gray-200 font-semibold mb-5">About Us</h1>
            <div className="flex flex-col space-y-3 text-sm text-midnight-blue-100">
              <p>Support Center</p>
              <p>Customer Support</p>
              <p>About Us</p>
              <p>Copyright</p>
              <p>Popular Campaign</p>
            </div>
          </div>

          <div className="min-w-[140px]">
            <h1 className="text-gray-200 font-semibold mb-5">
              Our Information
            </h1>
            <div className="flex flex-col space-y-3 text-sm text-midnight-blue-100">
              <p>Return Policy</p>
              <p>Terms & Conditions</p>
              <p>Site Map</p>
              <p>Store Hours</p>
            </div>
          </div>

          <div className="min-w-[140px]">
            <h1 className="text-gray-200 font-semibold mb-5">My Account</h1>
            <div className="flex flex-col space-y-3 text-sm text-midnight-blue-100">
              <p>Press inquiries</p>
              <p>Social media</p>
              <p>directories</p>
              <p>Images & B-roll</p>
              <p>Permissions</p>
            </div>
          </div>

          <div className="min-w-[140px]">
            <h1 className="text-gray-200 font-semibold mb-5">Policy</h1>
            <div className="flex flex-col space-y-3 text-sm text-midnight-blue-100">
              <p>Application security</p>
              <p>Software principles</p>
              <p>Unwanted software policy</p>
              <p>Responsible supply chain</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 space-y-3">
          <div className="flex justify-center flex-col items-center text-sm">
            <img
              src={logo}
              alt=""
              className="filter brightness-110 mix-blend-multiply w-1/2 xl:w-1/3"
            />
            <p className="text-gray-200">Copyright by 2019 Redq, Inc</p>
          </div>
          <p className="text-center text-sm text-midnight-blue-100">
            Home Adversite Supports Marketing FAQ
          </p>
        </div>
      </footer>
    </>
  );
}
