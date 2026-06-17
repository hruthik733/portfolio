function CertificationCard({ certification }) {
  return (
    <a
      href={certification.link}
      target="_blank"
      rel="noopener noreferrer"
      className="certification-card"
    >
      <h3>{certification.title}</h3>

      <p>{certification.issuer}</p>
    </a>
  );
}

export default CertificationCard;