import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinksRef = useRef([]);

  // ✅ Reset refs safely AFTER render
  useEffect(() => {
    navLinksRef.current = [];
  }, []);

  // ✅ GSAP animation (optional – keep commented if not using now)
  // useGSAP(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(navLinksRef.current, {
  //       y: 30,
  //       opacity: 0,
  //       duration: 0.6,
  //       ease: "power2.out",
  //       stagger: 0.15,
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);

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
        <img
          src={logo}
          alt="GAGANA Logo"
          className="scale-175 rounded-full h-10 w-auto drop-shadow-lg transition-transform duration-300 hover:scale-150"
        />
      </div>

      {/* RIGHT: DESKTOP LINKS */}
      <div className="hidden md:flex gap-8 text-white">
        <Link ref={(el) => (navLinksRef.current[0] = el)} to="/news">
          News
        </Link>
        <Link ref={(el) => (navLinksRef.current[1] = el)} to="/facts">
          Facts
        </Link>
        <Link ref={(el) => (navLinksRef.current[2] = el)} to="/solar">
          3D Solar
        </Link>
        <Link ref={(el) => (navLinksRef.current[3] = el)} to="/ai">
          AI
        </Link>
        <Link ref={(el) => (navLinksRef.current[4] = el)} to="/quiz">
          Quiz
        </Link>
        <Link ref={(el) => (navLinksRef.current[5] = el)} to="/profile">
          Profile
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-7 h-0.75 bg-white rounded transition ${open ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-7 h-0.75 bg-white rounded transition ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`w-7 h-0.75 bg-white rounded transition ${open ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 right-0 w-48 p-6 flex flex-col gap-4 bg-white/10 backdrop-blur-xl shadow-xl md:hidden">
          <Link to="/news" onClick={() => setOpen(false)}>
            News
          </Link>
          <Link to="/facts" onClick={() => setOpen(false)}>
            Facts
          </Link>
          <Link to="/solar" onClick={() => setOpen(false)}>
            3D Solar
          </Link>
          <Link to="/quiz" onClick={() => setOpen(false)}>
            Quiz
          </Link>
          <Link to="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
