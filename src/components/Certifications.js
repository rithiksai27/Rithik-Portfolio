import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Introduction to Databases",
      provider: "Coursera",
      date: "August 23, 2023",
      duration: "27 Hours",
      link: "https://www.coursera.org/account/accomplishments/verify/TNTU4RFYVDRS",
    },
    {
      title: "The Complete Web Development Bootcamp",
      provider: "Udemy",
      date: "March 24, 2024",
      duration: "61.5 Hours",
      link: "https://www.udemy.com/certificate/UC-81939939-f432-4dcd-a2c3-5fbda3633925/",
    },
    {
      title: "Introduction to Artificial Intelligence",
      provider: "Coursera",
      date: "December 22, 2023",
      duration: "12 Hours",
      link: "https://www.coursera.org/account/accomplishments/verify/PNRM4RZK9DNC",
    },
  ];

  return (
    <section className="cert-section" id="certifications">
      <h2 className="section-title">Professional Certifications</h2>

      <div className="cert-list">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-item"
          >
            <div className="cert-main">
              <h3>{cert.title}</h3>
              <p className="cert-provider">{cert.provider}</p>
            </div>

            <div className="cert-meta">
              <span>{cert.date}</span>
              <span>{cert.duration}</span>
            </div>

            <div className="cert-action">
              View Credential →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
