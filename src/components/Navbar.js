import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
      setOpen(false); // ✅ CLOSE dropdown on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${hidden ? "hide" : ""}`}>
      <div className="nav-inner">

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>
            <a href="#contact" className="contact-link">Contact</a>
          </li>
        </ul>

        <div className="nav-more" ref={dropdownRef}>
          <button onClick={() => setOpen(!open)}>
            More ▾
          </button>

          {open && (
            <div className="dropdown">
              <a href="#education" onClick={() => setOpen(false)}>Education</a>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a href="#certifications" onClick={() => setOpen(false)}>Certifications</a>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
