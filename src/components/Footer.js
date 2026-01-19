import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed & built by <strong>Rithik Sai</strong> — © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
