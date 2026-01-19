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
        href="https://drive.google.com/file/d/1sTfWwf38_gtH457h1o9scJGa7kvuR_Ur/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>
  );
}

export default Hero;
