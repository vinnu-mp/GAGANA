import { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // ✅ IMPORT THIS
gsap.registerPlugin(useGSAP);
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinksRef = useRef([]);
  navLinksRef.current = [];

  //   useGSAP(() => {
  //     const ctx = gsap.context(() => {
  //       gsap.from(navLinksRef.current, {
  //         y: 30,
  //         opacity: 0,
  //         duration: 0.6,
  //         ease: "power2.out",
  //         stagger: 0.15,
  //       });
  //     });

  //     return () => ctx.revert(); // prevents flicker on re-render
  //   }, []);

  return (
    <nav
      className="
      fixed top-0 w-full h-16 px-6
      flex items-center justify-between
      backdrop-blur-xl bg-white/10 border-b border-white/20
      shadow-lg z-50
    "
    >
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Link to="/">
          <img
            src={logo}
            alt="GAGANA Logo"
            className="scale-175 rounded-full h-10 w-auto drop-shadow-lg transition-transform duration-300 hover:scale-150"
          />
        </Link>
      </div>

      {/* RIGHT: DESKTOP LINKS */}
      <div className="hidden md:flex gap-8 text-white">
        <Link
          ref={(el) => (navLinksRef.current[0] = el)}
          to="/news"
          className="hover:text-gray-200 transition nav-link"
        >
          News
        </Link>
        <Link
          ref={(el) => (navLinksRef.current[1] = el)}
          to="/facts"
          className="hover:text-gray-200 transition nav-link"
        >
          Facts
        </Link>
        <Link
          ref={(el) => (navLinksRef.current[2] = el)}
          to="https://w21030911.nuwebspace.co.uk/graphics/assessment/"
          className="hover:text-gray-200 transition nav-link"
        >
          3D Solar
        </Link>
        <Link
          ref={(el) => (navLinksRef.current[2] = el)}
          to="/ai"
          className="hover:text-gray-200 transition nav-link"
        >
          AI
        </Link>
        <Link
          ref={(el) => (navLinksRef.current[3] = el)}
          to="/quiz"
          className="hover:text-gray-200 transition nav-link"
        >
          Quiz
        </Link>
        <Link
          ref={(el) => (navLinksRef.current[4] = el)}
          to="/profile"
          className="hover:text-gray-200 transition nav-link"
        >
          Profile
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden flex flex-col gap-1.5 group"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-7 h-0.75 bg-white rounded transition ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-7 h-0.75 bg-white rounded transition ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-7 h-0.75 bg-white rounded transition ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
          absolute top-16 right-0 w-48 p-6
          flex flex-col gap-4
          bg-white/10 backdrop-blur-xl border-l border-white/20
          shadow-xl md:hidden
        "
        >
          <Link
            to="/news"
            className="text-white hover:text-gray-200"
            onClick={() => setOpen(false)}
          >
            News
          </Link>
          <Link
            to="/facts"
            className="text-white hover:text-gray-200"
            onClick={() => setOpen(false)}
          >
            Facts
          </Link>
          <Link
            to="https://w21030911.nuwebspace.co.uk/graphics/assessment/"
            className="text-white hover:text-gray-200"
            onClick={() => setOpen(false)}
          >
            3D Solar
          </Link>
          <Link
            to="/quiz"
            className="text-white hover:text-gray-200"
            onClick={() => setOpen(false)}
          >
            Quiz
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-gray-200"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
