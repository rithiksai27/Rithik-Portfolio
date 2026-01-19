import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Engineering Toolkit</h2>

      <div className="skills-architecture">

        {/* Core Programming */}
        <div className="skill-block">
          <h3>Core Programming</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>C</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Frontend Engineering */}
        <div className="skill-block">
          <h3>Frontend Engineering</h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend & APIs */}
        <div className="skill-block">
          <h3>Backend & APIs</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>WebSockets</li>
            <li>JWT Authentication</li>
            <li>Role-Based Access Control (RBAC)</li>
            <li>API Security</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skill-block">
          <h3>Databases</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        {/* Developer Tooling */}
        <div className="skill-block">
          <h3>Developer Tooling</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Google Maps API</li>
          </ul>
        </div>

        {/* Academic Foundations */}
        <div className="skill-block">
          <h3>Computer Science Foundations</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Database Management Systems</li>
            <li>Object-Oriented Programming</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
