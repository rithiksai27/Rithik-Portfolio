import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Academic Projects</h2>

      {/* NoteLoop */}
      <div className="project-block">
        <div className="project-header">
          <div>
            <h3>NoteLoop — Academic Content Platform</h3>
            <p className="project-org">
              Full-Stack Web Application
            </p>
          </div>
          <span className="project-date">Live Deployment</span>
        </div>

        <div className="project-metrics">
          <div>
            <span className="metric-value">100+</span>
            <span className="metric-label">Registered Users</span>
          </div>
          <div>
            <span className="metric-value">500+</span>
            <span className="metric-label">Sessions</span>
          </div>
          <div>
            <span className="metric-value">99%</span>
            <span className="metric-label">Uptime</span>
          </div>
          <div>
            <span className="metric-value">1000+</span>
            <span className="metric-label">API Requests</span>
          </div>
        </div>

        <div className="project-links">
          <a
            href="https://noteloop-n4j4.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="project-link primary"
          >
            View Deployed System →
          </a>

          <a
            href="https://github.com/rithiksai27/noteloop"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Source Repository →
          </a>
        </div>
      </div>

      {/* Traxigo */}
      <div className="project-block">
        <div className="project-header">
          <div>
            <h3>Traxigo — Ride Booking System</h3>
            <p className="project-org">
              Team Lead · Full-Stack Development
            </p>
          </div>
          <span className="project-date">In Development</span>
        </div>

        <div className="project-metrics">
          <div>
            <span className="metric-value">Multi-Point</span>
            <span className="metric-label">Fare Allocation</span>
          </div>
          <div>
            <span className="metric-value">Maps API</span>
            <span className="metric-label">Distance Matrix</span>
          </div>
          <div>
            <span className="metric-value">Fair-Split</span>
            <span className="metric-label">Cost Logic</span>
          </div>
          <div>
            <span className="metric-value">IIT-H</span>
            <span className="metric-label">Proposed At</span>
          </div>
        </div>

        <div className="project-links">
          <a
            href="https://github.com/rithiksai27/Traxigo-Ride-Booking-App"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Source Repository →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
