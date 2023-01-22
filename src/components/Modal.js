import "../Styles/Modal.css";
import ReactDom from "react-dom";
import "../Styles/Modal.css";

export default function Modal({ open, children, onClose, handleSubmit }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="OVERLAY_STYLES" />
      <div className="MODAL_STYLES">
        These are correct?
        {children}
        <br></br>
        <button onClick={handleSubmit}>Send the data!</button>
        <button onClick={onClose}>Back</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
