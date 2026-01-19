import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <p className="hero-kicker">BUILDING MODERN DIGITAL SYSTEMS</p>

      <h1 className="hero-title">
        Rithik Sai
      </h1>

      <p className="hero-subtitle">
        Designing and delivering dependable systems where clarity, scale,
        and execution matter.
      </p>

      <a
        className="hero-button"
        href="https://drive.google.com/file/d/1y1d0N-oQ4HqbuuCsor-sqdpu58G8CCW9/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>
  );
}

export default Hero;
