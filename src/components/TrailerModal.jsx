import { useEffect } from "react";
import "../styles/TrailerModal.css";

function TrailerModal({ trailerKey, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "30px",
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "35px",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        {" "}
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default TrailerModal;
