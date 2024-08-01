"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Logo from "../assets/images/logo.svg";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-y border-gray-200">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:hidden sm:w-20">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="flex lg:flex-1 sm:w-80">
          <Link href="/" className="-m-1.5 p-1.5 flex 	items-center gap-2">
            <Image alt="" src={Logo} className="h-8 w-auto" />
            <span className="text-black	items-center ">Home Care Insights</span>
          </Link>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/talent-reports"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Industry Talent Reports
          </Link>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="https://www.talentify.io"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              For employers in home health{" "}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-end justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/talent-reports"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Industry Talent Reports
                </Link>

                <div className=" lg:flex lg:flex-1 lg:justify-end">
                  <Link
                    href="https://www.talentify.io"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    For employers in home health{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
