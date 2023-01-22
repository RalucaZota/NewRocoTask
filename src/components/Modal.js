import "../Styles/Modal.css";
import ReactDom from "react-dom";

export default function Modal({ open, children, onClose, handleSubmit }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="OVERLAY_STYLES" />
      <div className="MODAL_STYLES">
        Thoese are correct?
        {children}
        <br></br>
        <button onClick={handleSubmit}>Send the data!</button>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
