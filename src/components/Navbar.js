import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

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

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1ouR0wyJ1ntrXy4Vpqt0TlyOzA5wdfVQM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
