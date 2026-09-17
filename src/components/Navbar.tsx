import { useState } from "react";
import logo from "../assets/logo-text.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="btn btn-ghost btn-circle lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 rounded bg-slate-900" />
            <span className="h-0.5 w-6 rounded bg-slate-900" />
            <span className="h-0.5 w-6 rounded bg-slate-900" />
          </span>
        </button>

        <a href="#home" className="shrink-0" aria-label="Dev Stack home">
          <img src={logo} alt="Dev Stack" className="h-9 w-auto" />
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#signin"
            className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="gradient-bg rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Sign Up
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="#signin" className="text-xs font-semibold text-slate-700">
            Sign In
          </a>
          <a
            href="#signup"
            className="gradient-bg rounded-full px-3.5 py-2 text-xs font-bold text-white"
          >
            Sign Up
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
