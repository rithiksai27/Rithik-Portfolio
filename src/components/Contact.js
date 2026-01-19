import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">

        <h2 className="contact-title">Let’s Connect</h2>

        <p className="contact-text">
          If my work aligns with what you’re looking for, I’d be glad to connect.
          I’m open to conversations around opportunities, collaboration, or
          meaningful engineering challenges.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:rithiksai27@gmail.com"
            className="contact-btn email"
          >
            Email
          </a>

          <a
            href="https://github.com/rithiksai27"
            target="_blank"
            rel="noreferrer"
            className="contact-btn github"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rithiksai27"
            target="_blank"
            rel="noreferrer"
            className="contact-btn linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
