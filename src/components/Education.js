import "./Education.css";

export default function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>

      {/* PRIMARY DEGREE */}
      <div className="edu-primary">
        <h3>B.Tech in Computer Science & Engineering</h3>
        <p className="edu-org">KL University</p>

        <div className="edu-primary-meta">
          <span className="edu-primary-score">CGPA 9.35</span>
          <span className="edu-primary-year">2026</span>
        </div>
      </div>

      {/* SECONDARY EDUCATION */}
      <div className="edu-secondary-grid">
        <div className="edu-secondary">
          <h4>Class XII — Board of Intermediate Education</h4>
          <p className="edu-org">Narayana Junior College</p>
          <span className="edu-score">96.60%</span>
          <span className="edu-year">2021</span>
        </div>

        <div className="edu-secondary">
          <h4>Class X — SSC</h4>
          <p className="edu-org">Narayana School</p>
          <span className="edu-score">CGPA 10.00</span>
          <span className="edu-year">2019</span>
        </div>
      </div>
    </section>
  );
}
