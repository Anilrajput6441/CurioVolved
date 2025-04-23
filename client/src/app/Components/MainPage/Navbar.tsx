"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="mx-auto  px-4 bg-[#f0f0f0] shadow-[0_4px_20px_rgba(255,255,255,0.3)] sm:px-6 text-black lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://cdn.pixabay.com/photo/2022/01/16/16/44/blogger-logo-6942640_1280.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-black pl-2 text-xl md:text-2xl">
            Curio<span className="text-[#FF5757]">Volved</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex  items-center gap-13 lg:text-[2.35vmin] xl:text-[2.15vmin]">
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/allblogs" className="hover:text-blue-600">
            Blogs
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/login" className="hover:text-blue-600">
            Login
          </Link>
          <Link href="/terms" className="hover:text-blue-600">
            Terms
          </Link>
          <Link href="/cmslogin">
            <button className="bg-[#ff5757] text-white px-4 py-2  hover:bg-[#ff4242] transition cursor-pointer">
              Contribute
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white text-black shadow-md">
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="/blogs" className="block hover:text-blue-600">
            Blogs
          </Link>
          <Link href="/login" className="block hover:text-blue-600">
            Login
          </Link>
          <Link href="/contribute">
            <button className="w-full bg-[#ff5757] text-white px-4 py-2 hover:bg-[#ff4242] transition cursor-pointer">
              Contribute
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
