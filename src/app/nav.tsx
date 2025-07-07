"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Navigation öffnen/schließen"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent z-10`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <li>
            <Link href="/" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
             Mein Portfolio
            </Link>
          </li>
          <li>
            <Link href="/team" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              Team
            </Link>
          </li>

          {/*
          <li>
            <Link href="/blog" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            
          </li>
          */}  
          
          <li>
            <Link href="/contact" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
