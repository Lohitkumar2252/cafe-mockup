
import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Workshops", href: "/workshops" },
  { name: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="w-full bg-[#F8F7ED] px-4 sm:px-8 lg:px-16">
      <div className="relative mx-auto flex h-[82px] max-w-[1440px] items-center justify-between">

        {/* Logo */}
        <a href="#home" className="shrink-0">
          <img
            src="/serialChillerLogo.jpg"
            alt="Cafe logo"
            className="h-[60px] w-[60px] rounded-full object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`relative py-2 text-sm transition-colors duration-200 ${
                activeLink === link.name
                  ? "font-semibold text-[#222222]"
                  : "font-normal text-[#666666] hover:text-[#222222]"
              }`}
            >
              {link.name}

              {activeLink === link.name && (
                <span className="absolute -bottom-0.5 left-0 h-[4px] w-full rounded-full bg-[#FF6666]" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/location"
          className="rounded-full bg-[#B77900] px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#966200] sm:px-9"
        >
          Visit Now
        </Link>
      </div>
    </nav>
  );
}
