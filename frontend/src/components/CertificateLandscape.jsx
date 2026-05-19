import "./CertificateLandscape.css";

function CertificateLandscape({ image, onClose }) {
  return (
    <div className="cert-view-overlay" onClick={onClose}>
      <div className="cert-view-wrapper" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cert-view-close" onClick={onClose}>
          ×
        </button>

        <img
          src={image}
          alt="Certificate Landscape"
          className="cert-view-image cert-view-image-landscape"
        />
      </div>
    </div>
  );
}

export default CertificateLandscape;