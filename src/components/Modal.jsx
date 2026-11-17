import { useEffect, useRef } from "react";
import { X } from "lucide-react";
export default function Modal({ item, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (item && !element.open) element.showModal();
    else if (!item && element.open) element.close();
  }, [item]);
  return (
    <dialog
      ref={dialog}
      className="modal"
      aria-labelledby="modal-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) onClose();
      }}
    >
      <div className="modal-content">
        <button
          className="close-modal"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          <X />
        </button>
        <span className="eyebrow">{item?.category}</span>
        <h2 id="modal-title">{item?.title}</h2>
        <p>{item?.detail}</p>
        <span className="note">
          Recurso do PFC original · apresentação institucional
        </span>
      </div>
    </dialog>
  );
}
