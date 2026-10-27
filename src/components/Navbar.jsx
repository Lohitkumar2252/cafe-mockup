

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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full bg-[#F8F7ED] px-4 sm:px-8 lg:px-16">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavigation("Home")}
          className="shrink-0"
        >
          <img
            src="/serialChillerLogo.jpg"
            alt="Cafe logo"
            className="h-[60px] w-[60px] rounded-full object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavigation(link.name)}
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

        {/* Desktop CTA */}
        <Link
          to="/location"
          className="hidden rounded-full bg-[#B77900] px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#966200] md:inline-flex lg:px-9"
        >
          Visit Now
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#222222] transition-colors hover:bg-black/5 md:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex h-fit w-6 flex-col items-center gap-[5px]">
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full border-t border-black/5 bg-[#F8F7ED] px-5 shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavigation(link.name)}
              className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                activeLink === link.name
                  ? "bg-[#FF6666]/10 font-semibold text-[#222222]"
                  : "text-[#666666] hover:bg-black/5 hover:text-[#222222]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/location"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-[#B77900] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#966200]"
          >
            Visit Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
