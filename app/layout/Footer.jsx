import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-12 pt-14 md:pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          <div className="block">
            <h4 className="footHead text-lg md:text-2xl text-black mb-4 md:mb-12 font-medium md:font-normal">
              Job Seekers
            </h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-3 footLink">
                <a href="javascript:;" className="hover:text-black">
                  Home
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  About
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Pricing
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Features
                </a>
              </li>
              <li className="footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Pro Version
                </a>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="footHead text-lg md:text-2xl text-black mb-4 md:mb-12 font-medium md:font-normal">
              Solutions for Employers
            </h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Figma UI System
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Icons Assets
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Responsive Blocks
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Components Library
                </a>
              </li>
              <li className="footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Plugin Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="footHead text-lg md:text-2xl text-black mb-4 md:mb-12 font-medium md:font-normal">
              Company
            </h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-3 footLink">
                <a href="javascript:;" className="hover:text-black">
                  FAQs
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Quick Start
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Documentation
                </a>
              </li>
              <li className="mb-3 footLink">
                <a href="javascript:;" className=" hover:text-black">
                  User Guide
                </a>
              </li>
              <li className="footLink">
                <a href="javascript:;" className=" hover:text-black">
                  Plugin Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden py-7 border-y border-gray-200 sm:block">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
            <a href="/" className="-m-1.5 p-1.5 flex 	items-center gap-2">
              <Image alt="" src={Logo} className="h-8 w-auto" />
              <span className="text-black	items-center ">
                Home Care Insights
              </span>
            </a>

            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 footLink">
              <a href="javascript:;" className="">
                Privacy Police
              </a>
              <a href="javascript:;" className="">
                California Privacy Notice
              </a>
              <a href="javascript:;" className="">
                Terms of Use
              </a>
              <a href="javascript:;" className="">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="my-12 text-center footCopyRight">
          <p>Inc © {currentYear} All Rights Reserved Worldwide </p>
        </div>
      </div>
    </footer>
  );
}
