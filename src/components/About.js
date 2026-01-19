import "./About.css";
import profileImg from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">

        <div className="about-image-card">
          <img src={profileImg} alt="Rithik Sai" />
        </div>

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

          <div className="about-tags">
            <span>Production Systems</span>
            <span>Scalable Architectures</span>
            <span>Data-Intensive Workflows</span>
            <span>Engineering Discipline</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
