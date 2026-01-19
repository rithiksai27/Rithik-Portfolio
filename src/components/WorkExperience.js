import "./WorkExperience.css";

function WorkExperience() {
  return (
    <section className="work-section" id="experience">
      <h2 className="section-title">Work Experience</h2>

      {/* DRDL */}
      <div className="work-block">
        <div className="work-header">
          <div>
            <h3>Research Intern</h3>
            <p className="work-org">
              Defence Research & Development Laboratory (DRDL)
            </p>
          </div>
          <span className="work-date">Dec 2025 – Mar 2026</span>
        </div>

        <div className="work-metrics">
          <div>
            <span className="metric-value">1000+</span>
            <span className="metric-label">Parameters</span>
          </div>
          <div>
            <span className="metric-value">1M+</span>
            <span className="metric-label">Valid Combinations</span>
          </div>
          <div>
            <span className="metric-value">7.9M+</span>
            <span className="metric-label">Graph Variations</span>
          </div>
          <div>
            <span className="metric-value">95%</span>
            <span className="metric-label">Efficiency Gain</span>
          </div>
        </div>

        <a
          href="https://drdlgraphs.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="work-link"
        >
          View Deployed System →
        </a>
      </div>

      {/* INNOLOGIC */}
      <div className="work-block">
        <div className="work-header">
          <div>
            <h3>Full-Stack Development Intern</h3>
            <p className="work-org">
              InnoLogic Technologies Pvt. Ltd
            </p>
          </div>
          <span className="work-date">Sep 2025 – Nov 2025</span>
        </div>

        <div className="work-metrics">
          <div>
            <span className="metric-value">Enterprise</span>
            <span className="metric-label">UI Systems</span>
          </div>
          <div>
            <span className="metric-value">Angular</span>
            <span className="metric-label">Frontend Stack</span>
          </div>
          <div>
            <span className="metric-value">Production</span>
            <span className="metric-label">Readiness</span>
          </div>
          <div>
            <span className="metric-value">Real-Time</span>
            <span className="metric-label">Requirements</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
