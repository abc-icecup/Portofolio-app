import "./CertificatePortrait.css";

function CertificatePortrait({ image, onClose }) {
  return (
    <div className="cert-view-overlay" onClick={onClose}>
      <div className="cert-view-wrapper" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cert-view-close" onClick={onClose}>
          ×
        </button>

        <img
          src={image}
          alt="Certificate Portrait"
          className="cert-view-image cert-view-image-portrait"
        />
      </div>
    </div>
  );
}

export default CertificatePortrait;