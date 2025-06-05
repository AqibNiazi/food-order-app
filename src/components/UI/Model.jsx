import React, { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
const Model = ({ children, open, className }) => {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    // Cleanup function to close the dialog when the component unmounts
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("model")
  );
};

export default Model;
