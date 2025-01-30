"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoggedInUser from "./loggedInUser";

const Navbar = () => {
  return (
    <>
      <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-50">
        <div className="container mx-auto flex justify-between items-center ">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Blog
          </Link>

          <div className="hidden md:flex space-x-4 items-center">
            <Link
              href="/"
              className=" px-3 py-1 rounded-full hover:bg-orange-500 transition-colors duration-300 border hover:border-black"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" px-3 py-1 rounded-full hover:bg-orange-500 transition-colors duration-300 border hover:border-black"
            >
              About
            </Link>
            <Link
              href="/blogs"
              className=" px-3 py-1 rounded-full hover:bg-orange-500 transition-colors duration-300 border hover:border-black"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className=" px-3 py-1 rounded-full hover:bg-orange-500 transition-colors duration-300 border hover:border-black"
            >
              Contact
            </Link>
            <div className="flex items-center justify-center gap-4">
              <ModeToggle />
              <LoggedInUser/>
            </div>
          </div>

          <div className="md:hidden flex gap-2 items-center justify-center">
            <Sheet>
              <span className="mx-2">
                <ModeToggle />
              </span>
              <SheetTrigger>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2 "
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </SheetTrigger>
              <LoggedInUser/>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold text-start ml-20 my-4">
                    My Blog
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col items-start text-center gap-10 ml-20">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="blogs">Blogs</Link>
                      <Link href="/contact">Contact</Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
