import "./Hero.css";
import profileImg from "../assets/profile.jpg";

function Hero() {
  return (
    <>
    

      <section className="hero-section">
        <p className="hero-kicker">BUILDING MODERN DIGITAL SYSTEMS</p>

        <h1 className="hero-title">Rithik Sai</h1>

        <p className="hero-subtitle">
          I build systems that stay calm when things get complex.
        </p>

        <div className="hero-tags">
          <span>Production-Grade Systems</span>
          <span>Design That Scales</span>
          <span>Data With Boundaries</span>
          <span>Engineering With Intent</span>
        </div>

        <div className="hero-cards">
          <div className="about-text-card">
            <h2>Professional Summary</h2>

             <p>
                I work at the intersection of engineering discipline and real-world
                execution. My experience spans building and deploying dependable
                web systems, working with data-intensive workflows, and contributing
                to environments where correctness, performance, and reliability
                are non-negotiable.
              </p>

              <p>
                I focus on writing clean, maintainable code and designing systems
                that hold up beyond demos — in production, under constraints,
                and at scale.
              </p>
               <div className="about-text-footer">
    Built to hold under real constraints
  </div>
          </div>
          

          <div className="about-image-card">
            <img src={profileImg} alt="Rithik Sai" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
